import { notFound } from 'next/navigation';

import { DailyBrianDemo } from '@/components/demos/DailyBrianDemo';
import { SammenDemo } from '@/components/demos/SammenDemo';
import { UkespeilDemo } from '@/components/demos/UkespeilDemo';
import { BotfabrikkDemo } from '@/components/demos/BotfabrikkDemo';
import { TemAiDemo } from '@/components/demos/TemAiDemo';
import { ProductPage } from '@/components/ProductPage';
import { LommeknivDemo } from '@/components/demos/LommeknivDemo';
import { ByggesaksdashDemo } from '@/components/demos/ByggesaksdashDemo';
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
            : product.slug === 'botfabrikk'
              ? <BotfabrikkDemo />
              : product.slug === 'temai'
                ? <TemAiDemo />
                : product.slug === 'byggesaksdash'
                  ? <ByggesaksdashDemo />
                  : undefined;

  return <ProductPage product={product} demo={demo} />;
}
