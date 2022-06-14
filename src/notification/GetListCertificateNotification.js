import { notification } from 'antd';

export const handleNotification = (status) => {
  if (status === 'success') {
    notification.success({
      message: 'Truy vấn thành công!',
      description: `Lấy danh sách chứng chỉ thành công`
    });
  } else if (status === 'error') {
    notification.error({
      message: 'Truy vấn thất bại!',
      description: `Lấy danh sách chúng chỉ thất bại`
    });
  }
};