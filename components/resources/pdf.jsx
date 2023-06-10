import { useState, useEffect } from 'react';
import { ref, uploadBytesResumable, getDownloadURL, listAll, deleteObject } from 'firebase/storage';
import { storage } from '../../firebase-config';

const PDFGalleryPage = ({resourceId}) => {
  const [selectedPDFs, setSelectedPDFs] = useState([]);
  const [uploadedPDFs, setUploadedPDFs] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    setSelectedPDFs([...selectedPDFs, ...files]);
  };

  const handleUploadPDFs = () => {
    selectedPDFs.forEach((pdf) => {
      const pdfRef = ref(storage, `SharedResources/PDF/${resourceId}/${pdf.name}`);
      const uploadTask = uploadBytesResumable(pdfRef, pdf);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress((prevProgress) => ({
            ...prevProgress,
            [pdf.name]: progress,
          }));
        },
        (error) => {
          console.error('Error uploading PDF:', error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setUploadedPDFs((prevPDFs) => [...prevPDFs, { name: pdf.name, url }]);
          });
        }
      );
    });
  };

  const handleDeletePDF = async (pdfName) => {
    try {
      const pdfRef = ref(storage, `SharedResources/PDF/${resourceId}/${pdfName}`);
      await deleteObject(pdfRef);
      setUploadedPDFs((prevPDFs) => prevPDFs.filter((pdf) => pdf.name !== pdfName));
    } catch (error) {
      console.error('Error deleting PDF:', error);
    }
  };

  useEffect(() => {
    const fetchUploadedPDFs = async () => {
      try {
        const folderRef = ref(storage, `SharedResources/PDF/${resourceId}`);
        const files = await listAll(folderRef);
  
        const pdfPromises = files.items.map(async (file) => {
          const url = await getDownloadURL(file);
          return { name: file.name, url };
        });
  
        const pdfs = await Promise.all(pdfPromises);
        setUploadedPDFs(pdfs);
      } catch (error) {
        console.error('Error fetching uploaded PDFs:', error);
      }
    };
    fetchUploadedPDFs();
  }, [resourceId]);

  

  return (
    <div className="container mx-auto backdrop-blur-md bg-white/40 p-4 min-h-screen rounded-xl">
      <div className="flex justify-end mb-4">
        <label htmlFor="pdfInput" className="mr-2">
          Upload PDFs
        </label>
        <input
          type="file"
          id="pdfInput"
          className="hidden"
          multiple
          accept="application/pdf"
          onChange={handleFileInputChange}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleUploadPDFs}
        >
          Upload
        </button>
      </div>

      <div className="grid grid-cols-6 gap-4">
        {uploadedPDFs.map((pdf) => (
          <div key={pdf.name} className="p-2 border rounded">
            <iframe src={pdf.url} title={pdf.name} className="w-full h-auto"></iframe>
            <div className="flex justify-between mt-2">
              <a href={pdf.url} download={pdf.name} className="text-blue-500 underline">
                Download
              </a>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => handleDeletePDF(pdf.name)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        {selectedPDFs.map((pdf) => (
          <div key={pdf.name}>
            {uploadProgress.hasOwnProperty(pdf.name) && (
              <progress value={uploadProgress[pdf.name]} max={100} className="w-48"></progress>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PDFGalleryPage;
