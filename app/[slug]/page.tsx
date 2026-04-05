import { notFound } from 'next/navigation';

import { DailyBrianDemo } from '@/components/demos/DailyBrianDemo';
import { SammenDemo } from '@/components/demos/SammenDemo';
import { UkespeilDemo } from '@/components/demos/UkespeilDemo';
import { ProductPage } from '@/components/ProductPage';
import { LommeknivDemo } from '@/components/demos/LommeknivDemo';
import { products } from '@/content/products';

interface SlugPageProps {
  params: {
    slug: string;
  };
}

export default function SlugPage({ params }: SlugPageProps) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  const demo =
    product.slug === 'sammen'
      ? <SammenDemo />
      : product.slug === 'ukespeil'
        ? <UkespeilDemo />
        : product.slug === 'daily-brian'
          ? <DailyBrianDemo />
          : product.slug === 'byrakratens-lommekniv'
            ? <LommeknivDemo />
            : undefined;

  return <ProductPage product={product} demo={demo} />;
}
