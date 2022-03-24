export default function PostContent({ html }: { html: string }) {
  return (
    <>
      <div
        className="space-y-8 font-alt-post" style={{ color: '#616060'}}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  );
}
