import React from "react";
import ListCertificateComponent from "./Conponents/ListCertificate.component";
import { getListCertificate } from "../../service/CertificateService";
import { useRef, useState, useEffect } from "react";
import { handleNotification } from "../../notification/GetListCertificateNotification";

const CertificateContainer = () => {
  const [listCertificate, setListCertificate] = useState("");

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
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

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  return (
    <>
      <ListCertificateComponent
        listCertificate={listCertificate}
        handleSearch={handleSearch}
        handleReset={handleReset}
        setSearchText={setSearchText}
        setSearchedColumn={setSearchedColumn}
        searchedColumn={searchedColumn}
        searchText={searchText}
        searchInput={searchInput}
      />
    </>
  );
};
export default CertificateContainer;
