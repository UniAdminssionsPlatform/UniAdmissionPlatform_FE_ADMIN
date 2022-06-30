import {Form, Skeleton} from "antd";
import React, {useEffect, useState} from "react";
import {ListTags} from "../../service/GetTagService";
import TagComponent from "./Components/AdminTag.component";
import {
    handleCreateFailNotification,
    handleCreateSuccessNotification,
} from "../../notification/CreateTagNotification";
import {CreateTag} from "../../service/CreateTagService";
import {
    handleDeleteFailNotification,
    handleDeleteSuccessNotification,
} from "../../notification/DeleteTagNotifification";
import {DeleteTag} from "../../service/DeleteTagService";
import {UpdateTag} from "../../service/UpdateTagService";
import {
    handleUpdateFailNotification,
    handleUpdateSuccessNotification,
} from "../../notification/UpdateTagNotification";

const TagContainer = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    const [tags, setTags] = useState();

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    //UPDATE TAG
    const handleEdit = (request) => {
        let requestUpdate = {
            id: request.id,
            data: {
                name: request.data,
            },
        };
        UpdateTag(requestUpdate)
            .then((result) => {
                window.location.reload();
                handleUpdateSuccessNotification("success");
                getListTags();
                // window.location.reload();
                setIsModalVisible(false);
            })
            .catch((error) => {
                handleUpdateFailNotification("error");
            });
    };

    //DELETE TAG
    const handleDelete = (value) => {
        DeleteTag(value)
            .then((result) => {
                handleDeleteSuccessNotification("success");
                getListTags();
                setIsModalVisible(false);
            })
            .catch((error) => {
                handleDeleteFailNotification("error");
            });
    };

    //CREATE TAG
    const handleCreate = (values) => {
        form.resetFields();

        CreateTag(values)
            .then((result) => {
                handleCreateSuccessNotification("success");
                getListTags();
                setIsModalVisible(false);
            })
            .catch((error) => {
                handleCreateFailNotification("error");
            });
    };

    //GET LIST TAGS

    useEffect(() => {
        getListTags();
    }, []);

    const getListTags = () => {
        ListTags().then((result) => {
            setTags(result.data.data.list);
            setIsLoading(false);
        });
    };

    return (
        <>
            {isLoading ? (
                <Skeleton/>
            ) : (
                <TagComponent
                    tags={tags}
                    handleCreate={handleCreate}
                    handleDelete={handleDelete}
                    showModal={showModal}
                    handleOk={handleOk}
                    handleCancel={handleCancel}
                    handleEdit={handleEdit}
                    isModalVisible={isModalVisible}
                    form={form}
                />
            )}
        </>
    );
};

export default TagContainer;
