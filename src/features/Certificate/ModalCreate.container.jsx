import React, { useState, useEffect } from "react";
import ModalCreateCertificteConponent from "./Conponents/Modal/ModalCreate.component";
import { createCertificate } from "../../service/CertificateService";
import { handleNotification } from "../../notification/CreateCertificateNotification";

const ModalEditCertificateContainer = (props) => {
  const { visibleCreate, setVisibleCreate } = props;

  const [confirmLoading, setConfirmLoading] = useState(false);
  const [imgeUrl, setImageUrl] = useState();

  const handleCancel = () => {
    setVisibleCreate(false);
  };

  const create = (data) => {
    createCertificate(data)
      .then((result) => {
        handleNotification("success");
      })
      .catch((error) => {
        handleNotification("error");
      });
  };

  const onFinish = (values) => {
    values.thumbnailUrl = imgeUrl;
    setConfirmLoading(true);
    setTimeout(() => {
      setVisibleCreate(false);
      setConfirmLoading(false);
    }, 2000);
    create(values);
    
  };

  return (
    <>
      <ModalCreateCertificteConponent
        visibleCreate={visibleCreate}
        handleCancel={handleCancel}
        confirmLoading={confirmLoading}
        onFinish={onFinish}
        setImageUrl={setImageUrl}
      />
    </>
  );
};
export default ModalEditCertificateContainer;
