// Return a single uniform color matching Tailwind `primary` for all tool badges
const UNIFORM_COLOR = '#AD00FF'; // matches tailwind.config.js primary

export function getToolColor() {
  return UNIFORM_COLOR;
}

export function getTextColorClass() {
  // primary is dark/bright — white text works well
  return 'text-white';
}

export default getToolColor;
