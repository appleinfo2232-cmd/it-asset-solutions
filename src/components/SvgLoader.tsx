import React from 'react';

interface SvgLoaderProps {
  className?: string;
}

const SvgLoader: React.FC<SvgLoaderProps> = ({ className = "w-36 h-36" }) => {
  return (
    <svg 
      width="145" 
      height="145" 
      viewBox="0 0 120 120" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="modernGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9"/>
          <stop offset="100%" stopColor="#22c55e"/>
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="rgba(0,0,0,0.25)" />
        </filter>
      </defs>

      <style>
        {`
          .ring-loader {
            stroke-dasharray: 250;
            stroke-dashoffset: 250;
            animation: draw 2.5s ease-in-out infinite;
          }
          .server-loader {
            opacity: 0;
            animation: fade 2.5s ease-in-out infinite;
          }
          @keyframes draw {
            0%, 100% { stroke-dashoffset: 250; }
            50% { stroke-dashoffset: 0; }
          }
          @keyframes fade {
            0%, 100% { opacity: 0; }
            25%, 75% { opacity: 1; }
          }
        `}
      </style>

      <path 
        className="ring-loader" 
        d="M60,10 A50,50 0 1,1 59.9,10 M60,10 L72,24 M60,10 L48,24" 
        filter="url(#shadow)" 
        fill="none" 
        stroke="url(#modernGradient)" 
        strokeWidth="10" 
        strokeLinecap="round" 
      />
      
      <g className="server-loader">
        <rect fill="#ffffff" stroke="url(#modernGradient)" strokeWidth="3" rx="5" x="38" y="33" width="44" height="18"/>
        <line stroke="url(#modernGradient)" strokeWidth="2.2" x1="38" y1="40" x2="82" y2="40"/>
        <rect fill="#ffffff" stroke="url(#modernGradient)" strokeWidth="3" rx="5" x="38" y="54" width="44" height="18"/>
        <line stroke="url(#modernGradient)" strokeWidth="2.2" x1="38" y1="61" x2="82" y2="61"/>
        <rect fill="#ffffff" stroke="url(#modernGradient)" strokeWidth="3" rx="5" x="38" y="75" width="44" height="18"/>
        <line stroke="url(#modernGradient)" strokeWidth="2.2" x1="38" y1="82" x2="82" y2="82"/>
        <circle cx="48" cy="42" r="2.6" fill="#0ea5e9" stroke="#e5e7eb" strokeWidth="1"/>
        <circle cx="72" cy="42" r="2.6" fill="#22c55e" stroke="#e5e7eb" strokeWidth="1"/>
        <circle cx="48" cy="63" r="2.6" fill="#22c55e" stroke="#e5e7eb" strokeWidth="1"/>
        <circle cx="72" cy="63" r="2.6" fill="#0ea5e9" stroke="#e5e7eb" strokeWidth="1"/>
        <circle cx="48" cy="84" r="2.6" fill="#0ea5e9" stroke="#e5e7eb" strokeWidth="1"/>
        <circle cx="72" cy="84" r="2.6" fill="#22c55e" stroke="#e5e7eb" strokeWidth="1"/>
      </g>
    </svg>
  );
};

export default SvgLoader;