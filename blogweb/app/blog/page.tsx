// app/blog/page.tsx
import Link from "next/link";
import { heroList } from "@/app/mock/heroData";
export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {heroList.map((blog) => (
          <Link key={blog.id} href={`/blog/${blog.id}`} className="group block">
            <div className="bg-white/5 rounded-xl overflow-hidden hover:scale-[1.02] transition">
              {/* IMAGE */}
              <div className="h-48 overflow-hidden">
                <img
                  src={blog.image}
                  className="w-full h-full object-cover group-hover:scale-110 transition"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <p className="text-sm text-white/60">{blog.tag}</p>

                <h2 className="text-lg font-semibold mt-1">{blog.title}</h2>

                <p className="text-sm text-white/70 mt-2 line-clamp-2">
                  {blog.subtitle}
                </p>

                <div className="flex items-center gap-2 mt-4">
                  <img
                    src={blog.author.avatar}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-xs text-white/60">
                    {blog.author.name}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
