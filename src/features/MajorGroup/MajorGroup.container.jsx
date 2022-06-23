import { Form, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import {
  handleCreateFailNotification,
  handleCreateSuccessNotification,
} from "../../notification/CreateMajorGroup";
import {
  handleDeleteFailNotification,
  handleDeleteSuccessNotification,
} from "../../notification/DeleteMajorGroup";
import {
  handleUpdateFailNotification,
  handleUpdateSuccessNotification,
} from "../../notification/UpdateMajorGroup";
import MajorGroupComponent from "./Components/MajorGroup.component";
import {
  CreateMajorGroup,
  DeleteMajorGroup,
  ListMajorGroup,
  MajorGroupDetail,
  UpdateMajorGroup,
} from "../../service/MajorGroupService";

const MajorGroupContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [form] = Form.useForm();
  const [majorGroup, setMajorGroup] = useState();
  const [majorGroupDetail, setMajorGroupDetail] = useState("");
  const [imageUrl, setImageUrl] = useState();
  const [imageUrlEdit, setImageUrlEdit] = useState({
    url: "",
  });

  const showModal = () => {
    setIsModalVisible(true);
  };

  const showModal2 = () => {
    setIsModalVisible2(true);
  };

  const handleOk = () => {
    form.resetFields();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleCancel2 = () => {
    setIsModalVisible2(false);
  };

  const handleOnClick = (value) => {
    getMajorGroupDetail(value);
    showModal2();
  };

  //GET DETAIL MAJOR GROUP
  const getMajorGroupDetail = (majorGroupID) => {
    MajorGroupDetail(majorGroupID).then((result) => {
      setMajorGroupDetail(result.data.data);
      setIsLoading(false);
    });
  };

  //UPDATE MAJOR GROUP
  const edit = (data) => {
    UpdateMajorGroup(data)
      .then((result) => {
        handleUpdateSuccessNotification("success");
        setTimeout(reload, 2000);
      })
      .catch((error) => {
        handleUpdateFailNotification("error");
      });
  };

  const reload = () => {
    setIsModalVisible2();
    window.location.reload();
  };

  //làm sao để truyền handleonclick vào onfinsh để lấy id

  const onFinish = (values) => {
    // values.id = MajorGroupDetail(value);
    values.thumbnailUrl = imageUrlEdit.url;
    setIsLoading(true);
    edit(values);
  };

  //DELETE MAJOR GROUP
  const handleDelete = (value) => {
    DeleteMajorGroup(value)
      .then((result) => {
        handleDeleteSuccessNotification("success");
        ListMajorGroup();
        setIsModalVisible(false);
      })
      .catch((error) => {
        handleDeleteFailNotification("error");
      });
  };

  //CREATE MAJOR GROUP
  const handleCreate = (values) => {
    values.thumbnailUrl = imageUrl;
    form.resetFields();
    CreateMajorGroup(values)
      .then((result) => {
        handleCreateSuccessNotification("success");
        ListMajorGroup();
        setIsModalVisible(false);
      })
      .catch((error) => {
        handleCreateFailNotification("error");
      });
  };

  //GET LIST MAJOR GROUP

  useEffect(() => {
    getMajorGroup();
  }, []);

  const getMajorGroup = () => {
    ListMajorGroup().then((result) => {
      setMajorGroup(result.data.data.list);
      setIsLoading(false);
    });
  };

  return (
    <>
      {isLoading ? (
        <Skeleton active />
      ) : (
        <MajorGroupComponent
          majorGroup={majorGroup}
          handleCreate={handleCreate}
          handleDelete={handleDelete}
          showModal={showModal}
          showModal2={showModal2}
          handleOk={handleOk}
          handleCancel={handleCancel}
          handleCancel2={handleCancel2}
          isModalVisible={isModalVisible}
          isModalVisible2={isModalVisible2}
          form={form}
          setImageUrl={setImageUrl}
          majorGroupDetail={majorGroupDetail}
          handleOnClick={handleOnClick}
          isLoading={isLoading}
          onFinish={onFinish}
          imageUrlEdit={imageUrlEdit}
          setImageUrlEdit={setImageUrlEdit}
        />
      )}
    </>
  );
};

export default MajorGroupContainer;
