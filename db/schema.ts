import { relations } from 'drizzle-orm';
import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core';

export const courses = pgTable('courses', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  imageSrc: text('image_src').notNull(),
});

// her bir kursun birden falza user progress'ı olabilir. Bu sebeple many ilişkisi tanımlıyoruz.
export const coursesRealations = relations(courses, ({ many }) => ({
  userProgress: many(userProgress),
}));

export const userProgress = pgTable('user_progress', {
  userId: text('user_id').primaryKey(),
  userName: text('user_name').notNull().default('User'),
  userImageSrc: text('user_image_src').notNull().default('/mascot.svg'),
  activeCourseId: integer('active_course_id').references(() => courses.id, {
    onDelete: 'cascade',
  }),
  hearts: integer('hearts').notNull().default(5),
  points: integer('points').notNull().default(0),
});

// ?  WHAT IS THIS CODE DOING?
// userProgress tablosu ile courses tablosu arasında one ilişkisi tanımlıyoruz. Burada activeCourseId alanı courses tablosundan gelen id alanına referans veriyor.
export const userProgressRelations = relations(userProgress, ({ one }) => ({
  // userProgress tablosundan gelen activeCourseId alanı courses tablosundan gelen id alanına referans veriyor.
  activeCourse: one(courses, {
    fields: [userProgress.activeCourseId],
    references: [courses.id],
  }),
}));
