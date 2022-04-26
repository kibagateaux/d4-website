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
          font-family: GT-America;
          font-weight: 200;
          color: var(--color-base-content-muted);
        }
        .post-content strong {
          font-family: GT-America;
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--color-base-content);
        }
        .post-content ol {
          counter-reset: numbered-list;
        }
        .post-content ol,
        .post-content ul {
          list-style-type: none;
          padding-left: 35px;
        }
        .post-content ol li,
        .post-content ul li {
          line-height: 1.65;
          margin: 25px 0;
          position: relative;
        }
        .post-content ol li:before,
        .post-content ul li:before {
          background-color: var(--color-primary);
          position: absolute;
        }
        .post-content ol > li:before {
          border-radius: 50%;
          color: #fff;
          content: counter(numbered-list);
          counter-increment: numbered-list;
          font-size: 13px;
          font-weight: 800;
          height: 24px;
          left: -34px;
          line-height: 24px;
          text-align: center;
          top: 2px;
          width: 24px;
        }
      `}</style>
    </>
  );
}
