export default function PostTitle({
  title,
  fontSize = "text-3xl lg:text-5xl",
  padding = "mb-2 lg:mb-4 p-2 lg:p-4",
}: {
  title: string;
  fontSize?: string;
  padding?: string;
}) {
  return (
    <p className={`flow-root w-full font-bold font-alt ${fontSize}`}>
      {(title || "").split(" ").map((word, index) => (
        <span
          key={index}
          className={`float-left ${padding} bg-theme-base-content text-theme-base-100`}
        >
          {word}
        </span>
      ))}
    </p>
  );
}
