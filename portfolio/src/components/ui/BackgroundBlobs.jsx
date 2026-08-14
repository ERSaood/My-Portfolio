/**
 * Reusable background decorative blobs component
 * Eliminates duplicated background blob definitions in every section
 * 
 * Props:
 *   blobs - Array of blob configurations
 * 
 * Example blob configuration:
 *   {
 *     position: "top-40 -right-40",    // Tailwind positioning classes
 *     size: "w-80 h-80",                // Tailwind size classes
 *     color: "bg-indigo-500/5 dark:bg-indigo-500/5"  // Tailwind color classes
 *   }
 */
export default function BackgroundBlobs({ blobs = [] }) {
  return (
    <div className="absolute inset-0 -z-10">
      {blobs.map((blob, index) => (
        <div
          key={index}
          className={`absolute ${blob.position} ${blob.size} ${blob.color} rounded-full blur-3xl`}
        />
      ))}
    </div>
  );
}
