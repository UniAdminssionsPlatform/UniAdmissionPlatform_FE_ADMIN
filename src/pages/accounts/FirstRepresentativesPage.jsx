import React from 'react';
import FirstRepresentativesContainer from '../../features/account/firstRepresentatives/FirstRepresentatives.container';
import TitlePageComponent from "../../components/Title.component";

const FirstRepresentativesPage = () => {
    return(
        <>
            <TitlePageComponent title={'Quản lý tài khoản đối tác'} subTitle={'Bạn có thể tạo, sửa, xóa các tài khoản đối tác trong bảng này'}/>
            <FirstRepresentativesContainer/>
        </>
    )
}
export default FirstRepresentativesPage;