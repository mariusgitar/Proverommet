import { notFound } from 'next/navigation';

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

  return <ProductPage product={product} />;
}
