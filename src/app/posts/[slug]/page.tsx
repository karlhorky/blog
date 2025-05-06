import Container from '@/app/_components/container';
import Header from '@/app/_components/header';
import { PostBody } from '@/app/_components/post-body';
import { PostHeader } from '@/app/_components/post-header';
import { getAllPosts, getPostBySlug } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const content = await markdownToHtml(post.content || '');

  return (
    <main>
      <Header />
      <Container>
        <div className="grid grid-cols-5 gap-6 md:gap-12 pt-32">
          {/* left sidebar */}
          <div className="col-span-5 md:col-span-1">
            <div className="pt-8">
              <Link href="/">
                <p className="text-sm text-muted-foreground">← Back to Blog</p>
              </Link>
            </div>
          </div>

          {/* middle */}
          <div className="col-span-5 md:col-span-3">
            <article className="pb-32">
              <PostHeader title={post.title} />
              <PostBody content={content} />
            </article>
          </div>

          {/* right sidebar */}
          <div className="col-span-5 md:col-span-1" />
        </div>
      </Container>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const title = `${post.title} | firstlast.dev`;

  return {
    openGraph: {
      title,
    },
  };
}

export function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
