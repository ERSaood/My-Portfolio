/**
 * Custom hook for smooth scrolling to sections
 * Eliminates scroll-to-section logic duplication across components
 * 
 * Usage:
 *   const handleScroll = useScrollTo("sectionId", 80);
 *   <button onClick={(e) => handleScroll(e)}>Scroll</button>
 * 
 * @param {string} elementId - The ID of the element to scroll to
 * @param {number} offset - Optional vertical offset in pixels (default: 80px for navbar)
 * @returns {function} Event handler for scroll action
 */
export function useScrollTo(elementId, offset = 80) {
  return (e) => {
    if (e) {
      e.preventDefault();
    }
    const element = document.getElementById(elementId);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };
}
