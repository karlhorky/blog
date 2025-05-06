'use client';

import Logo from '@/app/_components/logo';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60">
      <div className="container flex h-14 max-w-(--breakpoint-2xl) items-center justify-between">
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
        <ThemeSwitcher />
      </div>
    </header>
  );
}
