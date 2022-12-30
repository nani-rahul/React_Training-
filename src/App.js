import {React} from 'react';
import './App.css';
import styled from 'styled-components';
import { Layout, Typography,Image, Space,Col,Row,Menu} from 'antd';
import { useNavigate, Outlet } from 'react-router-dom';

const {Header , Content ,Sider} = Layout;

const App = () => {
  const navigate = useNavigate();
  const onMenuItemSelect = ({item ,key ,keyPath ,selectedKeys,domEvent}) =>{
      switch(key){
        case "Movies":
          navigate('/table')
        break;
        case "New Movie":
          navigate('/form')
        break;
      }
  }

  return (
    
    <Layout>
      <Header>
        <Row>
          <Col>
            <Space>
               <Image width ={32} height={32 }src ='./logo192.png'/>
               <Typography.Text style = {{color:"white"}}> Codex </Typography.Text>
            </Space>
         </Col>
       </Row>
        
      </Header>
    
        <Layout style = {{height:'100vh'}}>
          <Sider>
            <Menu
            onSelect={onMenuItemSelect}
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={[{key:"Movies" ,label:"Movies"},{key:"New Movie",label:"New Movie"}]}
          />
          </Sider>  
        <Content>
          <Outlet/>
        </Content>
       
      </Layout>
    </Layout>
  );
}
export default App;



// import React, { Component } from 'react';
// import 'antd/dist/reset.css';
// import './App.css';
// import { Table, Tabs } from 'antd';
// import styled from 'styled-components';
// import Moviestable from './Moviestable';
// import Myform from './Myform';


// const Container = styled.div`
//   margin: 30px;
// `;
// const App = () => (
//   <Container>
//     <Tabs
//       defaultActiveKey="1"
//       items={[
       
//         {
//           label: `Table`,
//           key: '1',
//           children: <Moviestable />,
//         },
//         {
//           label: `form`,
//           key: '2',
//           children: <Myform />,
//         },
//       ]}
//     />
//   </Container>
// );
// export default App;
