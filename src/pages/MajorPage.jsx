import React from "react";
import MajorContainer from "../features/Major/Major.container";
import TitlePageComponent from "../components/Title.component";

const MajorPage = () => {
    return (
        <>
            <TitlePageComponent title={'Quản lý ngành'} subTitle={'Bạn có thể tạo, sửa, xóa các ngành trong bảng này'}/>
            <MajorContainer/>
        </>
    );
};

export default MajorPage;
