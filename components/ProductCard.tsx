'use client';

import type { Product } from '@/content/products';
import { useReaction } from '@/hooks/useReaction';

interface ProductCardProps {
  product: Product;
}

const statusStyles: Record<Product['status'], string> = {
  aktiv: 'bg-green-100 text-green-800',
  beta: 'bg-yellow-100 text-yellow-800',
  eksperiment: 'bg-slate-100 text-slate-700',
};

const statusLabel: Record<Product['status'], string> = {
  aktiv: 'Aktiv',
  beta: 'Beta',
  eksperiment: 'Eksperiment',
};

export function ProductCard({ product }: ProductCardProps) {
  const { count, hasReacted, react } = useReaction(product.slug);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <header className={`flex items-start justify-between px-4 py-3 ${product.color}`}>
        <span className="text-3xl leading-none" aria-hidden="true">
          {product.emoji}
        </span>
        <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[product.status]}`}>
          {statusLabel[product.status]}
        </span>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-slate-900">{product.name}</h2>
          <p className="text-sm text-slate-500">{product.tagline}</p>
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {product.demoAvailable ? (
            <button type="button" className={`rounded-md px-3 py-2 text-sm font-medium ${product.color} ${product.accent}`}>
              Utforsk demo
            </button>
          ) : null}
          {product.productMapAvailable ? (
            <button
              type="button"
              className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Produktkart
            </button>
          ) : null}
        </div>

        <div className="flex items-center gap-2 border-t border-slate-100 pt-3 text-sm text-slate-600">
          <button
            type="button"
            onClick={react}
            disabled={hasReacted}
            className="rounded px-2 py-1 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label={`React to ${product.name}`}
          >
            👍
          </button>
          <span>{count}</span>
        </div>
      </div>
    </article>
  );
}
