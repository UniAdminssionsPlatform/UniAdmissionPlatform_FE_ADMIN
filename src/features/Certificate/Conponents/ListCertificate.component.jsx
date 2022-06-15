import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Layout, Image, Divider } from "antd";
import Highlighter from "react-highlight-words";
import ModalEditCertificateContainer from "../ModalEdit.container";
import ModalCreateCertificateContainer from "../ModalCreate.container";

const ListCertificateComponent = (props) => {
  const {
    listCertificate,
    handleSearch,
    searchInput,
    handleReset,
    searchedColumn,
    searchText,
  } = props;

  const { Header, Content } = Layout;
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visibleCreate, setVisibleCreate] = useState(false);
  const [certificateID, setCertificateID] = useState("");

  const showModalEdit = (value) => {
    setCertificateID(value);
    setVisibleEdit(true);
  };

  const showModalCreate = () => {
    setVisibleCreate(true);
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: "Hình ảnh",
      dataIndex: "thumbnailUrl",
      key: "thumbnailUrl",
      width: "5%",
      render: (_, { thumbnailUrl }) => <Image width={50} src={thumbnailUrl} />,
    },
    {
      title: "Chứng chỉ",
      dataIndex: "name",
      key: "name",
      width: "20%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      width: "20%",
    },
    {
      title: "Thao tác",
      width: "20%",
      render: (_, record) => (
        <>
          <Space split={<Divider type="vertical" />}>
            <Button
              onClick={() => showModalEdit(record.id)}
              type="primary"
              size="small"
            >
              Chỉnh sửa
            </Button>
            <Button type="primary" danger size="small">
              Xóa
            </Button>
          </Space>
        </>
      ),
    },
  ];

  return (
    <>
      <Layout className="layout">
        <Header></Header>
        <Content
          style={{
            padding: "0 50px",
          }}
        >
          <Button
            type="primary"
            style={{ marginBottom: 10, marginTop: 10 }}
            onClick={showModalCreate}
          >
            Tạo chứng chỉ
          </Button>
          <div className="site-layout-content">
            <Table columns={columns} dataSource={listCertificate} />
          </div>
        </Content>
        {visibleEdit === true ? (
          <ModalEditCertificateContainer
            certificateID={certificateID}
            visibleEdit={visibleEdit}
            setVisibleEdit={setVisibleEdit}
          />
        ) : (
          ""
        )}
        {visibleCreate === true ? (
          <ModalCreateCertificateContainer
            visibleCreate={visibleCreate}
            setVisibleCreate={setVisibleCreate}
          />
        ) : (
          ""
        )}
      </Layout>
    </>
  );
};
export default ListCertificateComponent;
