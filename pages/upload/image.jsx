import { useState, useEffect } from 'react';
import { ref, uploadBytesResumable, getDownloadURL, listAll, deleteObject } from 'firebase/storage';
import { storage } from '../../firebase-config';

const GalleryPage = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    setSelectedImages([...selectedImages, ...files]);
  };

  const handleUploadImages = () => {
    selectedImages.forEach((image) => {
      const imageRef = ref(storage, `YOUR_DYNAMIC_FOLDER_NAME/${image.name}`);
      const uploadTask = uploadBytesResumable(imageRef, image);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress((prevProgress) => ({
            ...prevProgress,
            [image.name]: progress,
          }));
        },
        (error) => {
          console.error('Error uploading image:', error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setUploadedImages((prevImages) => [...prevImages, { name: image.name, url }]);
          });
        }
      );
    });
  };

  const handleDeleteImage = async (imageName) => {
    try {
      const imageRef = ref(storage, `YOUR_DYNAMIC_FOLDER_NAME/${imageName}`);
      await deleteObject(imageRef);
      setUploadedImages((prevImages) => prevImages.filter((image) => image.name !== imageName));
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  useEffect(() => {
    fetchUploadedImages();
  }, []);

  const fetchUploadedImages = async () => {
    try {
      const folderRef = ref(storage, 'YOUR_DYNAMIC_FOLDER_NAME');
      const files = await listAll(folderRef);

      const imagePromises = files.items.map(async (file) => {
        const url = await getDownloadURL(file);
        return { name: file.name, url };
      });

      const images = await Promise.all(imagePromises);
      setUploadedImages(images);
    } catch (error) {
      console.error('Error fetching uploaded images:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-end mb-4">
        <label htmlFor="fileInput" className="mr-2">
          Upload Images
        </label>
        <input
          type="file"
          id="fileInput"
          className="hidden"
          multiple
          onChange={handleFileInputChange}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleUploadImages}
        >
          Upload
        </button>
      </div>

      <div className="grid grid-cols-6 gap-4">
        {uploadedImages.map((image) => (
          <div key={image.name} className="p-2 border rounded">
            <img src={image.url} alt={image.name} className="w-full h-auto" />
            <div className="flex justify-between mt-2">
              <a href={image.url} download={image.name} className="text-blue-500 underline">
                Download
              </a>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => handleDeleteImage(image.name)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        {selectedImages.map((image) => (
          <div key={image.name} className="flex items-center">
            <span className="mr-2">{image.name}</span>
            {uploadProgress[image.name] !== undefined && (
              <progress value={uploadProgress[image.name]} max={100} className="w-64"></progress>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
