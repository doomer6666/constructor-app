import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
const props = {
  beforeUpload: (file) => {
    const isPNG = true;
    if (!isPNG) {
      message.error(`${file.name} is not a image file`);
    }
    return isPNG || Upload.LIST_IGNORE;
  },
  onChange: (info) => {
    console.log(info.fileList);
  },
};
const UploadComponent = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>Загрузите изображение</Button>
  </Upload>
);
export default UploadComponent;
