import {
  useCallback,
} from 'react';

const useCommonFunctions = () => {
  // Function to smoothly scroll to a section
  const scrollToTop = useCallback((elementRef) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, []);

  return { scrollToTop };
};

export default useCommonFunctions;