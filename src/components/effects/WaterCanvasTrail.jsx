import React, { useEffect, useRef } from 'react';

/**
 * WaterCanvasTrail
 * Creates a fluid "painting on calm water" interactive cursor effect.
 * Emits translucent watercolor ripples, fluid pigment bleeds, and gentle water rings.
 */
export default function WaterCanvasTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Warm & Serene Lagoon Palette
    const palette = [
      { r: 211, g: 146, b: 78 },  // Sunlit Honey
      { r: 196, g: 109, b: 74 },  // Terracotta Clay
      { r: 56, g: 128, b: 135 },  // Turquoise Lagoon
      { r: 91, g: 127, b: 115 },  // Sea Sage
      { r: 230, g: 184, b: 125 }  // Warm Sand Gold
    ];

    let droplets = [];
    let ripples = [];
    let lastMousePos = { x: null, y: null };
    let colorIndex = 0;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const addWaterPaint = (x, y) => {
      // Calculate cursor velocity
      let speed = 1;
      if (lastMousePos.x !== null) {
        const dx = x - lastMousePos.x;
        const dy = y - lastMousePos.y;
        speed = Math.min(Math.sqrt(dx * dx + dy * dy), 25);
      }
      lastMousePos = { x, y };

      // Cycle through natural watercolor pigments
      const color = palette[colorIndex % palette.length];
      colorIndex++;

      // 1. Fluid Watercolor Bleed Droplet
      droplets.push({
        x: x + (Math.random() - 0.5) * 8,
        y: y + (Math.random() - 0.5) * 8,
        radius: 12 + speed * 1.2 + Math.random() * 8,
        maxRadius: 38 + speed * 2 + Math.random() * 16,
        growthRate: 0.8 + Math.random() * 0.9,
        color,
        alpha: 0.38,
        decay: 0.007 + Math.random() * 0.005,
        wobbleSpeed: 0.04 + Math.random() * 0.03,
        wobbleAmp: 3 + Math.random() * 4,
        angle: Math.random() * Math.PI * 2
      });

      // 2. Delicate Concentric Water Wave Ring
      if (Math.random() > 0.45) {
        ripples.push({
          x,
          y,
          radius: 6,
          maxRadius: 65 + speed * 2.5,
          growthRate: 1.4 + Math.random() * 1.2,
          alpha: 0.32,
          decay: 0.009,
          color
        });
      }

      // Limit particle count for high performance
      if (droplets.length > 55) droplets.shift();
      if (ripples.length > 35) ripples.shift();
    };

    const handleMouseMove = (e) => {
      addWaterPaint(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        addWaterPaint(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Animation Render Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render Expanding Water Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rip = ripples[i];
        rip.radius += rip.growthRate;
        rip.alpha -= rip.decay;

        if (rip.alpha <= 0 || rip.radius >= rip.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${rip.color.r}, ${rip.color.g}, ${rip.color.b}, ${rip.alpha * 0.6})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.restore();
      }

      // Render Soft Watercolor Bleed Clouds
      ctx.save();
      ctx.globalCompositeOperation = 'source-over';

      for (let i = droplets.length - 1; i >= 0; i--) {
        const drop = droplets[i];
        if (drop.radius < drop.maxRadius) {
          drop.radius += drop.growthRate;
        }
        drop.alpha -= drop.decay;
        drop.angle += drop.wobbleSpeed;

        if (drop.alpha <= 0) {
          droplets.splice(i, 1);
          continue;
        }

        // Create soft radial watercolor gradient
        const grad = ctx.createRadialGradient(
          drop.x,
          drop.y,
          0,
          drop.x,
          drop.y,
          drop.radius
        );

        grad.addColorStop(0, `rgba(${drop.color.r}, ${drop.color.g}, ${drop.color.b}, ${drop.alpha * 0.7})`);
        grad.addColorStop(0.5, `rgba(${drop.color.r}, ${drop.color.g}, ${drop.color.b}, ${drop.alpha * 0.35})`);
        grad.addColorStop(1, `rgba(${drop.color.r}, ${drop.color.g}, ${drop.color.b}, 0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();

        // Organic watercolor droplet shape with subtle fluid wobble
        const wobble = Math.sin(drop.angle) * drop.wobbleAmp;
        ctx.arc(drop.x + wobble * 0.3, drop.y + wobble * 0.3, drop.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9990
      }}
    />
  );
}
