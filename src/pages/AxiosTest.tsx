import React, { useEffect } from 'react';
import axiosInstance from '@/lib/axios/axiosCommon';

const AxiosTest = () => {
  const handlePost = async () => {
    const res = axiosInstance.post('/api/v1/test', {
      test: 'test',
    });
    console.log('res', res);
  };
  useEffect(() => {
    handlePost();
  }, []);
  return <div>AxiosTest</div>;
};

export default AxiosTest;
