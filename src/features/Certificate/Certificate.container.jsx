import React from "react";
import ListCertificateComponent from "./Conponents/ListCertificate.component";
import { getListCertificate } from "../../service/CertificateService";
import { useRef, useState, useEffect } from "react";
import { handleNotification } from "../../notification/GetListCertificateNotification";

const CertificateContainer = () => {
  const [listCertificate, setListCertificate] = useState("");
  useEffect(() => {
    loadData();
  }, []);
  const loadData = () => {
    getListCertificate()
      .then((result) => {
        setListCertificate(result.data.data.list);
        handleNotification("success");
      })
      .catch((error) => {
        handleNotification("error");
      });
  };

  return (
    <>
      <ListCertificateComponent listCertificate={listCertificate} />
    </>
  );
};
export default CertificateContainer;
