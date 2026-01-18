import { Card, CardContent } from "@/components/ui/card";
import type { Blog } from "@/api/blogs";

type Props = {
  blog: Blog;
  onSelect: (id: string) => void;
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BlogCard({ blog, onSelect }: Props) {
  return (
    <Card
      className="cursor-pointer hover:shadow-md transition"
      onClick={() => onSelect(blog.id)}
    >
      <CardContent className="p-4 space-y-2">

        {/* CATEGORY + DATE */}
        <div className="flex justify-between text-xs text-gray-500">
          <span className="text-indigo-600 font-medium">
            {blog.category[0]}
          </span>
          <span>{formatDate(blog.date)}</span>
        </div>


        {/* TITLE */}
        <h2 className="font-semibold text-lg">
          {blog.title}
        </h2>


        {/* DESCRIPTION */}
        <p className="text-sm text-gray-600 line-clamp-2">
          {blog.description}
        </p>


        {/* TAG */}
        <span className="inline-block text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded">
          {blog.category[1] ?? "Featured"}
        </span>
      </CardContent>
    </Card>
  );
}
