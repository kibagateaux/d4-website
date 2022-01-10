export default function PostContent({ html }: { html: string }) {
  return (
    <div
      className="space-y-8 font-alt"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
