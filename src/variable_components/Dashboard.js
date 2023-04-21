import { LockOutlined, UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Avatar} from 'antd';


const Dashboard = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div
    className="site-layout-content"
    style={{backgroundColor:'#449386', height:'45vh', width:'30vw', margin:'18vh auto', borderRadius:'0px 120px / 120px'}}>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish} style={{maxWidth:'400px', margin:'100px auto'}}
    >
      <div style={{textAlign:'center', margin:'-170px 0 50px 0'}}><Avatar size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} src={'https://srv2.imgonline.com.ua/result_img/imgonline-com-ua-ReplaceColor-RoJa3biuqmdXOmO.png'}/></div>
      <div style={{color:'white', textAlign:'center', margin:'20px'}}><label style={{fontfamily: 'Open Sans, sans-serif', fontSize:'22px'}}>Welcome to Empire City Laboratories!</label></div>
      
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>   
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" style={{float:'left', width:'100%'}}>
          Log in
        </Button>
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox style={{float:'left', fontfamily: 'Open Sans, sans-serif', color:'white'}}>Remember me</Checkbox>
        </Form.Item>
        <a className="login-form-forgot" href="" style={{float:'right', fontfamily: 'Open Sans, sans-serif', color:'white'}}>
          Forgot password?
        </a>
      </Form.Item>
    </Form>
    </div>
  );
};
export default Dashboard;