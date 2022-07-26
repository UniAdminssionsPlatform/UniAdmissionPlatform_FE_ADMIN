import React from 'react';
import CertificateContainer from '../../features/Certificate/Certificate.container';
import TitlePageComponent from '../../components/Title.component';

const CerttificatePage = () => {
  return (
    <>
      <TitlePageComponent
        title={'Quản lý chứng chỉ'}
        subTitle={'Bạn có thể tạo, sửa, xóa các chứng chỉ trong bảng này'}
      />

      <CertificateContainer />
    </>
  );
};
export default CerttificatePage;
