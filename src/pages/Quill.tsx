import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

const Font = ReactQuill.Quill.import('formats/font');
Font.whitelist = ['sans-serif', 'yahei', 'Noto-sans'];
ReactQuill.Quill.register(Font, true);

const Page = styled.div`
  padding: 20px;
  background-color: #fff;
  color: #000;
  min-height: 100vh;

  [data-value='yahei'] {
    ::before {
      content: 'yahei' !important;
    }
  }
  [data-value='Noto-sans'] {
    ::before {
      content: '노토 산스 폰트' !important;
    }
  }
`;

const QuillPage = () => {
  const [value, setValue] = useState('');
  useEffect(() => {
    console.log('value', value);
  }, [value]);
  return (
    <Page>
      <h1>Quill</h1>
      <ReactQuill
        value={value}
        onChange={setValue}
        theme="snow"
        modules={{
          toolbar: [
            [{ font: Font.whitelist }],
            ['bold', 'italic', 'underline', 'strike'], // toggled buttons
            ['blockquote', 'code-block'],
            [{ header: 1 }, { header: 2 }], // custom button values
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
            [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
            [{ direction: 'rtl' }], // text direction
            [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }], // dropdown with defaults from theme
            [{ align: [] }],
            ['clean'], // remove formatting button
          ],
        }}
      />
    </Page>
  );
};

export default QuillPage;
