import { Truck, X } from 'lucide-react';
import { useState } from 'react';

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-[#4a6741] via-[#5a7851] to-[#4a6741] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-gradient-radial from-white/15 to-transparent" />
      <div className="container mx-auto px-4 py-2.5 flex items-center justify-center gap-2 relative">
        <Truck className="w-4 h-4" />
        <p className="text-sm font-medium">Free Delivery on Orders Above ₹999</p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/10 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
