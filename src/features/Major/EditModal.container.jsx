import React, { useState, useEffect } from "react";
import {
  handleUpdateFailNotification,
  handleUpdateSuccessNotification,
} from "../../notification/UpdateMajorNotification";
import { ListMajorGroup } from "../../service/MajorGroupService";
import { MajorDetail, UpdateMajor } from "../../service/MajorService";
import ModalEditMajorConponent from "./Components/EditModalMajor.component";
// import FormEditComponent from "./Components/FormEdit.component";

const ModalEditMajorContainer = (props) => {
  const { majorID, visibleEdit, setVisibleEdit } = props;

  const [loading, setLoading] = useState(true);
  const [majorDetail, setMajorDetail] = useState();
  const [majorGroupId, setMajorGroupId] = useState(1);
  const [majorGroup, setMajorGroup] = useState();

  useEffect(() => {
    loadData(majorID);
  }, [majorID]);

  const handleChange = (value) => {
    setMajorGroupId(value);

    console.log(value);
  };

  const handleCancel = () => {
    setVisibleEdit(false);
  };

  const loadData = (id) => {
    MajorDetail(id).then((result) => {
      setMajorDetail(result.data.data);
      setLoading(false);
    });
  };

  const edit = (data) => {
    UpdateMajor(data)
      .then((result) => {
        handleUpdateSuccessNotification("success");
        setTimeout(reload, 2000);
      })
      .catch((err) => {
        handleUpdateFailNotification("error");
      });
  };

  const reload = () => {
    setVisibleEdit(false);
    window.location.reload();
  };

  const onFinish = (values) => {
    values.id = majorID;
    values.majorGroupId = majorGroupId;
    console.log(values);
    // setLoading(true);
    // edit(values);
  };

  //GET LIST MAJOR GROUP

  useEffect(() => {
    getMajorGroup();
  }, []);

  const getMajorGroup = () => {
    ListMajorGroup().then((result) => {
      setMajorGroup(result.data.data.list);
      // setIsLoading(false);
    });
  };

  return (
    <>
      <ModalEditMajorConponent
        visibleEdit={visibleEdit}
        handleCancel={handleCancel}
        onFinish={onFinish}
        majorDetail={majorDetail}
        loading={loading}
        handleChange={handleChange}
        majorGroup={majorGroup}
      />
      {/* <FormEditComponent
        onFinish={onFinish}
        majorDetail={majorDetail}
        handleChange={handleChange}
        majorGroup={majorGroup}
      /> */}
    </>
  );
};
export default ModalEditMajorContainer;
