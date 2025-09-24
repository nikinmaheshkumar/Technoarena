import React from 'react';

const Sparkline = ({ data, width = 80, height = 30, color = "#ef4444" }) => {
  if (!data || data.length < 2) {
    return <div style={{ width, height }} />;
  }

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min;
  
  // Handle case where all values are the same
  if (range === 0) {
    return (
      <svg width={width} height={height}>
        <line 
          x1={0} 
          y1={height / 2} 
          x2={width} 
          y2={height / 2} 
          stroke={color} 
          strokeWidth="2"
        />
      </svg>
    );
  }

  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * width;
    const y = height - ((value - min) / range) * height;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg width={width} height={height} className="sparkline">
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />
      {/* Add glow effect for better visibility */}
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.3"
        filter="blur(1px)"
      />
    </svg>
  );
};

export default Sparkline;