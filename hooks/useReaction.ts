'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

interface ReactionResponse {
  slug: string;
  count: number;
}

export function useReaction(slug: string) {
  const [count, setCount] = useState(0);
  const [hasReacted, setHasReacted] = useState(false);

  const storageKey = useMemo(() => `reacted_${slug}`, [slug]);

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      const reacted = localStorage.getItem(storageKey) !== null;
      if (isMounted) {
        setHasReacted(reacted);
      }

      const response = await fetch(`/api/reactions?slug=${encodeURIComponent(slug)}`);
      if (!response.ok) {
        return;
      }

      const data: ReactionResponse = await response.json();
      if (isMounted) {
        setCount(data.count);
      }
    };

    load();

    return () => {
      isMounted = false;
    };
  }, [slug, storageKey]);

  const react = useCallback(async () => {
    if (hasReacted) {
      return;
    }

    const response = await fetch('/api/reactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug }),
    });

    if (!response.ok) {
      return;
    }

    const data: ReactionResponse = await response.json();
    localStorage.setItem(storageKey, '1');
    setCount(data.count);
    setHasReacted(true);
  }, [hasReacted, slug, storageKey]);

  return { count, hasReacted, react };
}
