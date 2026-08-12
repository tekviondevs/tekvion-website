import { Fragment, type ReactElement } from 'react';
import type { BlockNode } from '@/content/types';

/**
 * Turns the typed `BlockNode[]` body of a blog post into semantic HTML.
 *
 * The renderer emits plain elements styled by the `.prose` rules in
 * globals.css — there is no markdown parser and no syntax-highlighting
 * dependency, which keeps every post statically rendered with zero runtime JS.
 *
 * Heading ids are produced by `headingIds()` so the table of contents and the
 * rendered article always agree on the anchor, even when two headings share
 * the same wording.
 */

/* -------------------------------------------------------------------------- */
/*  Ids                                                                        */
/* -------------------------------------------------------------------------- */

/** Lower-case, hyphenated, ASCII-safe fragment id. Shared with the TOC. */
export function slugify(text: string): string {
  return text
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/['‘’`]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Maps a block's index to its heading id. Duplicated headings get a numeric
 * suffix so every id on the page stays unique.
 */
export function headingIds(blocks: BlockNode[]): Map<number, string> {
  const seen = new Map<string, number>();
  const ids = new Map<number, string>();

  blocks.forEach((block, index) => {
    if (block.type !== 'h2' && block.type !== 'h3') return;
    const base = slugify(block.text) || `section-${index + 1}`;
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    ids.set(index, count === 0 ? base : `${base}-${count + 1}`);
  });

  return ids;
}

export interface TocEntry {
  id: string;
  text: string;
  level: 2 | 3;
}

/** Ordered h2/h3 entries for the table of contents. */
export function buildToc(blocks: BlockNode[]): TocEntry[] {
  const ids = headingIds(blocks);

  return blocks.flatMap((block, index) => {
    if (block.type !== 'h2' && block.type !== 'h3') return [];
    const id = ids.get(index);
    if (!id) return [];
    return [{ id, text: block.text, level: block.type === 'h2' ? 2 : 3 }];
  });
}

/* -------------------------------------------------------------------------- */
/*  Renderer                                                                   */
/* -------------------------------------------------------------------------- */

function HeadingAnchor({ id, text }: { id: string; text: string }): ReactElement {
  return (
    <a className="heading-anchor" href={`#${id}`} aria-label={`Link to section: ${text}`}>
      #
    </a>
  );
}

export interface BlockRendererProps {
  blocks: BlockNode[];
}

/**
 * Renders the blocks as siblings — the caller supplies the `.prose` wrapper
 * (normally the page's `<article>`) so the spacing rules apply to the blocks
 * as direct children.
 */
export function BlockRenderer({ blocks }: BlockRendererProps): ReactElement {
  const ids = headingIds(blocks);

  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'h2': {
            const id = ids.get(index) ?? slugify(block.text);
            return (
              <h2 key={index} id={id}>
                {block.text}
                <HeadingAnchor id={id} text={block.text} />
              </h2>
            );
          }

          case 'h3': {
            const id = ids.get(index) ?? slugify(block.text);
            return (
              <h3 key={index} id={id}>
                {block.text}
                <HeadingAnchor id={id} text={block.text} />
              </h3>
            );
          }

          case 'p':
            return <p key={index}>{block.text}</p>;

          case 'ul':
            return (
              <ul key={index}>
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            );

          case 'ol':
            return (
              <ol key={index}>
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ol>
            );

          case 'quote':
            return (
              <blockquote key={index}>
                <p>{block.text}</p>
                {block.attribution ? <cite>{block.attribution}</cite> : null}
              </blockquote>
            );

          case 'callout':
            return (
              <aside key={index} className="callout" aria-label={block.title}>
                <p className="callout__title">{block.title}</p>
                <p className="callout__body">{block.text}</p>
              </aside>
            );

          case 'code':
            return (
              <div key={index} className="code-block">
                <span className="code-block__lang" aria-hidden="true">
                  {block.language}
                </span>
                <pre tabIndex={0}>
                  <code className={`language-${block.language}`}>{block.code}</code>
                </pre>
              </div>
            );

          case 'table':
            return (
              <div
                key={index}
                className="table-wrap"
                role="region"
                aria-label={`Table: ${block.headers.join(', ')}`}
                tabIndex={0}
              >
                <table>
                  <thead>
                    <tr>
                      {block.headers.map((header, headerIndex) => (
                        <th key={headerIndex} scope="col">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) =>
                          cellIndex === 0 ? (
                            <th key={cellIndex} scope="row">
                              {cell}
                            </th>
                          ) : (
                            <td key={cellIndex}>{cell}</td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          default:
            return <Fragment key={index} />;
        }
      })}
    </>
  );
}
