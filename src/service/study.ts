import axiosLocalTsEDInstance from '@/lib/axios/axiosLocalTsEDInstance';

const getStudyList = async () => {
  const res = await axiosLocalTsEDInstance.get('/rest/study/list');
  return res;
};

export default getStudyList;
