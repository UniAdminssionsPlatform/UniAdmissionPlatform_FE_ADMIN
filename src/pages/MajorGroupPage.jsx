import React from 'react';
import MajorGroupContainer from '../features/MajorGroup/MajorGroup.container';
import TitlePageComponent from '../components/Title.component';

const MajorGroupPage = () => {
  return (
    <>
      <TitlePageComponent
        title={'Quản lý nhóm ngành'}
        subTitle={'Bạn có thể tạo, sửa, xóa các nhóm ngành trong bảng này'}
      />
      <MajorGroupContainer />
    </>
  );
};

export default MajorGroupPage;
