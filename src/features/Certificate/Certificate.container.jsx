import React from "react";
import ListCertificateComponent from "./Conponents/ListCertificate.component";
import { getListCertificate } from "../../service/CertificateService";
import { useRef, useState, useEffect } from "react";
import { handleGetListNotification } from "../../notification/CertificateNotification";

const CertificateContainer = () => {
  const [listCertificate, setListCertificate] = useState("");
  const [loading, setLoading] = useState(true);

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
        handleGetListNotification("success");
        setLoading(false);
      })
      .catch((error) => {
        handleGetListNotification("error");
      });
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
    setLoading(false);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const handleDelete = (id) => {
    console.log('delete id: ', id);
  }

  return (
    <>
      <ListCertificateComponent
        listCertificate={listCertificate}
        handleSearch={handleSearch}
        handleReset={handleReset}
        handleDelete={handleDelete}
        setSearchText={setSearchText}
        setSearchedColumn={setSearchedColumn}
        searchedColumn={searchedColumn}
        searchText={searchText}
        searchInput={searchInput}
        loading={loading}
      />
    </>
  );
};
export default CertificateContainer;
