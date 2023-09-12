import React, { Component } from "react";
import { connect } from 'react-redux';
import { toggleExpand } from '../../redux/actions';
import "./chatList.css";
import ChatListItems from "./ChatListItems";
import Nav from "../nav/Nav"
import UserProfile from "../userProfile/UserProfile";

class ChatList extends Component {
  allChatUsers = [
    {
      image:
        "https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg",
      id: 1,
      name: "Henry Boyd",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://www.bnl.gov/today/body_pics/2017/06/stephanhruszkewycz-hr.jpg",
      id: 2,
      name: "Martha Curtis",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      id: 3,
      name: "Phillip Tucker",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://www.harleytherapy.co.uk/counselling/wp-content/uploads/16297800391_5c6e812832.jpg",
      id: 4,
      name: "Christine Reid",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww&w=1000&q=80",
      id: 5,
      name: "Jerry Guzman",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://cdn-ajggd.nitrocdn.com/kMoOFpDlsOVtlYJLrnSRNCQXaUFHZPTY/assets/images/optimized/rev-814242f/wp-content/uploads/2023/08/smile-stefan-stefancik.jpeg",
      id: 6,
      name: "Russell Williams",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://www.kasualapp.com/wp-content/uploads/2022/05/smiling-woman-in-shallow-focus-photography-photo.jpg",
      id: 7,
      name: "Hasan Mcculloch",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://www.widsmob.com/wp-content/uploads/2021/04/picture-puppy.jpg",
      id: 8,
      name: "Autumn Mckee",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://likewisestage.blob.core.windows.net/images/adbe7230-5587-43e5-96fe-3ce863f25e88/photo.jpg",
      id: 9,
      name: "Allen Woodley",
      active: false,
      isOnline: true,
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEgIfnqPb-pTJ7DDPeFpsKxAQ-nIqmBcHscf2Bbibs83OtvWYT0QAp56aNUOvldwWkp08&usqp=CAU",
      id: 10,
      name: "Manpreet David",
      active: false,
      isOnline: true,
    },
  ];

  archivedChatUsers = [
    {
      image:
        "https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg",
      id: 11,
      name: "John Doe",
      active: false, 
      isOnline: false,
    },
    
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
      archivedChats: this.archivedChatUsers,
      isExpanded: false,
    };
  }

  toggleChatList = () => {
    this.props.toggleExpand();
  };

  toggleArchivedChats = () => {
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded,
    }));
  };

  render() {
    const { isExpanded } = this.props;

    const activeConversationsCount = this.state.allChats.filter((chat) => chat.active).length;
    return (
      <div className="main__chatlist">
        <Nav />
        <UserProfile />
        <div className="chatlist__heading">
          <h4>Active Conversations</h4>
          <div className="active-conversations-badge">{activeConversationsCount}</div>
          <button className="btn-nobg" onClick={this.toggleChatList}>
            <i style={{ color: "black", fontSize: "15px" }} className={`fa ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
          </button>
        </div>
        {isExpanded && (
          <div className="chatlist__items">
            {this.state.allChats.map((item, index) => {
              return (
                <ChatListItems
                  name={item.name}
                  key={item.id}
                  active={item.active ? "active" : ""}
                  isOnline={item.isOnline ? "active" : ""}
                  image={item.image}
                />
              );
            })}
          </div>)}
        <div className="demo_Archived">
          <h4>Archived Conversations</h4>
          <div className="active-conversations-badge">
            {this.state.archivedChats.length}
          </div>
          <button className="btn-nobg" onClick={this.toggleArchivedChats}>
            <i
              style={{ color: "black", fontSize: "15px" }}
              className={`fa ${
                this.state.isExpanded ? "fa-chevron-up" : "fa-chevron-down"
              }`}
            ></i>
          </button>
        </div>
        {this.state.isExpanded && (
          <div className="chatlist__items">
            {this.state.archivedChats.map((item, index) => {
              return (
                <ChatListItems
                  name={item.name}
                  key={item.id}
                  active={item.active ? "active" : ""}
                  isOnline={item.isOnline ? "active" : ""}
                  image={item.image}
                />
              );
            })}
          </div>
        )}
        
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isExpanded: state.isExpanded,
});

const mapDispatchToProps = {
  toggleExpand,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);