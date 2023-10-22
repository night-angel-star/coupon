import React from "react";
import { Upload, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import API_URL from "../../services/API";
export const AdvertisementManage = () => {
    const level = useSelector((state) =>
        state.auth.isLoggedIn ? state.auth.user.level : {}
    );
    const [fileList, setFileList] = React.useState([
        {
            uid: "-2",
            name: "advertisement1.jpg",
            status: "done",
            url: `${API_URL}uploads/advertisement1.jpg`,
        },
        {
            uid: "-3",
            name: "advertisement2.jpg",
            status: "done",
            url: `${API_URL}uploads/advertisement2.jpg`,
        },
        {
            uid: "-4",
            name: "advertisement3.jpg",
            status: "done",
            url: `${API_URL}uploads/advertisement3.jpg`,
        },
    ]);
    const uploadProps = {
        action: `${API_URL}file/upload`,
        listType: "picture-card",
        fileList: fileList,
        beforeUpload: (file) => {
            const isJPG =
                file.type === "image/jpg" || file.type === "image/jpeg";
            if (!isJPG) {
                message.error(`${file.name} is not a jpg file`);
            } else {
                const newFileName =
                    "Advertisement" + (fileList.length + 1) + ".jpg";
                const newFile = new File([file], newFileName, {
                    type: file.type,
                });
                return newFile;
            }
            return isJPG || Upload.LIST_IGNORE;
        },
        onChange: ({ fileList: newFileList }) => {
            setFileList(newFileList);
        },
        onPreview: async (file) => {
            let src = file.url;
            if (!src) {
                src = await new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file.originFileObj);
                    reader.onload = () => resolve(reader.result);
                });
            }
            const image = new Image();
            image.src = src;
            const imgWindow = window.open(src);
            imgWindow?.document.write(image.outerHTML);
        },
    };
    const uploadButton = (
        <div>
            {" "}
            <PlusOutlined />{" "}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                {" "}
                Upload{" "}
            </div>{" "}
        </div>
    );
    return (
        <>
            {level === 1 ? (
                <Upload {...uploadProps}>
                    {fileList.length >= 3 ? null : uploadButton}
                </Upload>
            ) : (
                <></>
            )}{" "}
        </>
    );
};
