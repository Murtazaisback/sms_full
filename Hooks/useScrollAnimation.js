import { useState, useEffect, useRef } from 'react';

function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasTriggered && ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        // Trigger the animation if the element is in the viewport
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          setIsVisible(true);
          setHasTriggered(true); // Set the flag to true to avoid further triggers
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasTriggered, ref]); // Add ref as a dependency to the useEffect hook

  return { ref, isVisible };
}

export default useScrollAnimation;