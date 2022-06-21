import { notification } from "antd";

export const handleUpdateSuccessNotification = (msg) => {
  notification.success({
    message: msg,
    description: `Tạo thành công thẻ mới !`,
  });
};
export const handleUpdateFailNotification = (msg) => {
  notification.error({
    message: msg,
    description: `Tạo thất bại !`,
  });
};
