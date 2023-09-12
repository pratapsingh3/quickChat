import React, { Component } from "react";
import { FaReact } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { RiChatDeleteLine } from "react-icons/ri";
import "./userAnalysis.css";


class UserAnalysis extends Component {
  render() {
    const weeklyData = [
      { day: "Mon", value: 40 },
      { day: "Tue", value: 90 },
      { day: "Wed", value: 50 },
      { day: "Thu", value: 70 },
      { day: "Fri", value: 50 },
      { day: "Sat", value: 60 },
      { day: "Sun", value: 30 },
    ];

    const maxBarHeight = Math.max(...weeklyData.map((data) => data.value)) + 10;

    return (
      <>
        <div className="activity_card2">
          <div className="icon-grid ">
            <div className="grid-item purple">
              <div className="icon-text">
                <BiTimeFive size={20} className="purple-color"/>
                <div className="text-block">
                  <p className="purple-color">13h</p>
                  <p className="grey">Time</p>
                </div>
              </div>
            </div>
            <div className="grid-item green">
              <div className="icon-text">
                <BsPeople size={20} className="green-color"/>
                <div className="text-block">
                  <p className="green-color">188</p>
                  <p className="grey">Atendeed</p>
                </div>
              </div>
            </div>
            <div className="grid-item pink">
              <div className="icon-text">
                <SlCalender size={20} className="pink-color"/>
                <div className="text-block">
                  <p className="pink-color">119</p>
                  <p className="grey">Meetings</p>
                </div>
              </div>
            </div>
            <div className="grid-item red">
              <div className="icon-text">
                <RiChatDeleteLine size={20} className="red-color"/>
                <div className="text-block">
                  <p className="red-color">41</p>
                  <p className="grey">Rejected</p>
                </div>
              </div>
            </div>
          </div>
          <div className="labels">
            <div className="left-label">Current Week</div>
            <div className="right-label">Activity</div>
          </div>
          <div className="bar-graph">
            {weeklyData.map((dayData, index) => (
              <div className="bar-container" key={index}>
                <p className="day-label" style={{marginTop: dayData.value + 10 + "px"}}>{dayData.day}</p>
                <div
                  className="bar"
                  style={{
                    height: dayData.value  + "px",
                    marginTop: -dayData.value - 30 + "px",
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default UserAnalysis;
