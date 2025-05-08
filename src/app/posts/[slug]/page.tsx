import Container from '@/app/_components/container';
import Header from '@/app/_components/header';
import { getAllPosts, getPostBySlug } from '@/lib/api';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeStringify from 'rehype-stringify';
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const title = `${post.title} | firstlast.dev`;

  return {
    title,
    description: post.excerpt,
    openGraph: {
      title,
    },
  };
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Post(props: Props) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const content = (
    await remark()
      .use(remarkRehype)
      .use(rehypeExternalLinks, {
        content: { type: 'text', value: ' ↗' },
        target: '_blank',
        rel: ['noopener', 'noreferrer'],
      })
      .use(rehypeStringify)
      .process(post.content)
  ).toString();

  return (
    <main>
      <Header />
      <Container>
        <div className="grid grid-cols-5 gap-6 pt-32 md:gap-12">
          <div className="col-span-5 md:col-span-1">
            <div className="pt-8">
              <Link href="/">
                <p className="text-muted-foreground text-sm">← Back to Blog</p>
              </Link>
            </div>
          </div>

          <div className="col-span-5 md:col-span-3">
            <article className="pb-32">
              <div className="flex justify-center">
                <h1 className="text-foreground scroll-m-20 pt-2 pb-8 text-4xl font-extrabold tracking-tight lg:text-5xl">
                  {post.title}
                </h1>
              </div>
              <div className="mx-auto max-w-xl">
                <div
                  className="markdown"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </div>
            </article>
          </div>

          <div className="col-span-5 md:col-span-1" />
        </div>
      </Container>
    </main>
  );
}

export function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
