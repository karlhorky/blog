import type { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-foreground scroll-m-20 pt-2 pb-8 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
}
