const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 z-0 bg-slate-950 pointer-events-none select-none overflow-hidden">
      
      {/* 1. Static Ambient Corner Glows (Rendered once by GPU, zero lag) */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px]" />

      {/* 2. Ultra-lightweight CSS Dot Grid */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, rgba(255, 255, 255, 0.07) 1.5px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* 3. Vignette / Fade Mask (Makes the grid fade out smoothly into the dark background) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#020617_80%)]" />
      
    </div>
  );
};

export default ParticleBackground;