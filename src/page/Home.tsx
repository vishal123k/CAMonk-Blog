import { useState } from "react";
import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import Footer from "@/components/ui/Footer";
import BlogList from "@/components/ui/BlogList";
import BlogDetail from "@/components/ui/BlogDetail";
import CreateBlogForm from "@/components/ui/CreateBlogForm";

export default function Home() {
const [selectedId, setSelectedId] = useState<string | null>("1");

  return (
    <>
    
     <Header />
      <Hero />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      <div>
        <CreateBlogForm />
        <BlogList onSelect={setSelectedId} />
      </div>

      <div className="md:col-span-2">
        <BlogDetail blogId={selectedId} />
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}
