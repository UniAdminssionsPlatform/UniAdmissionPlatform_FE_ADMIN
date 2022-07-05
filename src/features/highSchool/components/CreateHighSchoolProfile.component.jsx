import React, { useEffect, useState } from "react";
import { Button, Form, Image, Input, Tooltip, Select } from "antd";
import MarkdownEditorComponent from "../../../components/commons/MarkdownEditor/MarkdownEditor.component";
import Label from "../../../components/commons/Label/Label.component";
import { InfoCircleOutlined, PhoneOutlined } from "@ant-design/icons";
import SingleUploadWithPreviewContainer from "../../../components/commons/UploadImage/SingleUploadWithPreview.container";

const CreateHighSchoolProfileComponent = (props) => {
  const {
    onChangeProvince,
    provinces,
    onChangeDistricts,
    isDisableDistrict,
    districts,
    onFinish,
    setImageUrl,
    setThumbnail,
    value,
    setValue,
  } = props;
  const { Option } = Select;

  return (
    <>
      <div className="rounded-xl md:border md:border-neutral-100 dark:border-neutral-800 md:p-6">
        <Form className="grid md:grid-cols-2 gap-6" onFinish={onFinish}>
          <div className="grid md:grid-cols-3 gap-6 block md:col-span-2">
            <label className="block">
              <Label>Tên *</Label>
              <Form.Item name="name">
                <Input
                  placeholder="Trường THPT Chu Văn An,..."
                  type="text"
                  className="mt-1"
                  suffix={
                    <Tooltip title="Bắt buộc nhập tên">
                      <InfoCircleOutlined
                        style={{ color: "rgba(0,0,0,.45)" }}
                      />
                    </Tooltip>
                  }
                />
              </Form.Item>
            </label>
            <label className="block">
              <Label>Địa chỉ</Label>
              <Form.Item name="address">
                <Input
                  placeholder="Tỉnh/Thành Phố, Phường/Xã, Quận/Huyện,..."
                  type="text"
                  className="mt-1"
                />
              </Form.Item>
            </label>
            <label className="block">
              <Label>Số điện thoại</Label>
              <Form.Item name="phoneNumber">
                <Input
                  placeholder="039..."
                  type="text"
                  className="mt-1"
                  prefix={<PhoneOutlined className="site-form-item-icon" />}
                  suffix={
                    <Tooltip title="Số điện thoại bao gồm 10-11 số và không có dấu cách">
                      <InfoCircleOutlined
                        style={{ color: "rgba(0,0,0,.45)" }}
                      />
                    </Tooltip>
                  }
                />
              </Form.Item>
            </label>
          </div>

          <div className="mt-1">
            <div className="block">
              <div>
                <Label>Ảnh đại diện</Label>
              </div>
              <div>
                <SingleUploadWithPreviewContainer setImageUrl={setImageUrl} />
              </div>
            </div>
          </div>

          <div className="mt-1">
            <div className="block">
              <div>
                <Label>Ảnh bìa</Label>
              </div>
              <SingleUploadWithPreviewContainer setImageUrl={setThumbnail} />
            </div>
          </div>

          <div className="mt-1">
            <label className="block">
              <Label>Mô tả ngắn</Label>
              <Form.Item name="shortDescription">
                <Input type="text" className="mt-1" />
              </Form.Item>
            </label>
          </div>
          <label className="block ">
            <div className="grid md:grid-cols-1 gap-6 block md:col-span-2 ">
              <div className="mt-1">
                <label className="block">
                  <Label>Link Website của trường</Label>
                  <Form.Item name="websiteUrl">
                    <Input
                      placeholder="c3chuvanan.edu.vn"
                      type="text"
                      className="mt-1"
                    />
                  </Form.Item>
                </label>
              </div>
            </div>
          </label>

          <label className="block ">
            <div className="mt-1">
              <div className="grid md:grid-cols-3 gap-6 block md:col-span-2 ">
                <label className="block">
                  <Label>Email liên hệ</Label>
                  <Form.Item name="email">
                    <Input
                      type="text"
                      className="mt-1"
                      placeholder="abc@gmail.com"
                      suffix={
                        <Tooltip title="Email phải đúng cú pháp. Ví dụ : abc@gmail.com">
                          <InfoCircleOutlined
                            style={{ color: "rgba(0,0,0,.45)" }}
                          />
                        </Tooltip>
                      }
                    />
                  </Form.Item>
                </label>
                <label className="block">
                  <Label>Code học sinh</Label>
                  <Form.Item name="highSchoolCode">
                    <Input
                      type="text"
                      className="mt-1"
                      placeholder="abc@gmail.com"
                      suffix={
                        <Tooltip title="Mã code để học sinh nhập">
                          <InfoCircleOutlined
                            style={{ color: "rgba(0,0,0,.45)" }}
                          />
                        </Tooltip>
                      }
                    />
                  </Form.Item>
                </label>
                <label className="block">
                  <Label>Code quản lí</Label>
                  <Form.Item name="highSchoolManagerCode">
                    <Input
                      type="text"
                      className="mt-1"
                      placeholder="abc@gmail.com"
                      suffix={
                        <Tooltip title="Mã code để quản lí trường cấp 3 nhập">
                          <InfoCircleOutlined
                            style={{ color: "rgba(0,0,0,.45)" }}
                          />
                        </Tooltip>
                      }
                    />
                  </Form.Item>
                </label>
                <label className="block">
                  <Label>Tỉnh/Thành phố</Label>
                  <Form.Item>
                    <Select
                      showSearch
                      placeholder="Tỉnh/thành phố"
                      optionFilterProp="children"
                      onChange={onChangeProvince}
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {provinces?.map((item) => (
                        <Option value={item.id}>{item.name}</Option>
                      ))}
                    </Select>
                  </Form.Item>
                </label>
                <label className="block">
                  <Label>Quận/huyện</Label>
                  <Form.Item name="districtId">
                    <Select
                      showSearch
                      placeholder="Quận/huyện.."
                      optionFilterProp="children"
                      onChange={onChangeDistricts}
                      disabled={isDisableDistrict}
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {districts?.map((item) => (
                        <Option value={item.id}>{item.name}</Option>
                      ))}
                    </Select>
                  </Form.Item>
                </label>
              </div>
            </div>
          </label>
          <div className="grid md:grid-cols gap-6 block md:col-span-2">
            <label className="block">
              <Label>Nội dung</Label>
              {/* <Form.Item name='description'> */}
              <MarkdownEditorComponent value={value} setValue={setValue} />
              {/* </Form.Item> */}
            </label>
          </div>
          <Button
            className="md:col-span-2"
            htmlType="submit"
            type="primary"
            style={{ borderRadius: 10 }}
          >
            Cập Nhật
          </Button>
        </Form>
      </div>
    </>
  );
};
export default CreateHighSchoolProfileComponent;
