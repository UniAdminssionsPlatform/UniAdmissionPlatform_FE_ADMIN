import {Button, Result} from 'antd';
import {useSelector} from 'react-redux';
import React, {useMemo} from 'react';
import {useNavigate} from "react-router-dom";
import {PATH} from "../constants/Paths/Path";

const ErrorPage = ({code = 404}) => {
    const {isAuthUser} = useSelector((state) => state.authentication);
    const navigate = useNavigate();
    const subTitlte = useMemo(() => {
        switch (code) {
            case 403:
                return 'Sorry, You can not access this page.';
            case 404:
                return 'Sorry, The page you visit does not exist.';
            case 500:
                return 'Sorry, something went wrong';
            default:
                return 'Sorry, something went wrong.';
        }
    }, [code]);
    return (
        <div className='page' style={{marginTop: '10rem'}}>
            <Result
                status={code}
                title={code}
                subTitle={subTitlte}
                extra={[
                    <Button
                        className='main-button'
                        onClick={() => {
                            navigate(PATH.LOGIN)
                        }}
                        type='default'
                        style={{width: '10rem'}}>
                        Back to Home
                    </Button>,
                    !isAuthUser ? (
                        <Button
                            className='main-button'
                            onClick={() => {
                                navigate(PATH.LOGIN);
                            }}
                            type='primary'
                            style={{width: '10rem'}}
                            danger>
                            Login now
                        </Button>
                    ) : null
                ]}
            />
        </div>
    );
};
export default ErrorPage;
