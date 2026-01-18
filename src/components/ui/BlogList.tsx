import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/api/blogs";
import BlogCard from "./BlogCard";

type Props = {
  onSelect: (id: string) => void;
};

export default function BlogList({ onSelect }: Props) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  if (isLoading) return <p>Loading blogs...</p>;
  if (error) return <p>Error loading blogs</p>;

  return (
    <div className="space-y-4">
      {data?.map((blog) => (
        <BlogCard key={blog.id} blog={blog} onSelect={onSelect} />
      ))}
    </div>
  );
}
