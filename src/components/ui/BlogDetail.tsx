import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "@/api/blogs";

type Props = {
  blogId: string | null;
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BlogDetail({ blogId }: Props) {
  const { data, isLoading } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => getBlogById(blogId!),
    enabled: !!blogId,
  });

  if (!blogId) {
    return <p className="text-gray-500">Select a blog to read</p>;
  }

  if (isLoading) return <p>Loading blog...</p>;

  return (
    <article className="bg-white rounded-xl shadow p-6 space-y-6">
      {/* COVER IMAGE */}
      <img
        src={data?.coverImage}
        alt={data?.title}
        className="rounded-lg w-full max-h-[380px] object-cover"
      />

      {/* META */}
      <div className="text-sm text-indigo-600 font-medium">
        {data?.category.join(" • ")} · 5 min read
      </div>

      {/* TITLE */}
      <h1 className="text-3xl font-bold">
        {data?.title}
      </h1>

      {/* INFO BOX */}
      <div className="grid grid-cols-3 gap-4 border rounded-lg p-4 text-center text-sm bg-gray-50">
        <div>
          <p className="text-gray-500">Category</p>
          <p className="font-medium">{data?.category.join(", ")}</p>
        </div>
        <div>
          <p className="text-gray-500">Read Time</p>
          <p className="font-medium">5 Mins</p>
        </div>
        <div>
          <p className="text-gray-500">Date</p>
          <p className="font-medium">{formatDate(data!.date)}</p>
        </div>
      </div>

      {/* DESCRIPTION */}
      <p className="text-gray-700 font-medium">
        {data?.description}
      </p>

      {/* CONTENT */}
      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
        {data?.content}
      </div>

      {/* FOOTER */}
      <div className="border-t pt-4 flex justify-between text-sm text-gray-500">
        <span>
          Written by <b>Vishal kumar</b>
        </span>
        <span>CA Monk</span>
      </div>
    </article>
  );
}
