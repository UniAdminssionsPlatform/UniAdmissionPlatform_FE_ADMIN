import React from 'react';
import AdminTagContainer from '../features/Tag/AdminTag.container';
import TitlePageComponent from '../components/Title.component';

const TagPage = () => {
  return (
    <>
      <TitlePageComponent title={'Quản lý thẻ'} subTitle={'Bạn có thể tạo, sửa, xóa các thẻ trong bảng này'} />
      <AdminTagContainer />
    </>
  );
};

export default TagPage;
