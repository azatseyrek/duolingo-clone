'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import db from '@/db/drizzle';
import { getCourseById, getUserProgress } from '@/db/queries';
import { userProgress } from '@/db/schema';
import { auth, currentUser } from '@clerk/nextjs/server';

export const upsertUserProgress = async (courseId: number) => {
  const { userId } = await auth();
  const user = await currentUser();

  if (!user || !userId) {
    throw new Error('Unauthorized!');
  }
  const course = await getCourseById(courseId);
  if (!course) {
    throw new Error('Course not found!');
  }

  //   TODO: enable once units and lessens are added
  //   if (!course.units.length) {
  //     throw new Error('Course is empty');
  //   }

  const existingUserProgress = await getUserProgress();

  if (existingUserProgress) {
    await db.update(userProgress).set({
      activeCourseId: courseId,
      userName: user.firstName || 'User',
      userImageSrc: user.imageUrl || '/mascot.svg',
    });

    revalidatePath('/courses');
    revalidatePath('/learn');
    redirect('/learn');
  }

  await db.insert(userProgress).values({
    userId,
    activeCourseId: courseId,
    userName: user.firstName || 'User',
    userImageSrc: user.imageUrl || '/mascot.svg',
  });

  revalidatePath('/courses');
  revalidatePath('/learn');
  redirect('/learn');
};
