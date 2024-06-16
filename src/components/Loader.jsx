/**
 * Loader Component - Displays a loading animation.
 */
import "../index.css";

export default function Loader() {
  return (
    <div className="w-40">
      <div className="h-1 w-full bg-[#84869e] overflow-hidden">
        <div className="animate-progress w-full h-full bg-[#191b3a] origin-left-right"></div>
      </div>
    </div>
  );
}
