export default function PostTitle({ title }: { title: string }) {
  return (
    <p className="flow-root w-full font-bold font-alt text-3xl lg:text-7xl">
      {(title || "").split(" ").map((word, index) => (
        <span
          key={index}
          className="float-left mb-2 lg:mb-4 p-2 lg:p-4 bg-theme-base-content text-theme-base-100"
        >
          {word}
        </span>
      ))}
    </p>
  );
}
