type Block =
  | { type: "paragraph"; value: string }
  | { type: "heading"; value: string }
  | { type: "image"; src: string };

export default function BlogRenderer({ content }: { content: Block[] }) {
  return (
    <div className="space-y-6">
      {content.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={index}
                className="text-2xl font-semibold mt-8"
              >
                {block.value}
              </h2>
            );

          case "paragraph":
            return (
              <p
                key={index}
                className="text-white/80 leading-8"
              >
                {block.value}
              </p>
            );

          case "image":
            return (
              <img
                key={index}
                src={block.src}
                className="w-full rounded-xl object-cover"
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
}