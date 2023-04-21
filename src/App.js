import { Breadcrumb, Layout, Menu, theme, Col, Row} from 'antd';
import Dashboard from './variable_components/Dashboard';

const { Header, Content, Footer } = Layout;
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header className='header' style={{backgroundColor: '#449386', height:'8vh'}}>
        <div className="logo" />
        <Menu xs={8} sm={16} md={24} lg={32} className='header_menu' defaultSelectedKeys={['1']} mode="horizontal" style={{backgroundColor: '#449386', color:'white', fontfamily: 'Open Sans, sans-serif', fontSize:'20px'}}>
                            <Menu.Item key="1"><span>Dashboard</span></Menu.Item>
                            <Menu.Item key="2"><span>Hometest</span></Menu.Item>
                            <Menu.Item key="3"><span>Results</span></Menu.Item>
        </Menu>
      </Header>
      
      <Content span={24} style={{backgroundColor: 'white', height:'84vh'}}>
          <Dashboard></Dashboard>
      </Content>

      <Footer style={{textAlign: 'center', alignContent:'center', backgroundColor: '#449386', height:'8vh'}} xs={8} sm={16} md={24} lg={32} span={24}>
        <Col  style={{color: 'white', fontfamily: 'Open Sans, sans-serif', fontSize:'18px', margin:'-4px 0px 8px 0px'}}>888-LAB-8082 | 229 49 Street, Brooklyn, NY - 11220 | www.empirecitylabs.com</Col>
        <Col  style={{color: 'white', fontfamily: 'Open Sans, sans-serif', fontSize:'16px'}}>&copy; {new Date().getFullYear()} Empire City Laboratories</Col>
      </Footer>
    </Layout>
  );
};

export default App;