import { useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';

export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  }, [title]);
}
