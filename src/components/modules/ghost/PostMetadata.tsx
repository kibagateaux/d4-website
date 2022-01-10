import { es } from "date-fns/locale";
import { format } from "date-fns";

export default function PostMetadata({
  date,
  readingTime,
}: {
  date: string;
  readingTime: number;
}) {
  if (!date) {
    return null;
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const dateFormatted = format(date, "dd MMM, yyyy", { locale: es });
    return dateFormatted;
  };
  return (
    <p className="text-theme-base-content-muted">
      {`${formatDate(date)} · ${readingTime} min read`}
    </p>
  );
}
