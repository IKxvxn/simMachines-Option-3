import React, { Component } from 'react';
import { Layout } from 'antd';
import * as style from './style/componentsStyle' 
import Table from './components/table'
import 'antd/dist/antd.css';  

const { Header, Footer, Content } = Layout;
//Simple react application
class App extends Component {
  render() {
    return (
      <div>
        {/*Ant desing provides an easy way to define the layout of the page*/}
        <Layout>
          <Header style={style.layoutHeaderAndFooter}>Option #3 - Web Demo</Header>
          <Content style={style.layoutContent}>
            {/*Here the table component is called. No props are required*/}
            <Table/>
          </Content>
          <Footer style={style.layoutHeaderAndFooter}>Kevin Arias Chinchilla - simMachines</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
