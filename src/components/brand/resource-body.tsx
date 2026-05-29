import type { ReactNode } from "react";

/** Renders resource body lines: ## headings, bullets, paragraphs. */
export function ResourceBody({ lines }: { lines: string[] }) {
  const nodes: ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) {
      i += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      nodes.push(
        <h2
          key={key++}
          className="mt-10 mb-3 text-xl font-semibold tracking-tight text-[#132232] first:mt-0"
        >
          {line.slice(3)}
        </h2>,
      );
      i += 1;
      continue;
    }

    if (line.startsWith("### ")) {
      nodes.push(
        <h3 key={key++} className="mt-6 mb-2 text-lg font-medium text-[#132232]">
          {line.slice(4)}
        </h3>,
      );
      i += 1;
      continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        items.push(lines[i].trim().slice(2));
        i += 1;
      }
      nodes.push(
        <ul key={key++} className="my-3 list-disc space-y-2 pl-6 text-[#333]">
          {items.map((item) => (
            <li key={item.slice(0, 32)}>{item}</li>
          ))}
        </ul>,
      );
      continue;
    }

    nodes.push(
      <p key={key++} className="my-3 leading-relaxed text-[#333]">
        {line}
      </p>,
    );
    i += 1;
  }

  return <div className="resource-body">{nodes}</div>;
}
