'use client';

import { useEffect, useMemo, useState } from 'react';

import { useRouter } from 'next/navigation';

import { ProductCard } from '@/components/ProductCard';
import { productCategories, type ProductCategory, products } from '@/content/products';

export type ProductFilter = 'alle' | ProductCategory;

interface ProductOverviewProps {
  initialFilter?: ProductFilter;
}

function getFilterPath(filter: ProductFilter) {
  return filter === 'alle' ? '/' : `/${filter}`;
}

export function ProductOverview({ initialFilter = 'alle' }: ProductOverviewProps) {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<ProductFilter>(initialFilter);

  useEffect(() => {
    setActiveFilter(initialFilter);
  }, [initialFilter]);

  const visibleProducts = useMemo(() => {
    if (activeFilter === 'alle') {
      return products;
    }

    return products.filter((product) => product.category === activeFilter);
  }, [activeFilter]);

  function selectFilter(filter: ProductFilter) {
    setActiveFilter(filter);
    router.push(getFilterPath(filter));
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-8 space-y-2">
        <p className="text-3xl font-black tracking-tight text-slate-900">Prøverommet</p>
        <p className="text-slate-600">"Dette er verkstedet mitt. Verktøy bygget i Tønsberg kommune for å gjøre hverdagen litt enklere, møtene litt bedre og dataene litt mer forståelige. Alt er vibekoda — raskt, pragmatisk og alltid i beta. Hilsen Marius". </p>
      </header>

      <section className="mb-6 flex flex-wrap gap-2" aria-label="Kategorifilter">
        <button
          type="button"
          onClick={() => selectFilter('alle')}
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
            onClick={() => selectFilter(category.value)}
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
