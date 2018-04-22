import React from 'react';
import { Modal, Button, Row, Col } from 'antd';
import Graph from './graph'

export class modal extends React.Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>Details</Button>
        <Modal
          /*Here the dynamic name of the modal is built up - also verifies the person gender*/
          title={this.props.row.first_name+" "+this.props.row.last_name+" "+(this.props.row.gender==="Male" ? "👨":"👩")}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer = {[
            <Row type="flex" justify="end">
                <Col xs={12} sm={7}><Button type="primary"  onClick={this.handleCancel}>OK</Button></Col>
            </Row>
          ]}
        >
          <Row type="flex" justify="space-around">
                <Col xs={24} sm={14}><p><b><span role="img" aria-labelledby="email-emoji">📧</span> Email: </b>{this.props.row.email}</p></Col>
                <Col xs={24} sm={10}><p><b><span role="img" aria-labelledby="ip-emoji">🌐</span> IP Address: </b>{this.props.row.ip_address}</p></Col>
          </Row>
          <Graph grap={this.props.grap}/>
        </Modal>
      </div>
    );
  }
}

export default modal