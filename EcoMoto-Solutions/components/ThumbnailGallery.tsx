'use client';

import { useState } from 'react';

interface ThumbnailGalleryProps {
  mainImage: string;
  thumbnails: string[];
  productName: string;
}

export default function ThumbnailGallery({ mainImage, thumbnails, productName }: ThumbnailGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(mainImage);
  
  const allImages = [mainImage, ...thumbnails];

  return (
    <>
      <div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden mb-4">
        <img src={selectedImage} alt={productName} className="w-full h-full object-cover" />
      </div>
      {thumbnails.length > 0 && (
        <div className="grid grid-cols-4 gap-2">
          {allImages.map((img: string, idx: number) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(img)}
              className={`aspect-square bg-slate-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity ${
                selectedImage === img ? 'ring-2 ring-teal-600' : ''
              }`}
            >
              <img 
                src={img} 
                alt={idx === 0 ? 'Main view' : `View ${idx}`} 
                className="w-full h-full object-cover" 
              />
            </button>
          ))}
        </div>
      )}
    </>
  );
}
