

export const WaveBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <svg
      className="absolute w-full h-full"
      preserveAspectRatio="none"
      viewBox="0 0 1440 560"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="animate-wave-slow"
        fill="rgba(59, 130, 246, 0.1)"
        d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,186.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
      <path
        className="animate-wave-fast"
        fill="rgba(59, 130, 246, 0.05)"
        d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,197.3C672,171,768,149,864,160C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>
);

export const CirclePattern = () => (
  <div className="absolute inset-0 overflow-hidden opacity-10">
    <svg className="absolute animate-spin-slow" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5"/>
      <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5"/>
      <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5"/>
    </svg>
  </div>
);

export const GridPattern = () => (
  <div className="absolute inset-0 overflow-hidden opacity-5">
    <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
);

export const FloatingShapes = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        className={`absolute animate-float-${i + 1} opacity-20`}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
      >
        <svg className="w-8 h-8" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          {i % 3 === 0 ? (
            <circle cx="20" cy="20" r="15" fill="currentColor"/>
          ) : i % 3 === 1 ? (
            <rect x="5" y="5" width="30" height="30" fill="currentColor"/>
          ) : (
            <polygon points="20,5 35,35 5,35" fill="currentColor"/>
          )}
        </svg>
      </div>
    ))}
  </div>
);