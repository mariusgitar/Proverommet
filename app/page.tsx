'use client';

import { useMemo, useState } from 'react';

import { ProductCard } from '@/components/ProductCard';
import { productCategories, products, type ProductCategory } from '@/content/products';

type ProductFilter = 'alle' | ProductCategory;

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState<ProductFilter>('alle');

  const visibleProducts = useMemo(() => {
    if (activeFilter === 'alle') {
      return products;
    }

    return products.filter((product) => product.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-8 space-y-2">
        <p className="text-3xl font-black tracking-tight text-slate-900">Prøverommet</p>
        <p className="text-slate-600">Verktøy bygget for kommunal hverdag</p>
      </header>

      <section className="mb-6 flex flex-wrap gap-2" aria-label="Kategorifilter">
        <button
          type="button"
          onClick={() => setActiveFilter('alle')}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            activeFilter === 'alle' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Alle
        </button>
        {productCategories.map((category) => (
          <button
            key={category.value}
            type="button"
            onClick={() => setActiveFilter(category.value)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeFilter === category.value
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {category.label}
          </button>
        ))}
      </section>

      <section className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {visibleProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </section>
    </main>
  );
}
