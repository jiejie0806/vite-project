
import './index.scss';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

type FieldType = {
    username?: string;
    password?: string;
};

const Login = () => {
    const navigate = useNavigate();

    const onFinish = (values: FieldType) => {
        console.log(values);

        //token用户的唯一标准 
        // 登录后端会在数据库生成一串字符，存在数据库中
        // 前端拿到token，存储在cookies

        navigate('/layout/home');
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log(errorInfo, 'errorInfo');
    }

    return (
        <div className="login-container">
            <div className="form">
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' },
                        ]}
                    >
                        <Input placeholder='请输入用户名' />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder='请输入密码' />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit" block>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Login;