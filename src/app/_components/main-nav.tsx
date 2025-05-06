'use client';

import Logo from '@/app/_components/logo';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 flex">
      <Logo />
      <nav className="flex items-center gap-6">
        <Link
          href="/"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/blog' ? 'text-foreground' : 'text-foreground/60',
          )}
        >
          Blog
        </Link>
        <Link
          href="https://github.com/karlhorky"
          className={cn(
            'text-foreground/60 transition-colors hover:text-foreground/80',
          )}
        >
          GitHub
        </Link>
      </nav>
    </div>
  );
}
