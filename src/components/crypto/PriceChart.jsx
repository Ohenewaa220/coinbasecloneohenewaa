function PriceChart({ trend }) {
  const isPositive = trend >= 0;
  const strokeColor = isPositive ? "#16a34a" : "#ef4444"; // green-600 or red-500
  
  // Generating a randomized SVG path for the simple chart
  // This simulates a price chart line
  const generatePath = () => {
    let path = "M 0 20";
    let currentY = 20;
    const segments = 10;
    const stepX = 100 / segments;
    
    for (let i = 1; i <= segments; i++) {
        // Randomly go up or down, but heavily biased by the trend
        const randomModifier = (Math.random() - 0.5) * 15;
        const trendModifier = isPositive ? -2 : 2; // SVG y goes down
        currentY = Math.max(2, Math.min(38, currentY + randomModifier + trendModifier));
        path += ` L ${i * stepX} ${currentY}`;
    }
    return path;
  };

  return (
    <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible" preserveAspectRatio="none">
      <path
        d={generatePath()}
        fill="none"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default PriceChart;
