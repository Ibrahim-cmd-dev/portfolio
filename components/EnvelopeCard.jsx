// New Envelope Card Component (adapted from Uiverse by SmookyDev)

import React, { useState } from 'react';

const EnvelopeCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Outer container: Set max width, aspect ratio, and group for hover effects
    // Add group class here for hover effects on desktop
    <div
      className="w-full max-w-[300px] sm:max-w-[350px] mx-auto group"
      onClick={toggleOpen} // Click for mobile/tablet
    >
      {/* Card structure */}
      <div
        className="relative bg-zinc-900 transition-all duration-700 aspect-video flex items-center justify-center"
      >
        {/* Inner content card: Slides up on hover/click */}
        <div
          className={`transition-all flex flex-col items-center py-5 justify-start duration-300 bg-zinc-100 w-full h-full absolute ${isOpen ? '-translate-y-20 duration-1000' : 'md:group-hover:-translate-y-20 md:group-hover:duration-1000'}`}
        >
          {/* --- Updated Content inside the card --- */}
          <p className="text-xl sm:text-2xl font-semibold text-zinc-700 font-serif">
            Thank You 
          </p>
          <p className="px-10 text-[10px] sm:text-[12px] text-zinc-600 mt-1 text-center">
             
            It's so nice that you had the time to view My Portfolio
          </p>
           <p className="px-10 text-[10px] sm:text-[12px] text-zinc-600 text-center">
            
            Wishing you a fantastic day ahead!
          </p>
          <p className="font-sans text-[10px] text-zinc-500 pt-5">
            Ibrahim 
          </p>
        </div>

        {/* Seal button: Disappears on hover/click */}
        <button
          aria-label="Initials Seal" // Added aria-label for accessibility
          className={`seal bg-amber-400 text-amber-900 w-10 aspect-square rounded-full z-40 text-[10px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] transition-all border-4 border-amber-600 ${isOpen ? 'opacity-0 scale-0 rotate-180 duration-1000' : 'md:group-hover:opacity-0 md:group-hover:scale-0 md:group-hover:rotate-180 md:group-hover:duration-1000'}`}
        >
          IM {/* Seal initials kept as IM, can be changed if needed */}
        </button>

        {/* Envelope flaps: Animate using clip-path on hover/click */}
        {/* Top flap */}
        <div
          aria-hidden="true"
          className={`tp transition-all bg-zinc-700 absolute w-full h-full ${isOpen ? 'duration-500 [clip-path:polygon(50%_-20%,_100%_0,_0_0)]' : 'md:group-hover:duration-500 md:group-hover:[clip-path:polygon(50%_-20%,_100%_0,_0_0)] [clip-path:polygon(50%_50%,_100%_0,_0_0)]'}`}
        ></div>
        {/* Left flap */}
        <div
          aria-hidden="true"
          className={`lft transition-all bg-zinc-800 absolute w-full h-full ${isOpen ? 'duration-700 [clip-path:polygon(-20%_50%,_0_0,_0_100%)]' : 'md:group-hover:duration-700 md:group-hover:[clip-path:polygon(-20%_50%,_0_0,_0_100%)] [clip-path:polygon(50%_50%,_0_0,_0_100%)]'}`}
        ></div>
        {/* Right flap */}
        <div
          aria-hidden="true"
          className={`rgt transition-all bg-zinc-700 absolute w-full h-full ${isOpen ? 'duration-700 [clip-path:polygon(120%_50%,_100%_0,_100%_100%)]' : 'md:group-hover:duration-700 md:group-hover:[clip-path:polygon(120%_50%,_100%_0,_100%_100%)] [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]'}`}
        ></div>
        {/* Bottom flap */}
        <div
          aria-hidden="true"
          className={`btm transition-all bg-zinc-800 absolute w-full h-full ${isOpen ? 'duration-700 [clip-path:polygon(50%_120%,_100%_100%,_0_100%)]' : 'md:group-hover:duration-700 md:group-hover:[clip-path:polygon(50%_120%,_100%_100%,_0_100%)] [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]'}`}
        ></div>
      </div>
    </div>
  );
};
 export default EnvelopeCard;