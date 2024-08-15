import React, { useState } from 'react';


const GalleryRender = ({ media }) => {
  const [selectedMedia, setSelectedMedia] = useState(null);


  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
      {media.map((item, index) => (
        <div key={index} className="cursor-pointer" onClick={() => setSelectedMedia(item)}>
          {item.type === 'image' ? (
            <img src={item.src} alt={`Gallery Image ${index + 1}`} className="object-cover " />
          ) : (
            <video className="object-cover" controls>
              <source src={item.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      ))}


      {selectedMedia && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
          onClick={() => setSelectedMedia(null)}
        >
          {selectedMedia.type === 'image' ? (
            <img
              src={selectedMedia.src}
              alt="Selected Media"
              className="max-w-[70%] max-h-[70%] object-cover z-60 rounded shadow-lg"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <video
              className="max-w-[85%] max-h-[85%] z-60 rounded shadow-lg"
              controls
              onClick={(e) => e.stopPropagation()}
            >
              <source src={selectedMedia.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      )}
    </div>
  );
};


export default GalleryRender;