import React, { useEffect, useState } from 'react';
import axiosFiles from '@/lib/axios/axiosFiles';

const FileDownload = () => {
  const [fileNames, setFileNames] = useState(['data.pdf']);

  useEffect(() => {
    // fetch file name list by useCallback
    setFileNames(['data.pdf']);
  }, []);

  const handleClickDownload = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const fileName = event.currentTarget.textContent;
      const linkElement = document.createElement('a');
      console.log('process.env.PUBLIC_URL', process.env.PUBLIC_URL);
      const res = await axiosFiles.get(`${process.env.PUBLIC_URL}/files/${fileName}`);
      console.log('handleClickDownload res', res);

      const file = new Blob([res.data]); // , { type: 'application/pdf' }
      linkElement.href = URL.createObjectURL(file);
      linkElement.download = fileName ?? 'defaultFileName';

      document.body.appendChild(linkElement);
      linkElement.click();
      document.body.removeChild(linkElement);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>FileDownload</h1>
      {
        fileNames.map((fileName) => (
          <div key={fileName}>
            <button type="button" onClick={handleClickDownload}>{fileName}</button>
          </div>
        ))
      }
    </div>
  );
};

export default FileDownload;
