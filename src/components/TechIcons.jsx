import React from 'react';

/**
 * Authentic, official SVG icons for HTML5, CSS3, JavaScript, and React.
 * Pixel-perfect vectors ensuring crisp rendering at any resolution.
 */

export function Html5Icon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="HTML5 Icon">
      <path d="M71 460L32 0h448l-39 460-185 52-185-52z" fill="#E34F26" />
      <path d="M256 472l149-41 33-391H256v432z" fill="#EF652A" />
      <path d="M256 208h-68l-5-53h73V99H118l14 162h124v-53zm0 148l-63-17-4-45h-55l8 97 114 31v-66z" fill="#EBEBEB" />
      <path d="M256 208v-53h68l6-66h-74V99h137l-14 162H256zm0 148v66l114-31 16-177H256v53h67l-6 68-61 21z" fill="#FFFFFF" />
    </svg>
  );
}

export function Css3Icon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="CSS3 Icon">
      <path d="M71 460L32 0h448l-39 460-185 52-185-52z" fill="#1572B6" />
      <path d="M256 472l149-41 33-391H256v432z" fill="#33A9DC" />
      <path d="M256 208h-68l-5-53h73V99H118l14 162h124v-53zm0 148l-63-17-4-45h-55l8 97 114 31v-66z" fill="#EBEBEB" />
      <path d="M374 99H256v56h63l-6 66H256v53h67l-6 68-61 21v66l114-31 16-177 4-45 4-49z" fill="#FFFFFF" />
    </svg>
  );
}

export function JavascriptIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-label="JavaScript Icon">
      <rect width="512" height="512" rx="64" fill="#F7DF1E" />
      <path d="M280.9 397.6c10.7 17.5 28.5 28.4 52.4 28.4 22.8 0 37.1-11.4 37.1-27.1 0-18.8-15-25.7-40.2-36.6l-13.8-5.9c-39.6-16.9-66-38.3-66-83 0-41.2 31.4-72.5 80.3-72.5 35 0 60.1 12.3 77.8 43.5l-33.8 21.7c-9.2-16.4-21.4-22.9-44-22.9-19.3 0-32.3 11-32.3 25.3 0 17.5 12.8 24.3 36.4 34.5l13.8 5.9c47.2 20.3 70.8 41.5 70.8 85.9 0 49-38.6 75.3-90.8 75.3-49.8 0-82.3-24.3-97.7-54.6l30-17.6zM151.7 419.6c-13.2-5.7-23.7-15.6-30.8-28.5l33.8-20.7c5.4 9.2 11.5 15.6 22.9 19.9 15.3 5.7 34.5 1.5 34.5-28.4V224h42.5v167.3c0 47.9-28.4 72.8-70.8 72.8-10.4 0-21.7-1.5-32.1-4.5z" fill="#000000" />
    </svg>
  );
}

export function ReactIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="React Icon">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

