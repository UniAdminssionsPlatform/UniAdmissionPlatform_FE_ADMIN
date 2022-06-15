import React, { useState, useEffect } from "react";
import ModalEditCertificteConponent from "./Conponents/Modal/ModalEdit.component";
import {getDetailCertificate} from '../../service/CertificateService';

const ModalEditCertificateContainer = (props) => {
  const { certificateID, visibleEdit, setVisibleEdit } = props;

  const [confirmLoading, setConfirmLoading] = useState(false);
  const [certificate, setCertificate] = useState();
  const [imgeUrl, setImageUrl] = useState(
    {
        uid: '-1',
        name: 'image.png',
        status: 'done',
        url: '',
      },
  );

  useEffect(() => {
    loadData(certificateID);
  }, [certificateID]);

  const handleCancel = () => {
    setVisibleEdit(false);
  };

  const loadData = (id) => {
    getDetailCertificate(id).then((result) => {
        setCertificate(result.data.data);
        setImageUrl({url: result.data.data.thumbnailUrl})
    })
  }

  const onFinish = (values) => {
    console.log('Success:', values);
    setConfirmLoading(true);
    setTimeout(() => {
      setVisibleEdit(false);
      setConfirmLoading(false);
    }, 2000);
  };

  return (
    <>
      <ModalEditCertificteConponent
        visibleEdit={visibleEdit}
        handleCancel={handleCancel}
        confirmLoading={confirmLoading}
        onFinish={onFinish}
        certificate={certificate}
        imgeUrl={imgeUrl}
        setImageUrl={setImageUrl}
      />
    </>
  );
};
export default ModalEditCertificateContainer;
