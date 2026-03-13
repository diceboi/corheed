import Link from "next/link";

export default function CategoryTiles({ categories, currentCategorySlug, title }) {
    if (!categories || categories.length === 0) return null;

    return (
        <div className="w-full scroll-mt-24" id="kategoriak">
            {title && (
                <h3 className="text-2xl font-bold text-[--green] text-center mb-6">
                    {title}
                </h3>
            )}
            <div className="flex flex-wrap gap-3 justify-center">
                <Link
                    href="/blog#kategoriak"
                    className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-colors border ${
                        !currentCategorySlug
                            ? 'bg-[--yellow] text-[--green] border-[--yellow]'
                            : 'bg-transparent text-[--green] hover:bg-[--yellow] border-[--green] hover:border-[--yellow]'
                    }`}
                >
                    Összes
                </Link>
                {categories.map((category) => (
                    <Link
                        key={category.id}
                        href={`/blog/kategoria/${category.slug}#kategoriak`}
                        className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-colors border ${
                            currentCategorySlug === category.slug
                                ? 'bg-[--yellow] text-[--green] border-[--yellow]'
                                : 'bg-transparent text-[--green] hover:bg-[--yellow] border-[--green] hover:border-[--yellow]'
                        }`}
                    >
                        {category.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}
