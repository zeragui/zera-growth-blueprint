const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-hero-glow" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Large floating orbs */}
      <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px] animate-float-slow" />
      <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-accent/15 rounded-full blur-[180px] animate-float-slow" style={{ animationDelay: '-5s' }} />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px] animate-pulse-slow" />
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/60 rounded-full animate-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${15 + Math.random() * 20}s`,
          }}
        />
      ))}
      
      {/* Geometric shapes */}
      <div className="absolute top-[20%] right-[15%] w-20 h-20 border border-primary/20 rotate-45 animate-spin-slow" />
      <div className="absolute bottom-[30%] left-[10%] w-32 h-32 border border-accent/15 rounded-full animate-pulse-ring" />
      <div className="absolute top-[60%] right-[25%] w-16 h-16 border-2 border-primary/10 animate-float-reverse" />
      
      {/* Glowing lines */}
      <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-line-flow" />
      <div className="absolute top-0 left-[80%] w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent animate-line-flow" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-0 left-[50%] w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent animate-line-flow" style={{ animationDelay: '-7s' }} />
      
      {/* Horizontal glowing lines */}
      <div className="absolute top-[30%] left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent animate-line-flow-horizontal" />
      <div className="absolute top-[70%] left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent animate-line-flow-horizontal" style={{ animationDelay: '-5s' }} />
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-accent/10 to-transparent" />
      
      {/* Animated rings */}
      <div className="absolute top-[15%] left-[30%] w-40 h-40 rounded-full border border-primary/10 animate-ring-expand" />
      <div className="absolute bottom-[25%] right-[20%] w-60 h-60 rounded-full border border-accent/10 animate-ring-expand" style={{ animationDelay: '-4s' }} />
      
      {/* Noise overlay for texture */}
      <div className="absolute inset-0 opacity-[0.015] bg-noise" />
    </div>
  );
};

export default AnimatedBackground;
