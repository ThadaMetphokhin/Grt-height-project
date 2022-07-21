import './facelogin.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FacebookLogin from 'react-facebook-login';
import { Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';
export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: '',
  };

  responseFacebook = (response) => {
    console.log(response);

    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
    });
  };

  componentClicked = () => console.log('กดแล้วจ้า');

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: 'auto',
            margin: 'auto',
            background: '#f4f4f4',
            padding: '20px',
          }}
        >
          <span>
            <img
              className="img-fluid"
              src={this.state.picture}
              alt={this.state.name}
            />
          </span>
          <p>ชื่อคุณลูกค้า: {this.state.name}</p>
          <p>อีเมล์ของคุณ: {this.state.email}</p>
          <Button
            variant="danger"
            onClick={() => {
              console.log('out');
            }}
          >
            ออกจากระบบ
          </Button>
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          icon={
            <img
              alt="Facebook Login"
              width="25"
              height="25"
              style={{ marginLeft: '-10px' }}
              src="https://cdn-icons.flaticon.com/png/512/3670/premium/3670032.png?token=exp=1657737479~hmac=bbe5d309656ead9475a043f8cd33c33e"
            />
          }
          appId="1429423900840505"
          textButton=" เข้าสู่ระบบด้วย Facebook"
          autoLoad={true}
          fields="name,email,picture"
          cssClass="setfacelogin"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }

    return <div>{fbContent}</div>;
  }
}
