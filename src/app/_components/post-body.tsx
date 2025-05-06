type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-xl mx-auto">
      <div className="markdown" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
