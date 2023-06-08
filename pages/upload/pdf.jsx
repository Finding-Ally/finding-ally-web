import { useState, useEffect } from 'react';
import { ref, uploadBytesResumable, getDownloadURL, listAll } from 'firebase/storage';
import { storage } from '../../firebase-config';

const PDFGalleryPage = () => {
  const [selectedPDFs, setSelectedPDFs] = useState([]);
  const [uploadedPDFs, setUploadedPDFs] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    setSelectedPDFs([...selectedPDFs, ...files]);
  };

  const handleUploadPDFs = () => {
    selectedPDFs.forEach((pdf) => {
      const pdfRef = ref(storage, `YOUR_DYNAMIC_FOLDER/${pdf.name}`);
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

  useEffect(() => {
    fetchUploadedPDFs();
  }, []);

  const fetchUploadedPDFs = async () => {
    try {
      const folderRef = ref(storage, 'YOUR_DYNAMIC_FOLDER');
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

  return (
    <div className="container mx-auto">
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
            <div className="flex justify-center mt-2">
              <a href={pdf.url} download={pdf.name} className="text-blue-500 underline">
                Download
              </a>
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
