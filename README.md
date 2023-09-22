# use-unmounted - react `useUnmounted` hook

do async operations in useEffect, and set state safety

## Usage

```jsx
import { useUnmounted } from '@-ft/use-unmounted';

function MyComponent() {
  const unmountedPersist = useUnmounted();
  const [state, setState] = useState("Loading...");
  useEffect(() => {
    (async () => {
      const result = await fetchSomething();
      if (unmountedPersist.current) {
        // if the component is unmounted, setState is not safe
        return;
      }
      setState(result);
    })();
  }, [unmountedPersist, setState]);
  return <div>{state}</div>;
}
```
