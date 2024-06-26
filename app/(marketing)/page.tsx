import Image from 'next/image';
import Link from 'next/link';

import { Loader } from '@/components/loader';
import { Button } from '@/components/ui/button';
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs';

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-[988px] flex-1 flex-col items-center justify-center gap-2 p-4 lg:flex-row lg:p-0">
      <div className="relative mb-8 h-[240px] w-[240px] lg:mb-0 lg:h-[424px] lg:w-[424px]">
        <Image src="/hero.svg" fill alt="Hero" />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-cl max-w-[480px] text-center font-bold text-neutral-600 lg:text-3xl">
          Learn, practice and master new languages with Lingo.
        </h1>
        <div className="max-w[330px] flex w-full flex-col items-center gap-y-3">
          <ClerkLoading>
            <Loader />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton
                mode="modal"
                forceRedirectUrl="/learn"
                signInForceRedirectUrl="/learn"
              >
                <Button size="lg" variant="secondary" className="w-full">
                  Get started
                </Button>
              </SignUpButton>
              <SignInButton
                mode="modal"
                forceRedirectUrl="/learn"
                signUpForceRedirectUrl="/learn"
              >
                <Button size="lg" variant="primaryOutline" className="w-full">
                  I already have an account.
                </Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <Button size="lg" variant="secondary" className="w-full" asChild>
                <Link href="/learn">Continue learning</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
