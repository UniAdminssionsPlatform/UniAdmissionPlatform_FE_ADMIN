import { notification } from 'antd';

export const handleNotification = (status) => {
  if (status === 'success') {
    notification.success({
      message: 'Truy vấn thành công!',
      description: `Tạo chứng chỉ thành công`
    });
  } else if (status === 'error') {
    notification.error({
      message: 'Truy vấn thất bại!',
      description: `Tạo chứng chỉ thất bại`
    });
  }
};