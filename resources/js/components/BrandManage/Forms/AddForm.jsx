import ImgCrop from "antd-img-crop";
import { Form, Input, Button, Spin, Upload, message } from "antd";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../../redux/actions/data";
import { hideDrawer } from "../../../redux/actions/drawer";
import dashboardService from "../../../services/dashboard.service";
import API_URL from "../../../services/API";

const AddForm = (props) => {
    const [loading, setLoading] = useState(false);
    const [fileList, setFileList] = useState([]);
    const [form] = Form.useForm();
    const editId = useSelector((state) => state.drawer.id);
    const showDrawer = useSelector((state) => state.drawer.show);
    const dispatch = useDispatch();
    const initialData = useSelector(
        (state) => state.data.data.filter((data) => data.id === editId)[0]
    );

    const uploadProps = {
        action: `${API_URL}file/upload`,
        listType: "picture-card",
        fileList: fileList,
        beforeUpload: (file) => {
            const newFileName =
                file.uid + "_" + file.lastModified + "_" + file.name;
            const newFile = new File([file], newFileName, { type: file.type });
            return newFile;
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
        onRemove: ({ name }) => {
            dashboardService.delUpload({ filename: name });
        },
    };

    useEffect(() => {
        if (showDrawer === true) {
            // dispatch(getData());
            form.resetFields();
            setFileList([]);
            try {
                if (editId !== 0) {
                    form.setFieldsValue(initialData);
                    setFileList([
                        {
                            uid: "-1",
                            name: initialData.image1,
                            status: "done",
                            url: `${API_URL}uploads/${initialData.image1}`,
                        },
                        {
                            uid: "-2",
                            name: initialData.image2,
                            status: "done",
                            url: `${API_URL}uploads/${initialData.image2}`,
                        },
                        {
                            uid: "-3",
                            name: initialData.image3,
                            status: "done",
                            url: `${API_URL}uploads/${initialData.image3}`,
                        },
                    ]);
                }
            } catch {}
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editId, showDrawer]);
    const handleAdd = async (value) => {
        if (fileList.length < 3) {
            message.warning("Select 3 images!");
        } else {
            setLoading(true);
            let payload = value;
            payload.image1 = fileList[2].name;
            payload.image2 = fileList[1].name;
            payload.image3 = fileList[0].name;
            if (editId !== 0) {
                payload = { ...payload, id: editId };
            }
            try {
                await dispatch(addData("brand", payload, editId !== 0));
                dispatch(hideDrawer());
                setLoading(false);
            } catch {
                setLoading(false);
            }
        }
    };
    return (
        <Spin spinning={loading}>
            <div className="my-10">
                <Form
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={handleAdd}
                    form={form}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Please input name!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label="Images" name="image">
                        <ImgCrop rotationSlider>
                            <Upload {...uploadProps}>
                                {fileList.length < 3 && "+ Upload"}
                            </Upload>
                        </ImgCrop>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Spin>
    );
};

export default AddForm;
