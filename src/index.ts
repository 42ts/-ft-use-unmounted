import { usePersist, UsePersist } from '@-ft/use-persist';
import { useEffect } from 'react';

export function useUnmounted(): UsePersist<boolean> {
  const result = usePersist(false);
  useEffect(() => {
    result.current = false;
    return () => {
      result.current = true;
    };
  }, [result]);
  return result;
}
