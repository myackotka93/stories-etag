import { values } from 'lodash';
import { useEffect, useState } from 'react';

function useWindowHeight() {
  const [windowHeight, setWindowHeight] = useState<string>('');

  useEffect(() => {
    const updateWindowHeight = () => {
      const valueHeight = window.innerHeight;
      setWindowHeight( `${valueHeight}px`);
    };

    window.addEventListener('load', updateWindowHeight);
    window.addEventListener('resize', updateWindowHeight);

    return () => {
      window.removeEventListener('load', updateWindowHeight);
      window.removeEventListener('resize', updateWindowHeight);
    };
  }, []);

  return windowHeight;
}

export default useWindowHeight;