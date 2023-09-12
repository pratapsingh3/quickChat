import React, { Component, useState, createRef, useEffect } from "react";

import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      image:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp",
      type: "",
      msg: "Hi Henry, How's you?",
    },
    {
      key: 2,
      image:
        "https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg",
      type: "other",
      msg: "I am gud.",
    },
    {
      key: 3,
      image:
        "https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg",
      type: "other",
      msg: "Wht about u?",
    },
    {
      key: 4,
      image:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp",
      type: "",
      msg: "I'm fine",
    },
    {
      key: 5,
      image:
        "https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg",
      type: "other",
      msg: "Lets meet",
    },
    {
      key: 6,
      image:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp",
      type: "",
      msg: "Sure",
    },
    {
      key: 7,
      image:
        "https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg",
      type: "other",
      msg: "Lets meet this weekend",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        if (this.state.msg != "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            image:
              "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp",
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image="https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg"
              />
              <p>Henry Boyd</p>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
              <i className="fa fa-plus"></i>
            </button>
            <input
              type="text"
              placeholder="Type a message here"
              onChange={this.onStateChange}
              value={this.state.msg}
              className="chat-input"
            />
            <button className="btnSendMsg" id="sendMsgBtn">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
