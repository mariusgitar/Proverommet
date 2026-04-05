import { notFound } from 'next/navigation';

import { SammenDemo } from '@/components/demos/SammenDemo';
import { UkespeilDemo } from '@/components/demos/UkespeilDemo';
import { ProductPage } from '@/components/ProductPage';
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
    product.slug === 'sammen' ? <SammenDemo /> : product.slug === 'ukespeil' ? <UkespeilDemo /> : undefined;

  return <ProductPage product={product} demo={demo} />;
}
