import React from "react";
import {
  Button,
  Input,
  Space,
  Table,
  Layout,
  Image,
  Divider,
  Skeleton,
  Modal,
  Tag,
  Tooltip,
  Switch,
  Pagination 
} from "antd";
import SearchBar from "./SearchBar.component";
import { ExclamationCircleOutlined } from '@ant-design/icons';

const HighSchoolRepresentativesComponent = (props) => {
  const { Header, Content, Footer } = Layout;
  const { data, setDataSearch, loading, setLoading, highschool, onChangePage, handleOk } = props;

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Họ và tên",
      render: (record) => (
        <>
          <a>
            {record.lastName} {record.middleName} {record.firstName}
          </a>
        </>
      ),
    },
    {
      title: "Trường cấp 3",
      dataIndex: "highSchoolName",
      key: "highSchoolName",
    },
    {
      title: "Email",
      dataIndex: "emailContact",
      key: "emailContact",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Trạng thái",
      key: "status",
      dataIndex: "status",
      render: (_, { status }) => (
        <>
          {status === 0 ? <Tag color="gold">Chưa xác thực</Tag> : ""}
          {status === 1 ? <Tag color="geekblue">Đang chờ xét duyệt</Tag> : ""}
          {status === 2 ? <Tag color="green">Đang hoạt động</Tag> : ""}
          {status === 3 ? <Tag color="red">Đang khóa</Tag> : ""}
        </>
      ),
    },
    {
      title: "Thao tác",
      key: "action",
      render: (_, record) => (
        <>
          {record.status !== 0 && record.status !== 1 && (
            <Tooltip title={record.status === 2 ? "Khóa" : "Mở khóa"}>
              <Switch
                defaultChecked={record.status === 2 ? true : false}
                  onChange={() => {
                    confirm(record);
                  }}
              />
            </Tooltip>
          )}
        </>
      ),
    },
  ];

  const confirm = (value) => {
    let context;

    if (value.status === 2) context = `Khóa ${value.lastName} ${value.middleName} ${value.firstName} ?`;
    if (value.status === 3) context = `Mở khóa cho ${value.lastName} ${value.middleName} ${value.firstName} ?`;
    Modal.confirm({
      title: 'Xác thực',
      icon: <ExclamationCircleOutlined />,
      content: context,
      okText: 'Có',
      cancelText: 'Không',
      onOk() {
        handleOk(value);
      },
      onCancel() {
        window.location.reload();
      }
    });
  };
  return (
    <>
      <Layout className="layout">
        <Header></Header>
        <Content
          style={{
            padding: "0 50px",
          }}
        >
          <SearchBar
            setDataSearch={setDataSearch}
            highschool={highschool}
            setLoading={setLoading}
          />
          <Skeleton active loading={loading}>
            <div className="site-layout-content">
              <Table columns={columns} dataSource={data} pagination={false} />
            </div>
            <Pagination total={data?.total} onChange={onChangePage} showSizeChanger />
          </Skeleton>
          
        </Content>
        <Footer></Footer>
      </Layout>
    </>
  );
};
export default HighSchoolRepresentativesComponent;
