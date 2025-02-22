import { useState, useEffect } from 'react';

const useMouseDirection = () => {
  const [dir, setDir] = useState(null)

  useEffect(() => {
    let lastPos = {y: null, x: null}
    const handleMouseMove = (event) => {
      if (lastPos.y !== null) {
        const deltaY = event.clientY - lastPos.y;
        setDir(deltaY > 0 ? 'down' : 'up')
      }
      lastPos.x = event.clientX
      lastPos.y = event.clientY
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, []);

  return { dir };
};

export default useMouseDirection;
