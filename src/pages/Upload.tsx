import React from 'react';
import DragDropUpload from '@/components/DragDropUpload';

const UploadPage = () => {
  const fileInput = React.useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInput?.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      console.log(e?.target?.files[0]);
    }
  };
  return (
    <div>
      <h1>Upload</h1>
      {/* <button>파일 업로드</button> */}
      {/* 기본 HTML */}
      <div style={{ padding: '10px' }}>
        <input type="file" />
      </div>
      <div style={{ padding: '10px' }}>
        <button type="button" onClick={handleButtonClick}>
          파일 업로드
        </button>
        <input
          type="file"
          ref={fileInput}
          multiple
          onChange={handleChange}
          style={{ display: 'none' }}
        />
      </div>
      <div style={{ padding: '10px' }}>
        <DragDropUpload />
      </div>
    </div>
  );
};

export default UploadPage;
