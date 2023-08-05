interface CrossIconProps {
  width?: string;
  height?: string;
  color?: string;
}

const CrossIcon = ({ color, width, height }: CrossIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 20}
      height={height || 20}
      viewBox="0 -256 1792 1792"
    >
      <g transform="matrix(1,0,0,-1,205.01695,1262.6441)">
        <path
          d="m 1298,214 q 0,-40 -28,-68 L 1134,10 q -28,-28 -68,-28 -40,0 -68,28 L 704,304 410,10 q -28,-28 -68,-28 -40,0 -68,28 L 138,146 q -28,28 -28,68 0,40 28,68 L 432,576 138,870 q -28,28 -28,68 0,40 28,68 l 136,136 q 28,28 68,28 40,0 68,-28 l 294,-294 294,294 q 28,28 68,28 40,0 68,-28 l 136,-136 q 28,-28 28,-68 0,-40 -28,-68 L 976,576 1270,282 q 28,-28 28,-68 z"
          style={{
            fill: color || "currentColor",
          }}
        />
      </g>
    </svg>
  );
};

export default CrossIcon;
