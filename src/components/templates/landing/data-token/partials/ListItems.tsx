interface ListItem {
  title: string | null;
  details: string;
}

interface ListItemsProps {
  description?: string;
  content: ListItem[] | string;
}

const ListItems = ({ description, content }: ListItemsProps) => (
  <>
    <div className="lg:p-8 u-text-format">
      {description && (
        <div
          dangerouslySetInnerHTML={{
            __html: description as string,
          }}
        ></div>
      )}
      {Array.isArray(content) ? (
        <ol>
          {content.map(({ title, details }, index) => (
            <li key={index}>
              {title && (
                <>
                  <strong>{title}</strong> <br />
                </>
              )}{" "}
              <span
                dangerouslySetInnerHTML={{
                  __html: details,
                }}
              ></span>
            </li>
          ))}
        </ol>
      ) : (
        <div
          className="font-alt-post text-theme-base-content-muted text-base space-y-8"
          dangerouslySetInnerHTML={{
            __html: content as string,
          }}
        ></div>
      )}
    </div>

    <style jsx>{`
      .u-text-format {
        font-family: GT-America;
        font-weight: 200;
        color: var(--color-base-content-muted);
      }
      .u-text-format strong {
        font-family: GT-America;
        font-weight: 700;
        font-size: 1.1rem;
        color: var(--color-base-content);
      }
      .u-text-format ol {
        counter-reset: numbered-list;
      }
      .u-text-format ol,
      .u-text-format ul {
        list-style-type: none;
        padding-left: 35px;
      }
      .u-text-format ol li,
      .u-text-format ul li {
        line-height: 1.65;
        margin: 25px 0;
        position: relative;
      }
      .u-text-format ol li:before,
      .u-text-format ul li:before {
        background-color: var(--color-primary);
        position: absolute;
      }
      .u-text-format ol > li:before {
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

export default ListItems;
