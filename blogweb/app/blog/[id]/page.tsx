// app/blog/[id]/page.tsx
import { heroList } from "@/app/mock/heroData";
import BlogRenderer from "@/app/components/user/components/BlogRenderer";
import { notFound } from "next/navigation";

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const blog = heroList.find((b) => b.id === id);

  if (!blog) return notFound();
  return (
    <div className="min-h-screen  text-white">
      {/* HERO */}
      <div className="relative h-[50vh] w-full">
        <img
          src={blog.backgroundImage}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050510] to-[#02020a]" />
          <div className="absolute inset-0 animate-[pulse_8s_linear_infinite] bg-[radial-gradient(white_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />
          <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-purple-600/20 blur-[160px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-blue-600/20 blur-[160px] rounded-full animate-pulse" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto px-4 py-10">
        <BlogRenderer content={blog.content} />
      </div>
      
    </div>
  );
}
