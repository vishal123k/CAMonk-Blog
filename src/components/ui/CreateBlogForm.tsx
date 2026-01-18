import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "@/api/blogs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CreateBlogForm() {
  
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    mutation.mutate({
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      content: formData.get("content") as string,
      category: ["TECH"],
      date: new Date().toISOString(),
      coverImage: "https://via.placeholder.com/800x400",
    });

    e.currentTarget.reset();
  };

  return (
    
    <form onSubmit={submit} className="space-y-3 mb-6">
      <p className="text-2xl font-bold">Latest Article</p>
      <Input name="title" placeholder="Title" required />
      <Input name="description" placeholder="Description" required />
      <Textarea name="content" placeholder="Content" required />
      <Button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? "Creating..." : "Create Blog"}
      </Button>
    </form>
  );
}
