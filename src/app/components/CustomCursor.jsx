import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRingRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);

  useEffect(() => {
    // Check if device supports hover (not touch device)
    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.tagName === 'A' || 
                           target.tagName === 'BUTTON' || 
                           target.classList.contains('project-card') ||
                           target.classList.contains('skill-tag');
      
      if (isInteractive && cursorRingRef.current) {
        cursorRingRef.current.classList.add('hover');
      }
    };

    const handleMouseOut = (e) => {
      if (cursorRingRef.current) {
        cursorRingRef.current.classList.remove('hover');
      }
    };

    const lerp = (start, end, factor) => {
      return start + (end - start) * factor;
    };

    const animateCursor = () => {
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.15);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.15);

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate(calc(${ringPos.current.x}px - 50%), calc(${ringPos.current.y}px - 50%))`;
      }

      animationFrameId.current = requestAnimationFrame(animateCursor);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver, true);
    document.addEventListener('mouseout', handleMouseOut, true);
    animationFrameId.current = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver, true);
      document.removeEventListener('mouseout', handleMouseOut, true);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div className="custom-cursor">
      <div ref={cursorRingRef} className="cursor-ring"></div>
    </div>
  );
}
