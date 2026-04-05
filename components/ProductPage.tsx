'use client';

import type { ReactNode } from 'react';

import Link from 'next/link';

import type { Product } from '@/content/products';
import { productCategories } from '@/content/products';
import { useReaction } from '@/hooks/useReaction';

interface ProductPageProps {
  product: Product;
  demo?: ReactNode;
}

const statusStyles: Record<Product['status'], string> = {
  aktiv: 'bg-green-100 text-green-800',
  beta: 'bg-yellow-100 text-yellow-800',
  eksperiment: 'bg-slate-200 text-slate-700',
};

const statusLabel: Record<Product['status'], string> = {
  aktiv: 'Aktiv',
  beta: 'Beta',
  eksperiment: 'Eksperiment',
};

export function ProductPage({ product, demo }: ProductPageProps) {
  const { count, hasReacted, react } = useReaction(product.slug);
  const categoryLabel = productCategories.find((category) => category.value === product.category)?.label ?? product.category;

  return (
    <main className="min-h-screen bg-[#f7f5f0] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10">
        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="text-8xl leading-none sm:text-9xl" aria-hidden="true">
              {product.emoji}
            </span>
            <h1 className="font-serif text-5xl tracking-tight text-slate-900 sm:text-6xl">{product.name}</h1>
            <p className="max-w-xl text-lg text-slate-600">{product.tagline}</p>
            <span className={`rounded-full px-3 py-1 text-sm font-medium ${statusStyles[product.status]}`}>
              {statusLabel[product.status]}
            </span>

            {product.demoAvailable || product.productMapAvailable ? (
              <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
                {product.demoAvailable ? (
                  <a
                    href="#demo"
                    className="rounded-xl bg-[#2d5be3] px-4 py-2 text-sm font-medium text-white"
                  >
                    Prøv demo ↓
                  </a>
                ) : null}
                {product.productMapAvailable ? (
                  <Link
                    href={`/${product.slug}/produktkart`}
                    className="rounded-xl border border-[#ddd8cc] bg-transparent px-4 py-2 text-sm font-medium text-[#3a3a3a]"
                  >
                    Produktkart →
                  </Link>
                ) : null}
              </div>
            ) : null}

            <button
              type="button"
              onClick={react}
              disabled={hasReacted}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60"
              aria-label={`React to ${product.name}`}
            >
              <span aria-hidden="true">👍</span>
              <span>{hasReacted ? 'Takk for reaksjonen' : 'Gi en reaksjon'}</span>
              <span className="rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-slate-600">{count}</span>
            </button>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="space-y-4">
            <h2 className="font-serif text-3xl text-slate-900">Om produktet</h2>
            <p className="text-lg leading-relaxed text-slate-700">{product.description}</p>
            <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
              {categoryLabel}
            </span>
          </div>
        </section>

        <section id="demo" className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="mb-6 font-serif text-3xl text-slate-900">Demo</h2>
          {demo ?? (
            <div className="flex min-h-64 flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
              <span className="text-6xl" aria-hidden="true">
                {product.emoji}
              </span>
              <p className="text-lg font-medium text-slate-700">Demo kommer</p>
            </div>
          )}
        </section>

        <footer className="pb-4 text-center text-sm text-slate-600">
          <Link href="/" className="transition hover:text-slate-900">
            ← Tilbake til Prøverommet
          </Link>
        </footer>
      </div>
    </main>
  );
}
