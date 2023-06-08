import { useState, useEffect } from 'react';
import { ref, uploadBytesResumable, getDownloadURL, listAll } from 'firebase/storage';
import { storage } from '../../firebase-config';

const VideoGalleryPage = () => {
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [uploadedVideos, setUploadedVideos] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    setSelectedVideos([...selectedVideos, ...files]);
  };

  const handleUploadVideos = () => {
    selectedVideos.forEach((video) => {
      const videoRef = ref(storage, `YOUR_DYNAMIC_FOLDER_NAME/${video.name}`);
      const uploadTask = uploadBytesResumable(videoRef, video);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress((prevProgress) => ({
            ...prevProgress,
            [video.name]: progress,
          }));
        },
        (error) => {
          console.error('Error uploading video:', error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setUploadedVideos((prevVideos) => [...prevVideos, { name: video.name, url }]);
          });
        }
      );
    });
  };

  useEffect(() => {
    fetchUploadedVideos();
  }, []);

  const fetchUploadedVideos = async () => {
    try {
      const folderRef = ref(storage, 'YOUR_DYNAMIC_FOLDER_NAME');
      const files = await listAll(folderRef);

      const videoPromises = files.items.map(async (file) => {
        const url = await getDownloadURL(file);
        return { name: file.name, url };
      });

      const videos = await Promise.all(videoPromises);
      setUploadedVideos(videos);
    } catch (error) {
      console.error('Error fetching uploaded videos:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-end mb-4">
        <label htmlFor="videoInput" className="mr-2">
          Upload Videos
        </label>
        <input
          type="file"
          id="videoInput"
          className="hidden"
          multiple
          accept="video/*"
          onChange={handleFileInputChange}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleUploadVideos}
        >
          Upload
        </button>
      </div>

      <div className="grid grid-cols-6 gap-4">
        {uploadedVideos.map((video) => (
          <div key={video.name} className="p-2 border rounded">
            <video src={video.url} title={video.name} className="w-full h-auto" controls></video>
            <div className="flex justify-center mt-2">
              <a href={video.url} download={video.name} className="text-blue-500 underline">
                Download
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        {selectedVideos.map((video) => (
          <div key={video.name} className="flex items-center">
            <span className="mr-2">{video.name}</span>
            {uploadProgress[video.name] !== undefined && (
              <progress value={uploadProgress[video.name]} max={100} className="w-64"></progress>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGalleryPage;
