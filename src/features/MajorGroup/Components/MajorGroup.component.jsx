import { SearchOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Image,
  Input,
  Layout,
  Modal,
  Pagination,
  Popconfirm,
  Space,
  Spin,
  Table,
} from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import Highlighter from "react-highlight-words";
import LayoutPage from "../../../components/commons/LayoutPage/LayoutPageWithout.component";
import TextArea from "antd/lib/input/TextArea";
import SingleUploadWithPreviewContainer from "../../SingleUploadWithPreview.container";

const MajorGroupComponent = (props) => {
  const {
    majorGroup,
    majorGroupDetail,
    showModal,
    showModal2,
    handleOk,
    handleCancel,
    handleCancel2,
    isModalVisible,
    isModalVisible2,
    handleOnClick,
    handleCreate,
    handleDelete,
    handleEdit,
    totalPages,
    getListTags,
    setImageUrl,
    isLoading,
    onFinish,
    imageUrlEdit,
    setImageUrlEdit,
  } = props;
  const [searchText, setSearchText] = useState("");

  const [searchedColumn, setSearchedColumn] = useState("");
  const [form] = Form.useForm();
  const [editingRow, setEditingRow] = useState(null);
  const searchInput = useRef(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { Header, Content, Footer } = Layout;

  const field = [
    {
      name: ["thumbnailUrl"],
      value: majorGroupDetail?.thumbnailUrl,
    },
    {
      name: ["description"],
      value: majorGroupDetail?.description,
    },
    {
      name: ["name"],
      value: majorGroupDetail?.name,
    },
  ];

  const stylePaging = {
    paddingTop: 20,
    paddingBottom: 20,
  };

  const styleButton = {
    paddingLeft: 80,
  };

  const styleImageModalEdit = {
    paddingTop: 10,
    paddingBottom: 10,
  };

  const styleSpin = {
    align: "center",
  };

  const onChange = (page, pageSize) => {
    setPage(page);
    setPageSize(pageSize);
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
          // value={selectedKeys[0]}
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
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
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
      title: "Số Thứ Tự",
      dataIndex: "name",
      key: "index",
      width: "2%",
      render: (value, record, index) => index + 1,
    },
    {
      title: "Hình ảnh",
      dataIndex: "thumbnailUrl",
      key: "name",
      width: "4%",
      render: (_, { thumbnailUrl }) => (
        <Image width={330} src={thumbnailUrl} preview={false} />
      ),
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      width: "5%",
      ...getColumnSearchProps("name"),
    },
    // {
    //   title: "Mô tả",
    //   dataIndex: "description",
    //   key: "name",
    //   width: "20%",
    // },
    {
      title: "Thao tác",
      dataIndex: "id",
      width: "5%",
      render: (_, record) => {
        return majorGroup.length >= 1 ? (
          <>
            <Popconfirm
              title="Bạn có chắc muốn xóa thẻ này chứ ?"
              onConfirm={() => handleDelete(record.id)}
            >
              <a>Xóa Thẻ</a>
            </Popconfirm>
            <Button
              style={styleButton}
              type="link"
              onClick={() => {
                handleOnClick(record.id);
              }}
            >
              Chỉnh Sửa
            </Button>
            {isLoading ? (
              <Spin style={styleSpin} />
            ) : (
              <Modal
                title="Chỉnh sửa nhóm ngành"
                visible={isModalVisible2}
                onOk={() => {
                  form.validateFields().then((values) => {
                    console.log(values);
                    onFinish(values);
                    form.resetFields();
                  });
                }}
                onCancel={handleCancel2}
                okText="Chỉnh sửa"
                cancelText="Đóng"
              >
                <Form
                  fields={field}
                  // onFinish={onFinish}
                  id="edit-majorgroup-form"
                  name="basic"
                  layout="vertical"
                  form={form}
                >
                  <Form.Item label="Tên :" name="name">
                    <Input />
                  </Form.Item>
                  <Form.Item label="Mô tả :" name="description">
                    <TextArea autoSize={true} />
                  </Form.Item>
                  <lable>Hình ảnh : </lable>
                  <div style={styleImageModalEdit}>
                    <Image
                      width={450}
                      src={majorGroupDetail.thumbnailUrl}
                      preview={false}
                    />
                  </div>
                  <Form.Item name="thumbnailUrl">
                    <SingleUploadWithPreviewContainer
                      imageUrlEdit={imageUrlEdit}
                      setImageUrl={setImageUrlEdit}
                    />
                  </Form.Item>
                </Form>
              </Modal>
            )}
          </>
        ) : null;
      },
    },
  ];
  return (
    <>
      <Helmet>
        <title>Thẻ</title>
      </Helmet>
      <Layout className="layout">
        <Content
          style={{
            padding: "0 50px",
          }}
        >
          <>
            <Table
              columns={columns}
              dataSource={majorGroup}
              pagination={false}
            />
            <div style={stylePaging}>
              <Pagination
                showSizeChanger
                defaultCurrent={page}
                pageSize={pageSize}
                onChange={onChange}
              />
            </div>
          </>
          <div>
            <Button
              type="primary"
              onClick={showModal}
              style={{ backgroundColor: "green" }}
            >
              Tạo một nhóm ngành mới
            </Button>
            {/* <Modal
              okButtonProps={{
                form: "add-certificate-form",
                key: "submit",
                htmlType: "submit",
              }}
              title="Thêm một nhóm ngành mới"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              okText="Thêm"
              cancelText="Đóng"
            >
              <Form
                initialValues={{
                  remember: false,
                }}
                onFinish={handleCreate}
                id="add-certificate-form"
                name="basic"
                autoComplete="off"
                layout="vertical"
              >
                <Form.Item label="Tên" name="name">
                  <Input />
                </Form.Item>
                <Form.Item label="Mô tả" name="description">
                  <TextArea />
                </Form.Item>
                <lable>Hình ảnh</lable>
                <Form.Item name="thumbnailUrl">
                  <SingleUploadWithPreviewContainer setImageUrl={setImageUrl} />
                </Form.Item>
              </Form>
            </Modal> */}
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default MajorGroupComponent;
