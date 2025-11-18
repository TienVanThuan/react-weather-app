export const WindyStrong = ({ width, height, color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32">
    <path
      fill={color}
      d="M13 30a5.006 5.006 0 0 1-5-5h2a3 3 0 1 0 3-3H4v-2h9a5 5 0 0 1 0 10Z"
    ></path>
    <path
      fill={color}
      d="M25 25a5.006 5.006 0 0 1-5-5h2a3 3 0 1 0 3-3H2v-2h23a5 5 0 0 1 0 10zm-4-13H6v-2h15a3 3 0 1 0-3-3h-2a5 5 0 1 1 5 5z"
    ></path>
  </svg>
);

export const Humidity = ({ width, height, color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
    <g fill="none" stroke={color} strokeWidth="2">
      <path d="M20 14.571C20 18.753 16.336 22 12 22s-8-3.247-8-7.429C4 12 5.305 9.452 6.716 7.423c1.43-2.055 3.076-3.726 3.962-4.568M20 14.571L10.678 2.855M20 14.571c0-2.571-1.305-5.119-2.716-7.148c-1.43-2.055-3.076-3.726-3.962-4.568a1.913 1.913 0 0 0-2.644 0M20 14.571L10.678 2.855"></path>
      <path strokeLinecap="round" d="M12 18a4 4 0 0 1-4-4"></path>
    </g>
  </svg>
);

export const Location = ({ width, height, color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
    <g fill="none" stroke={color} strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5">
      <path d="M21.5 12h-2.111M12 2.5v2.111M2.5 12h2.111M12 21.5v-2.111m0 0A7.389 7.389 0 1 0 12 4.61a7.389 7.389 0 0 0 0 14.778Z"></path>
      <path d="M12 16.222a4.222 4.222 0 1 0 0-8.444a4.222 4.222 0 0 0 0 8.444Z"></path>
    </g>
  </svg>
);
