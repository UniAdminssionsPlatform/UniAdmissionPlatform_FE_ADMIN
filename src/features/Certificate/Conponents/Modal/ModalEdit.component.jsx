import React from "react";
import { Modal, Form, Input } from "antd";
import SingleUploadWithPreviewContainer from '../UploadImage/SingleUploadWithPreview.container';
import { useState } from "react";

const ModalEditCertificteConponent = (props) => {
  const { visibleEdit, confirmLoading, handleCancel, onFinish, certificate, imgeUrl, setImageUrl } = props;

  const field = [
    {
      name: ['thumbnailUrl'],
      value: certificate?.thumbnailUrl
    },
    {
      name: ['description'],
      value: certificate?.description
    },
    {
      name: ['name'],
      value: certificate?.name
    },
  ];

  return (
    <>
      <Modal
        title="Chỉnh sửa"
        visible={visibleEdit}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okButtonProps={{ form: "edit-form", key: "submit", htmlType: "submit" }}
        okText="Lưu"
        cancelText="Đóng"
      >
        <Form name="edit" id="edit-form" onFinish={onFinish} fields={field}>
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
            <SingleUploadWithPreviewContainer imgeUrl={imgeUrl} setImageUrl={setImageUrl} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default ModalEditCertificteConponent;
