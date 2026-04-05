import Link from 'next/link';
import { notFound } from 'next/navigation';

import { ProductRoadmap } from '@/components/ProductRoadmap';
import { products } from '@/content/products';
import type { Roadmap } from '@/content/roadmaps/types';
import { roadmap as sammenRoadmap } from '@/content/roadmaps/sammen';
import { roadmap as ukespeilRoadmap } from '@/content/roadmaps/ukespeil';
import { roadmap as strekiRoadmap } from '@/content/roadmaps/streki';
import { roadmap as dailyBrianRoadmap } from '@/content/roadmaps/daily-brian';
import { roadmap as temaiRoadmap } from '@/content/roadmaps/temai';
import { roadmap as byggesaksdashRoadmap } from '@/content/roadmaps/byggesaksdash';

const roadmaps: Record<string, Roadmap> = {
  sammen: sammenRoadmap,
  ukespeil: ukespeilRoadmap,
  streki: strekiRoadmap,
  'daily-brian': dailyBrianRoadmap,
  temai: temaiRoadmap,
  byggesaksdash: byggesaksdashRoadmap,
};

interface ProductRoadmapPageProps {
  params: {
    slug: string;
  };
}

export default function ProductRoadmapPage({ params }: ProductRoadmapPageProps) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  const roadmap = roadmaps[params.slug];

  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <div className="mx-auto w-full max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
        <Link href={`/${product.slug}`} className="text-sm font-medium text-[#2d5be3] hover:underline">
          ← Tilbake til {product.name}
        </Link>
      </div>

      {roadmap ? (
        <ProductRoadmap roadmap={roadmap} />
      ) : (
        <main className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-4xl rounded-2xl border border-[#ddd8cc] bg-white p-10 text-center">
            <h1 className="font-serif text-4xl text-slate-900">Produktkart kommer snart</h1>
          </div>
        </main>
      )}
    </div>
  );
}
