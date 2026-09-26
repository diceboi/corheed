import Image from "next/image";
import { extractYouTubeId } from "@/lib/wordpress";

// Helper to ensure external links open in a new tab and transform plain YouTube embeds
const processHtmlContent = (html) => {
    if (!html) return '';
    
    // Transform WordPress plain YouTube oEmbed URLs into responsive iframes
    let processed = html.replace(
        /<div class="wp-block-embed__wrapper">\s*(https?:\/\/[^\s<]+)\s*<\/div>/gi,
        (match, url) => {
            const youtubeId = extractYouTubeId(url);
            if (youtubeId) {
                return `<div class="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg my-8 bg-black">
                    <iframe
                        src="https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0"
                        title="YouTube video"
                        class="absolute inset-0 w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>`;
            }
            return match;
        }
    );

    // Add target="_blank" to external links if not already present
    return processed.replace(/<a([^>]+)>/g, (match, attrs) => {
        // Check if it already has target
        if (attrs.includes('target=')) return match;
        
        // Extract href
        const hrefMatch = attrs.match(/href=(["'])(.*?)\1/i);
        if (!hrefMatch) return match;
        
        const href = hrefMatch[2];
        const isInternal = href.startsWith('/') || href.startsWith('#') ||
            href.includes('corheed.hu') || href.includes('coreheed.hu') ||
            href.startsWith('mailto:') || href.startsWith('tel:');
            
        if (isInternal) return match;
        
        // Add target and rel
        return `<a${attrs} target="_blank" rel="noopener noreferrer">`;
    });
};

// Helper to render Gutenberg blocks
function renderBlock(block, index) {
    const { name, attributesJSON, innerBlocks } = block;

    try {
        const attributes = attributesJSON ? JSON.parse(attributesJSON) : {};

        switch (name) {
            case 'core/paragraph':
                const className = attributes.className || '';
                const hasBackground = className.includes('has-background');
                return (
                    <p
                        key={index}
                        className={hasBackground ? 'has-background' : ''}
                        dangerouslySetInnerHTML={{ __html: processHtmlContent(attributes.content) }}
                    />
                );

            case 'core/heading':
                const HeadingTag = `h${attributes.level || 2}`;
                return (
                    <HeadingTag
                        key={index}
                        dangerouslySetInnerHTML={{ __html: processHtmlContent(attributes.content) }}
                    />
                );

            case 'core/image':
                return (
                    <figure key={index} className="my-6">
                        <div className="relative w-full" style={{ aspectRatio: attributes.width && attributes.height ? `${attributes.width}/${attributes.height}` : '16/9' }}>
                            <Image
                                src={attributes.url || ''}
                                alt={attributes.alt || ''}
                                fill
                                className="object-contain rounded-lg"
                                sizes="(max-width: 768px) 100vw, 800px"
                            />
                        </div>
                        {attributes.caption && (
                            <figcaption
                                className="wp-element-caption text-center mt-2"
                                dangerouslySetInnerHTML={{ __html: processHtmlContent(attributes.caption) }}
                            />
                        )}
                    </figure>
                );

            case 'core/list':
                const ListTag = attributes.ordered ? 'ol' : 'ul';
                const listClass = attributes.ordered ? 'ml-6 list-decimal space-y-2' : 'ml-6 list-disc space-y-2';

                if (innerBlocks && innerBlocks.length > 0) {
                    return (
                        <ListTag className={listClass} key={index}>
                            {innerBlocks.map((innerBlock, innerIndex) =>
                                renderBlock(innerBlock, `${index}-${innerIndex}`)
                            )}
                        </ListTag>
                    );
                }
                return (
                    <ListTag
                        key={index}
                        className={listClass}
                        dangerouslySetInnerHTML={{ __html: processHtmlContent(attributes.values) }}
                    />
                );

            case 'core/list-item':
                return (
                    <li key={index}>
                        <span dangerouslySetInnerHTML={{ __html: processHtmlContent(attributes.content) }} />
                        {innerBlocks?.map((innerBlock, innerIndex) =>
                            renderBlock(innerBlock, `${index}-${innerIndex}`)
                        )}
                    </li>
                );


            case 'core/quote':
                return (
                    <blockquote
                        key={index}
                        dangerouslySetInnerHTML={{ __html: processHtmlContent(attributes.value || attributes.citation) }}
                    />
                );


            case 'core/gallery':
                return (
                    <div key={index} className="wp-block-gallery">
                        {innerBlocks?.map((innerBlock, innerIndex) =>
                            renderBlock(innerBlock, `${index}-${innerIndex}`)
                        )}
                    </div>
                );

            case 'core/code':
                return (
                    <pre key={index} className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                        <code>{attributes.content || ''}</code>
                    </pre>
                );

            case 'core/embed':
            case 'core-embed/youtube': {
                const url = attributes.url || attributes.src || '';
                const youtubeId = extractYouTubeId(url) || extractYouTubeId(block.saveContent || '');
                if (youtubeId) {
                    return (
                        <div key={index} className="my-8">
                            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg bg-black">
                                <iframe
                                    src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`}
                                    title={attributes.caption || "YouTube video"}
                                    className="absolute inset-0 w-full h-full border-0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </div>
                            {attributes.caption && (
                                <figcaption
                                    className="wp-element-caption text-center text-sm text-gray-500 mt-2"
                                    dangerouslySetInnerHTML={{ __html: processHtmlContent(attributes.caption) }}
                                />
                            )}
                        </div>
                    );
                }
                if (url) {
                    return (
                        <div key={index} className="my-8 relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg bg-black">
                            <iframe
                                src={url}
                                title={attributes.caption || "Embed"}
                                className="absolute inset-0 w-full h-full border-0"
                                allowFullScreen
                            />
                        </div>
                    );
                }
                return null;
            }

            case 'core/video': {
                const src = attributes.src || '';
                const youtubeId = extractYouTubeId(src) || extractYouTubeId(block.saveContent || '');
                if (youtubeId) {
                    return (
                        <div key={index} className="my-8">
                            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg bg-black">
                                <iframe
                                    src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`}
                                    title={attributes.caption || "YouTube video"}
                                    className="absolute inset-0 w-full h-full border-0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </div>
                            {attributes.caption && (
                                <figcaption
                                    className="wp-element-caption text-center text-sm text-gray-500 mt-2"
                                    dangerouslySetInnerHTML={{ __html: processHtmlContent(attributes.caption) }}
                                />
                            )}
                        </div>
                    );
                }
                if (src) {
                    return (
                        <figure key={index} className="my-8">
                            <video
                                src={src}
                                poster={attributes.poster || ''}
                                controls={attributes.controls !== false}
                                autoPlay={Boolean(attributes.autoplay)}
                                loop={Boolean(attributes.loop)}
                                muted={Boolean(attributes.muted)}
                                playsInline={Boolean(attributes.playsInline)}
                                className="w-full rounded-2xl shadow-lg"
                            />
                            {attributes.caption && (
                                <figcaption
                                    className="wp-element-caption text-center text-sm text-gray-500 mt-2"
                                    dangerouslySetInnerHTML={{ __html: processHtmlContent(attributes.caption) }}
                                />
                            )}
                        </figure>
                    );
                }
                return null;
            }

            case 'core/audio': {
                const src = attributes.src || '';
                if (!src) return null;
                return (
                    <div key={index} className="my-8 p-6 bg-gradient-to-r from-[--lightgreen] to-white border border-[--green]/15 rounded-3xl shadow-sm">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-[--green] text-[--yellow] flex items-center justify-center flex-shrink-0 shadow-md">
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-3v8h3c1.66 0 3-1.34 3-3v-7c0-5.52-4.48-10-10-10z"/>
                                </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                                <span className="text-xs font-bold text-[--green] uppercase tracking-wider block">Podcast adás</span>
                                <p className="text-base font-semibold text-[--black] truncate">
                                    {attributes.caption || "Hanganyag meghallgatása"}
                                </p>
                            </div>
                        </div>
                        <audio
                            src={src}
                            controls
                            preload={attributes.preload || "metadata"}
                            loop={Boolean(attributes.loop)}
                            autoPlay={Boolean(attributes.autoplay)}
                            className="w-full"
                        />
                        {attributes.caption && (
                            <p className="text-xs text-gray-500 mt-2 text-center italic">{attributes.caption}</p>
                        )}
                    </div>
                );
            }

            case 'core/html':
                if (!attributes.content) return null;
                return (
                    <div
                        key={index}
                        className="my-6 [&_iframe]:w-full [&_iframe]:aspect-video [&_iframe]:rounded-2xl [&_iframe]:shadow-lg [&_audio]:w-full"
                        dangerouslySetInnerHTML={{ __html: processHtmlContent(attributes.content) }}
                    />
                );

            case 'core/separator':
                return <hr key={index} className="my-8 border-gray-200" />;

            // Group block - render inner blocks
            case 'core/group':
            case 'core/columns':
            case 'core/column':
                return (
                    <div key={index}>
                        {innerBlocks?.map((innerBlock, innerIndex) =>
                            renderBlock(innerBlock, `${index}-${innerIndex}`)
                        )}
                    </div>
                );

            default:
                // For unknown blocks, try to render innerBlocks if they exist
                if (innerBlocks && innerBlocks.length > 0) {
                    return (
                        <div key={index}>
                            {innerBlocks.map((innerBlock, innerIndex) =>
                                renderBlock(innerBlock, `${index}-${innerIndex}`)
                            )}
                        </div>
                    );
                }
                return null;
        }
    } catch (error) {
        console.error('Error rendering block:', name, error);
        return null;
    }
}

export default function BlogContent({ blocks, content }) {
    // If we have Gutenberg blocks, use them
    if (blocks && blocks.length > 0) {
        const rendered = blocks.map((block, index) => renderBlock(block, index)).filter(Boolean);
        if (rendered.length > 0) {
            return (
                <article className="prose prose-lg prose-h1:!text-3xl prose-h2:!text-2xl prose-h3:!text-xl prose-h4:!text-lg max-w-none [&_iframe]:w-full [&_iframe]:aspect-video [&_iframe]:rounded-2xl [&_iframe]:shadow-lg [&_audio]:w-full [&_audio]:my-4">
                    {rendered}
                </article>
            );
        }
    }

    // Fallback to HTML content
    return (
        <article
            className="prose prose-lg prose-h1:!text-3xl prose-h2:!text-2xl prose-h3:!text-xl prose-h4:!text-lg max-w-none [&_iframe]:w-full [&_iframe]:aspect-video [&_iframe]:rounded-2xl [&_iframe]:shadow-lg [&_audio]:w-full [&_audio]:my-4"
            dangerouslySetInnerHTML={{ __html: processHtmlContent(content) }}
        />
    );
}
