"use client";
import { apiClient } from "@/app/utils/axios.client";
import { useState, useRef, useEffect } from "react";
import uploadToCloudinary from "@/app/utils/cloudinary.upload";
import {
  Type,
  Image as ImageIcon,
  AlignLeft,
  Plus,
  Trash2,
  Upload,
  Send,
  MoveVertical,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence, Reorder } from "motion/react";
import { API_PATHS } from "@/app/utils/apiPaths";
const api = apiClient("BACKEND");
type Block =
  | { id: string; type: "heading"; value: string }
  | { id: string; type: "paragraph"; value: string }
  | {
      id: string;
      type: "image";
      file?: File;
      preview?: string;
      src?: string;
      caption: string;
    };

export default function App() {
  const [title, setTitle] = useState("");
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [isPublished, setIsPublished] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const addBlock = (type: Block["type"]) => {
    const id = Math.random().toString(36).substr(2, 9);
    if (type === "image") {
      setBlocks([...blocks, { id, type, src: "", caption: "" }]);
    } else {
      setBlocks([...blocks, { id, type, value: "" }]);
    }
    setIsPublished(false);
  };

  const updateBlock = (id: string, newBlock: Block) => {
    setBlocks(blocks.map((b) => (b.id === id ? newBlock : b)));
    setIsPublished(false);
  };

  const deleteBlock = (id: string) => {
    setBlocks(blocks.filter((b) => b.id !== id));
  };

  const handlePublish = async () => {
    try {
      const formData = new FormData();

      formData.append("title", title);

      // gửi content (có placeholder image, chưa có src)
      const cleanBlocks = blocks.map((b) => {
        if (b.type === "image") {
          return {
            id: b.id,
            type: "image",
            caption: b.caption || "",
          };
        }

        return {
          id: b.id,
          type: b.type,
          value: b.value || "",
        };
      });

      formData.append("content", JSON.stringify(cleanBlocks));

      // gửi toàn bộ file images
      blocks.forEach((b) => {
        if (b.type === "image" && b.file) {
          formData.append("files", b.file);
        }
      });

      const res = await api.post(API_PATHS.POST.CREATE_POST, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("DONE:", res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen font-sans flex" ref={scrollContainerRef}>
      {/* FIXED TOOLBOX SIDEBAR */}
      <aside className=" fixed bottom-4 left-1/2 -translate-x-1/2 md:left-6 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 z-50 ">
        {" "}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-white border border-stone-200 rounded-2xl p-2 shadow-xl flex flex-row md:flex-col gap-2  "
        >
          <div className="p-2 border-b border-stone-100 mb-1 flex justify-center">
            <Plus className="w-5 h-5  " />
          </div>

          <ToolButton
            icon={<Type className="w-5 h-5" />}
            label="Heading"
            onClick={() => addBlock("heading")}
          />
          <ToolButton
            icon={<AlignLeft className="w-5 h-5" />}
            label="Text"
            onClick={() => addBlock("paragraph")}
          />
          <ToolButton
            icon={<ImageIcon className="w-5 h-5" />}
            label="Image"
            onClick={() => addBlock("image")}
          />

          <div className="mt-4 pt-2 border-t border-stone-100 flex justify-center">
            <button
              onClick={handlePublish}
              className={`p-3 rounded-xl transition-all duration-300 ${
                isPublished
                  ? "bg-green-500 text-white"
                  : "bg-stone-900 text-white hover:bg-stone-800"
              }`}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-24 relative">
        {" "}
        {/* HEADER SECTION */}
        <header className="mb-16">
          <textarea
            autoFocus
            className="w-full text-5xl font-display font-medium mb-4 outline-none bg-transparent placeholder-stone-300 resize-none leading-tight"
            placeholder="Title of your post..."
            rows={1}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              e.target.style.height = "auto";
              e.target.style.height = e.target.scrollHeight + "px";
            }}
          />
          <div className="flex items-center gap-4   text-sm font-display tracking-widest uppercase">
            <span>By You</span>
            <span className="w-1 h-1 bg-stone-300 rounded-full" />
            <span>
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        </header>
        {/* BLOCKS SECTION */}
        <Reorder.Group
          axis="y"
          values={blocks}
          onReorder={setBlocks}
          className="space-y-8"
        >
          <AnimatePresence>
            {blocks.map((block) => (
              <Reorder.Item
                key={block.id}
                value={block}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group relative cursor-grab active:cursor-grabbing"
              >
                {/* ACTIONS ON HOVER */}
                <div className="absolute -left-12 top-1 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => deleteBlock(block.id)}
                    className="p-1.5 rounded-md hover:bg-red-50   hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  {/* DRAG ICON */}
                  <div className="p-1.5  ">
                    <MoveVertical className="w-4 h-4" />
                  </div>
                </div>

                {/* HEADING BLOCK */}
                {block.type === "heading" && (
                  <input
                    className="w-full text-3xl font-serif font-bold   bg-transparent outline-none placeholder-stone-200"
                    placeholder="Subheading..."
                    value={block.value}
                    onChange={(e) =>
                      updateBlock(block.id, {
                        ...block,
                        value: e.target.value,
                      })
                    }
                  />
                )}

                {/* PARAGRAPH BLOCK */}
                {block.type === "paragraph" && (
                  <textarea
                    className="w-full text-xl font-serif leading-relaxed  bg-transparent outline-none placeholder-stone-200 resize-none"
                    placeholder="Enter some text..."
                    rows={1}
                    value={block.value}
                    onChange={(e) => {
                      updateBlock(block.id, {
                        ...block,
                        value: e.target.value,
                      });
                      e.target.style.height = "auto";
                      e.target.style.height = e.target.scrollHeight + "px";
                    }}
                    onFocus={(e) => {
                      e.target.style.height = "auto";
                      e.target.style.height = e.target.scrollHeight + "px";
                    }}
                  />
                )}

                {/* IMAGE BLOCK */}
                {block.type === "image" && (
                  <div className="rounded-2xl overflow-hidden group/img">
                    {block.preview ? (
                      <div className="relative">
                        <img
                          src={block.preview}
                          alt=""
                          className="w-full h-auto rounded-2xl object-cover"
                        />
                        <button
                          onClick={() =>
                            updateBlock(block.id, {
                              ...block,
                              file: undefined,
                              preview: undefined,
                            })
                          }
                          className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover/img:opacity-100 transition-opacity backdrop-blur-md"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    ) : (
                      <label className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-stone-200 rounded-2xl bg-white hover:bg-stone-50 transition-colors cursor-pointer group/label">
                        <div className="bg-stone-100 p-4 rounded-full mb-3 group-hover/label:scale-110 transition-transform">
                          <Upload className="w-6 h-6 " />
                        </div>
                        <span className=" font-display">
                          Click to upload an image
                        </span>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (!file) return;
                            const preview = URL.createObjectURL(file);
                            updateBlock(block.id, {
                              ...block,
                              file,
                              preview,
                            });
                          }}
                        />
                      </label>
                    )}

                    <input
                      placeholder="Add a caption..."
                      className="w-full mt-3 text-center text-sm font-display italic  outline-none bg-transparent"
                      value={block.caption}
                      onChange={(e) =>
                        updateBlock(block.id, {
                          ...block,
                          caption: e.target.value,
                        })
                      }
                    />
                  </div>
                )}
              </Reorder.Item>
            ))}
          </AnimatePresence>

          {/* EMPTY STATE */}
          {blocks.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-12 border-t border-stone-100"
            >
              <p className="text-stone-900 italic font-serif text-lg">
                Click the icons on the left to start adding content to your
                story...
              </p>
            </motion.div>
          )}
        </Reorder.Group>
        {/* NOTIFICATION */}
        <AnimatePresence>
          {isPublished && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="fixed bottom-12 left-1/2 -translate-x-1/2 bg-stone-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50 font-display"
            >
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span>Your piece has been published!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

function ToolButton({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <div className="relative group/tool">
      <button
        onClick={onClick}
        className="p-3 rounded-xl hover:bg-stone-50 text-stone-900 hover:text-stone-900 transition-all duration-200"
      >
        {icon}
      </button>
      <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-2 py-1 bg-stone-900 text-white text-[10px] uppercase tracking-widest rounded opacity-0 group-hover/tool:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-[60]">
        {label}
      </div>
    </div>
  );
}
