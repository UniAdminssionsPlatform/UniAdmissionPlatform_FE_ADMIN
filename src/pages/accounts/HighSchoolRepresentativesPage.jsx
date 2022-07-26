import React from 'react';
import HighSchoolRepresentativesContainer from '../../features/account/highSchoolRepresentatives/HighSchoolRepresentatives.container';
import TitlePageComponent from '../../components/Title.component';

const AccountRepresentativesPage = () => {
  return (
    <>
      <TitlePageComponent
        title={'Quản lý tài khoản trường Cấp 3'}
        subTitle={'Bạn có thể tạo, sửa, xóa các tài khoản trường Cấp 3 trong bảng này'}
      />
      <HighSchoolRepresentativesContainer />
    </>
  );
};
export default AccountRepresentativesPage;
