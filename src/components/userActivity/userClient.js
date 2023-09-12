import React, { Component } from 'react';
import './userClient.css'
import { AiOutlineLink } from "react-icons/ai";

class UserClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Share the link with prospects and discuss all stuff'
    };
  }

  handleClick = () => {
    this.setState({ message: 'Link Copied' });
  }

  render() {
    return (
      <div className='activity_card'>
        <h3>Onboard Clients</h3>
        <p>{this.state.message}</p>
        <button onClick={this.handleClick}><AiOutlineLink fontSize="small" size="20"/>Copy Link</button>
      </div>
    );
  }
}

export default UserClient;
