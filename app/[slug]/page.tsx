import { PageTitle } from '@/components/page-title';

interface SlugPageProps {
  params: {
    slug: string;
  };
}

export default function SlugPage({ params }: SlugPageProps) {
  return <PageTitle title={params.slug} />;
}
