export default function PostContent({ html }: { html: string }) {
  return (
    <>
      <div
        className="post-content space-y-8"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <style jsx global>{`
        .post-content {
          font-family: GT-America;
          font-weight: 200;
          color: #616060;
        }

        .post-content strong {
          font-family: GT-America;
          font-weight: 500;
          color: black;
        }

        .post-content h3 {
          font-size: 1.5em;
          font-family: GT-America;
          font-weight: 600;
          color: black;
        }

        .post-content a {
          color: var(--color-primary);
          text-decoration: underline;
        }

        .post-content a:hover {
          color: var(--color-primary-focus);
        }

        .post-content li {
          margin-bottom: 20px;
          margin-left: 20px;
        }
      `}</style>
    </>
  );
}
