import React, { useEffect, useRef } from "react";

export default function Map({ address = "F/505, Sec-9, New Vijay Nagar, Ghaziabad Near Chanakya Chowk Ram Lila Ground" }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!address || !mapRef.current) return;

    // Coordinates for Vijay Nagar, Ghaziabad
    const defaultLat = 28.6692;
    const defaultLon = 77.4538;
    const zoom = 15;

    const iframe = document.createElement("iframe");
    iframe.src = `https://www.openstreetmap.org/export/embed.html?` +
      `center=${defaultLat},${defaultLon}&zoom=${zoom}&marker=${defaultLat},${defaultLon}`;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.frameBorder = "0";
    iframe.style.border = "none";
    iframe.allowFullScreen = true;
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    iframe.title = `Map of ${address}`;

    mapRef.current.innerHTML = "";
    mapRef.current.appendChild(iframe);

    return () => {
      iframe.remove();
    };
  }, [address]);

  return (
    <div className="w-full h-[200px] rounded-lg overflow-hidden relative">
      <div ref={mapRef} className="w-full h-full"></div>
      <a 
        href={`https://www.openstreetmap.org/?mlat=28.6692&mlon=77.4538#map=15/28.6692/77.4538`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="absolute bottom-2 right-2 bg-white px-2 py-1 text-xs rounded shadow-sm hover:bg-gray-100"
      >
        View larger map
      </a>
      <div className="absolute top-2 left-2 bg-white px-2 py-1 text-xs rounded shadow-sm">
        {address}
      </div>
    </div>
  );
}