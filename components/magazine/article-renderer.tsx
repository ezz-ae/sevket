import type { ArticleBlock } from "@/lib/magazine-data";

export function ArticleRenderer({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="space-y-10 lg:space-y-12">
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  );
}

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "lead":
      return (
        <p className="font-display text-2xl lg:text-3xl leading-[1.45] tracking-[-0.005em] text-foreground max-w-[68ch]">
          {block.text}
        </p>
      );

    case "paragraph":
      return (
        <p className="text-lg leading-[1.8] text-foreground/85 max-w-[68ch]">{block.text}</p>
      );

    case "heading":
      if (block.level === 2) {
        return (
          <h2 className="pt-6 lg:pt-10 font-display text-3xl lg:text-5xl tracking-[-0.01em] leading-tight max-w-[68ch]">
            {block.text}
          </h2>
        );
      }
      return (
        <h3 className="pt-2 lg:pt-4 font-display text-2xl lg:text-3xl tracking-[-0.005em] leading-tight max-w-[68ch]">
          {block.text}
        </h3>
      );

    case "pullquote":
      return (
        <figure className="my-6 lg:my-12 py-10 lg:py-16 border-y border-foreground/10">
          <blockquote className="font-display text-3xl lg:text-5xl leading-[1.15] tracking-[-0.01em] italic max-w-[24ch]">
            &ldquo;{block.text}&rdquo;
          </blockquote>
          {block.attribution && (
            <figcaption className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              — {block.attribution}
            </figcaption>
          )}
        </figure>
      );

    case "callout":
      return (
        <aside className="grid lg:grid-cols-[200px_1fr] gap-4 lg:gap-10 py-7 lg:py-9 px-6 lg:px-9 border-l-2 border-[#b8865a] bg-foreground/[0.02]">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#b8865a] lg:pt-1">
            {block.label}
          </span>
          <p className="text-base lg:text-lg leading-[1.75] text-foreground/85 max-w-[60ch]">
            {block.text}
          </p>
        </aside>
      );

    case "list":
      const Tag = block.ordered ? "ol" : "ul";
      return (
        <Tag className="space-y-4 max-w-[68ch] pl-0">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="grid grid-cols-[auto_1fr] gap-5 text-lg leading-[1.7] text-foreground/85"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#b8865a] pt-2 tabular-nums">
                {block.ordered ? String(i + 1).padStart(2, "0") : "—"}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </Tag>
      );

    case "table":
      return (
        <div className="overflow-x-auto -mx-6 lg:mx-0">
          <table className="w-full border-t border-b border-foreground/15">
            <thead>
              <tr>
                {block.headers.map((h) => (
                  <th
                    key={h}
                    className="text-left align-bottom px-5 lg:px-7 py-5 lg:py-6 border-b border-foreground/15 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className="border-b border-foreground/10 last:border-b-0">
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-5 lg:px-7 py-6 lg:py-8 align-top text-base leading-[1.65] ${
                        ci === 0
                          ? "font-display text-foreground tracking-tight"
                          : "text-foreground/80"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "divider":
      return (
        <div className="flex items-center gap-4 py-6">
          <span className="h-px flex-1 bg-foreground/10" />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            ·
          </span>
          <span className="h-px flex-1 bg-foreground/10" />
        </div>
      );
  }
}
