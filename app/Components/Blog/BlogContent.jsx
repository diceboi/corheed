import Image from "next/image";

// Helper to ensure external links open in a new tab
const processHtmlContent = (html) => {
    if (!html) return '';
    
    // Add target="_blank" to external links if not already present
    return html.replace(/<a([^>]+)>/g, (match, attrs) => {
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
        return (
            <article className="prose prose-lg prose-h1:!text-3xl prose-h2:!text-2xl prose-h3:!text-xl prose-h4:!text-lg max-w-none">
                {blocks.map((block, index) => renderBlock(block, index))}
            </article>
        );
    }

    // Fallback to HTML content
    return (
        <article
            className="prose prose-lg prose-h1:!text-3xl prose-h2:!text-2xl prose-h3:!text-xl prose-h4:!text-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: processHtmlContent(content) }}
        />
    );
}
