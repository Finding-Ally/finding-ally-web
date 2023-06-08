import { useState, useEffect } from 'react';
import { ref, uploadBytesResumable, getDownloadURL, listAll } from 'firebase/storage';
import { storage } from '../../firebase-config';

const FileGalleryPage = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const [openFolders, setOpenFolders] = useState([]);

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleUploadFiles = () => {
    selectedFiles.forEach((file) => {
      if (file.type === 'application/x-directory') {
        uploadFolder(file.webkitRelativePath);
      } else {
        uploadFile(file);
      }
    });
  };

  const uploadFolder = (folderPath) => {
    const folder = selectedFiles.find((file) => file.webkitRelativePath === folderPath);

    if (!folder) return;

    const folderRef = ref(storage, `YOUR_DYNAMIC_FOLDER_NAME/${folder.name}`);
    const uploadTask = uploadBytesResumable(folderRef, folder);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress((prevProgress) => ({
          ...prevProgress,
          [folder.webkitRelativePath]: progress,
        }));
      },
      (error) => {
        console.error('Error uploading folder:', error);
      },
      () => {
        setOpenFolders((prevFolders) => [...prevFolders, folder.webkitRelativePath]);
        fetchUploadedFiles();
      }
    );
  };

  const uploadFile = (file) => {
    const fileRef = ref(storage, `YOUR_DYNAMIC_FOLDER_NAME/${file.webkitRelativePath}`);
    const uploadTask = uploadBytesResumable(fileRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress((prevProgress) => ({
          ...prevProgress,
          [file.webkitRelativePath]: progress,
        }));
      },
      (error) => {
        console.error('Error uploading file:', error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setUploadedFiles((prevFiles) => [...prevFiles, { name: file.name, url }]);
        });
      }
    );
  };

  const handleOpenFolder = (folderPath) => {
    setOpenFolders((prevFolders) => [...prevFolders, folderPath]);
  };

  useEffect(() => {
    fetchUploadedFiles();
  }, []);

  const fetchUploadedFiles = async () => {
    try {
      const folderRef = ref(storage, 'YOUR_DYNAMIC_FOLDER_NAME');
      const files = await listAll(folderRef);

      const filePromises = files.items.map(async (file) => {
        const url = await getDownloadURL(file);
        return { name: file.name, url, path: file.fullPath };
      });

      const fetchedFiles = await Promise.all(filePromises);
      setUploadedFiles(fetchedFiles);
    } catch (error) {
      console.error('Error fetching uploaded files:', error);
    }
  };

  const renderFile = (file) => {
    if (file.type === 'application/x-directory') {
      return (
        <div key={file.path} className="p-2 border rounded">
          <div className="flex items-center cursor-pointer" onClick={() => handleOpenFolder(file.path)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mr-2">
              <polyline points="9 11 12 14 15 11"></polyline>
            </svg>
            <span>{file.name}</span>
          </div>
          {openFolders.includes(file.path) && renderFilesInFolder(file.path)}
        </div>
      );
    } else {
      return (
        <div key={file.path} className="p-2 border rounded">
          <a href={file.url} download={file.name} className="text-blue-500 underline">
            {file.name}
          </a>
        </div>
      );
    }
  };

  const renderFilesInFolder = (folderPath) => {
    const filesInFolder = uploadedFiles.filter((file) => file.path.startsWith(folderPath));

    return (
      <div className="pl-4">
        {filesInFolder.map((file) => renderFile(file))}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-16">
      <div className="flex justify-end mb-4">
        <label htmlFor="fileInput" className="mr-2">
          Upload Files/Folders
        </label>
        <input
          type="file"
          id="fileInput"
          className="hidden"
          multiple
          webkitdirectory=""
          directory=""
          onChange={handleFileInputChange}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleUploadFiles}
        >
          Upload
        </button>
      </div>

      <div className="grid grid-cols-6 gap-4">
        {uploadedFiles.map((file) => renderFile(file))}
      </div>

      <div className="mt-4">
        {selectedFiles.map((file) => (
          <div key={file.webkitRelativePath} className="flex items-center">
            <span className="mr-2">{file.webkitRelativePath}</span>
            {uploadProgress[file.webkitRelativePath] !== undefined && (
              <progress value={uploadProgress[file.webkitRelativePath]} max={100} className="w-64"></progress>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileGalleryPage;
