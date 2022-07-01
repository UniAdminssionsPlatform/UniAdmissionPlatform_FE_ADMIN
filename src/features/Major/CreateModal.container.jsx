import React, { useEffect, useState } from "react";
import {
  handleCreateFailNotification,
  handleCreateSuccessNotification,
} from "../../notification/CreateMajor";
import ModalCreateMajorConponent from "./Components/CreateModalMajor.component";
import { CreateMajor } from "../../service/MajorService";
import { ListMajorGroup } from "../../service/MajorGroupService";

const ModalCreateMajorContainer = (props) => {
  const { visibleCreate, setVisibleCreate } = props;
  const [loading, setLoading] = useState(false);
  const [majorGroupId, setMajorGroupId] = useState(1);
  const [majorGroup, setMajorGroup] = useState();

  const handleCancel = () => {
    setVisibleCreate(false);
  };

  const handleChange = (value) => {
    setMajorGroupId(value);
  };

  const create = (data) => {
    CreateMajor(data)
      .then((result) => {
        handleCreateSuccessNotification("success");
        setTimeout(reload, 2000);
      })
      .catch((error) => {
        handleCreateFailNotification("error");
      });
  };

  const reload = () => {
    setVisibleCreate(false);
    window.location.reload();
  };

  const onFinish = (values) => {
    values.majorGroupId = majorGroupId;
    setLoading(true);
    create(values);
  };

  //GET LIST MAJOR GROUP

  useEffect(() => {
    getMajorGroup();
  }, []);

  const getMajorGroup = () => {
    ListMajorGroup().then((result) => {
      setMajorGroup(result.data.data.list);
    });
  };

  return (
    <>
      <ModalCreateMajorConponent
        visibleCreate={visibleCreate}
        handleCancel={handleCancel}
        loading={loading}
        onFinish={onFinish}
        handleChange={handleChange}
        majorGroup={majorGroup}
      />
    </>
  );
};
export default ModalCreateMajorContainer;
