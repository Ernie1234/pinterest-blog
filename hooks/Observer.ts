import { useEffect, useRef, useState } from "react";

export function useObserver(initialValue: boolean) {
  const myRef = useRef<any | null>(null);
  const [inView, setInInview] = useState(false);
  console.log(inView);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setInInview(entry.isIntersecting);
    });
    if (myRef.current) observer.observe(myRef.current);
  }, []);
  return [myRef, inView, setInInview];
}
