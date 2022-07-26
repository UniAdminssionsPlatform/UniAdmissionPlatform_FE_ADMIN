import React from 'react';
import CreateProfileUniversityContainer from '../../features/university/CreateProfileUniversity.contianer';
import TitlePageComponent from '../../components/Title.component';

const CreateUniversityProfilePage = () => {
  return (
    <>
      <TitlePageComponent
        title={'Quản lý thông tin trường đại học'}
        subTitle={'Bạn có thể thay đổi thông tin trường đại học trong bảng này'}
      />
      <CreateProfileUniversityContainer />
    </>
  );
};
export default CreateUniversityProfilePage;
