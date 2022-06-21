import { SearchOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  Layout,
  Modal,
  Pagination,
  Popconfirm,
  Space,
  Table,
} from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import Highlighter from "react-highlight-words";
import LayoutPage from "../../../components/commons/LayoutPage/LayoutPageWithout.component";

const TagComponent = (props) => {
  const {
    tags,
    showModal,
    handleOk,
    handleCancel,
    isModalVisible,
    form,
    handleCreate,
    handleDelete,
    handleEdit,
    totalPages,
    getListTags,
  } = props;
  const [searchText, setSearchText] = useState("");

  const [searchedColumn, setSearchedColumn] = useState("");
  const [editingRow, setEditingRow] = useState(null);
  const searchInput = useRef(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { Header, Content, Footer } = Layout;

  const stylePaging = {
    paddingTop: 20,
    paddingBottom: 20,
  };

  const styleButton = {
    paddingLeft: 80,
  };

  const onChange = (page, pageSize) => {
    setPage(page);
    setPageSize(pageSize);
  };

  const EditableContext = React.createContext(null);

  // const EditableCell = ({
  //   title,
  //   editable,
  //   children,
  //   dataIndex,
  //   record,
  //   handleSave,
  //   ...restProps
  // }) => {
  //   const [editing, setEditing] = useState(false);
  //   const inputRef = useRef(null);
  //   const form = useContext(EditableContext);
  //   useEffect(() => {
  //     if (editing) {
  //       inputRef.current.focus();
  //     }
  //   }, [editing]);

  //   const toggleEdit = () => {
  //     setEditing(!editing);
  //     form.setFieldsValue({
  //       [dataIndex]: record[dataIndex],
  //     });
  //   };

  //   const save = async () => {
  //     try {
  //       const values = await form.validateFields();
  //       toggleEdit();
  //       handleSave({ ...record, ...values });
  //     } catch (errInfo) {
  //       console.log("Save failed:", errInfo);
  //     }
  //   };

  //   let childNode = children;

  //   if (editable) {
  //     childNode = editing ? (
  //       <Form.Item
  //         style={{
  //           margin: 0,
  //         }}
  //         name={dataIndex}
  //         rules={[
  //           {
  //             required: true,
  //             message: `${title} is required.`,
  //           },
  //         ]}
  //       >
  //         <Input ref={inputRef} onPressEnter={save} onBlur={save} />
  //       </Form.Item>
  //     ) : (
  //       <div
  //         className="editable-cell-value-wrap"
  //         style={{
  //           paddingRight: 24,
  //         }}
  //         onClick={toggleEdit}
  //       >
  //         {children}
  //       </div>
  //     );
  //   }

  //   return <td {...restProps}>{childNode}</td>;
  // };
  const handleOnPressEnter = (e, editingRow) => {
    const request = {
      id: editingRow ? editingRow : "",
      data: e.target.value ? e.target.value : "",
    };
    handleEdit(request);
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
      width: "30%",
      render: (value, record, index) => index + 1,
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      width: "30%",
      ...getColumnSearchProps("name"),
      render: (text, record) => {
        if (editingRow === record.id) {
          return (
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên thẻ",
                },
              ]}
            >
              <Input onPressEnter={(e) => handleOnPressEnter(e, editingRow)} />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Thao tác",
      dataIndex: "id",
      render: (_, record) => {
        return tags.length >= 1 ? (
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
                setEditingRow(record.id);
                form.setFieldsValue({
                  name: record.name,
                });
              }}
            >
              Chỉnh Sửa
            </Button>
          </>
        ) : null;
      },
    },
    // {
    //   title: "Thao tác",
    //   dataIndex: "id",
    //   render: (_, record) =>
    //     tags.length >= 1 ? (
    //       <Popconfirm
    //         title="Bạn có chắc muốn xóa thẻ này chứ ?"
    //         onConfirm={() => handleDelete(tags.id)}
    //       >
    //         <a>Xem Thẻ</a>
    //       </Popconfirm>
    //     ) : null,
    // },
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
          <Form form={form}>
            <>
              <Table
                columns={columns}
                dataSource={tags}
                pagination={false}
                // pagination={{
                //   current: page,
                //   pageSize: pageSize,
                //   onChange: (page, pageSize) => {
                //     setPage(page);
                //     setPageSize(pageSize);
                //   }
                //   // onChange: function(page: '5', pageSize:'5')
                //   // showSizeChanger: true,
                //   // pageSizeOptions: ["10", "20", "30"],
                // }}
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
          </Form>
          <div>
            <Button
              type="primary"
              onClick={showModal}
              style={{ backgroundColor: "green" }}
            >
              Tạo một thẻ mới
            </Button>
            <Modal
              okButtonProps={{
                form: "add-certificate-form",
                key: "submit",
                htmlType: "submit",
              }}
              title="Thêm một thẻ mới"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              okText="Thêm"
              cancelText="Đóng"
            >
              <Form
                // form={form}
                initialValues={{
                  remember: false,
                }}
                onFinish={handleCreate}
                id="add-certificate-form"
                name="basic"
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
              >
                <Form.Item label="Tên" name="name">
                  <Input />
                </Form.Item>
              </Form>
            </Modal>
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default TagComponent;
