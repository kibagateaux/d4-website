export default function PostAuthor({
  name,
  description,
  image,
}: {
  image: string;
  name: string;
  description: string;
}) {
  return (
    <div className="flex items-center space-x-4">
      <img src={image} alt="" className="rounded-full object-cover w-20 h-20 border" />
      <div>
        <p className="font-alt font-bold mb-2">{name}</p>
        <span className="text-theme-base-content-muted">{description}</span>
      </div>
    </div>
  );
}
