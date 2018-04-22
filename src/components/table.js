import React from 'react';
import { Table } from 'antd';
import Modal from './modal'

/*The datasets are stored in vars in order to use them*/
var tableData = require('../db/tabledata.json');
var tableGrap = require('../db/graphic.json');

/*Ant desing tables requires a "key" to be able to indentify each row*/
for (var x in tableData) {
    tableData[x].key = tableData[x].id
}

/*Also requires the table model (title = how the name will be displayed & dataIndex = how is called the index inside the JSON tableData)*/
const columns = [{
  title: 'First Name',
  dataIndex: 'first_name',
}, {
  title: 'Last Name',
  dataIndex: 'last_name',
}, {
  title: 'Gender',
  dataIndex: 'gender',
  width: "5rem",
}, {
  title: 'Email',
  dataIndex: 'email',
}, {
  title: 'IP Address',
  dataIndex: 'ip_address',
}, {
  title: 'Actions',
  /*The modal itself is called in this way, the clicked row is provided as a prop besides the graph info*/
  render: (row) => <Modal row={row} grap={tableGrap[row.key-1]}/>,
  fixed: 'right',
  width: "5rem",
}];

export class table extends React.Component {

  render() {
    return (
      <Table columns={columns} dataSource={tableData} size= "middle" scroll={{ x: "50rem"}} pagination={{ pageSize: 9 }}/>
    );
  }
}

export default table
