import { useState, useEffect, useRef } from 'react';

const useIntersection = () => {
  const [isIntersection, setIsIntersection] = useState(false);

  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const targetImage = imageRef.current;

    const observer = new IntersectionObserver(
      ([image]) => {
        setIsIntersection(image.isIntersecting);
      },
      { threshold: 0 }
    );

    if (targetImage) {
      observer.observe(targetImage);
    }

    return () => {
      if (targetImage) {
        observer.unobserve(targetImage);
      }
    };
  }, []);

  return { imageRef, isIntersection };
};

export default useIntersection;
