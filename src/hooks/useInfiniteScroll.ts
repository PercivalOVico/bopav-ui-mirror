import { useEffect } from 'react';

interface UseInfiniteScrollProps {
  loadMore: () => void;
  containerId: string;
}

export const useInfiniteScroll = ({ loadMore, containerId }: UseInfiniteScrollProps) => {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      const element = e.target as HTMLElement;
      if (element.scrollHeight - element.scrollTop === element.clientHeight) {
        loadMore();
      }
    };

    const container = document.getElementById(containerId);
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [loadMore, containerId]);
};