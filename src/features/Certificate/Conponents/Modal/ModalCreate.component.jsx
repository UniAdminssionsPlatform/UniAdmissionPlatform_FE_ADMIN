import React from "react";
import { Modal, Form, Input } from "antd";
import SingleUploadWithPreviewContainer from '../UploadImage/SingleUploadWithPreview.container';
import { useState } from "react";

const ModalCreateCertificteConponent = (props) => {
  const { visibleCreate, confirmLoading, handleCancel, onFinish, imgeUrl, setImageUrl } = props;

  
  return (
    <>
      <Modal
        title="Tạo chứng chỉ"
        visible={visibleCreate}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okButtonProps={{ form: "edit-form", key: "submit", htmlType: "submit" }}
        okText="Lưu"
        cancelText="Đóng"
      >
        <Form name="edit" id="edit-form" onFinish={onFinish} >
          <lable>Tên chứng chỉ</lable>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Tên chứng chỉ đang trống",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <lable>Mô tả</lable>
          <Form.Item
            name="description"
            rules={[
              {
                required: true,
                message: "Mô tả đang trống",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <lable>Hình ảnh</lable>
          <Form.Item name="thumbnailUrl">
            <SingleUploadWithPreviewContainer setImageUrl={setImageUrl} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default ModalCreateCertificteConponent;
