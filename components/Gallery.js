import { useEffect, useState } from 'react';
import { storage } from '../firebase-config';

const Gallery = ({ folderName }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch the list of files from Firebase Storage
    const fetchImages = async () => {
      const storageRef = storage.ref(folderName);
      const files = await storageRef.listAll();

      const urls = await Promise.all(
        files.items.map(async (fileRef) => {
          const url = await fileRef.getDownloadURL();
          return { name: fileRef.name, url };
        })
      );

      setImages(urls);
    };

    fetchImages();
  }, [folderName]);

  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image) => (
        <div key={image.name}>
          <img src={image.url} alt={image.name} className="max-w-full h-auto" />
          <a href={image.url} download>
            Download
          </a>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
