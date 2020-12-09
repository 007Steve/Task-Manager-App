import React from "react";
import "../styles/Card.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FlagIcon from "@material-ui/icons/Flag";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import AttachFileIcon from "@material-ui/icons/AttachFile";

function Card() {
  return (
    <div className="card">
      <div className="card-title-container">
        <h4 className="card-title">Topic </h4>
        <MoreHorizIcon className="card-more card-icons" />
      </div>
      <p className="card-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
      </p>
      <div className="card-icons-container">
        <FlagIcon style={{ fontSize: 20 }} className="card-icons" />
        <ChatBubbleIcon style={{ fontSize: 20 }} className="card-icons" />
        <AttachFileIcon style={{ fontSize: 20 }} className="card-icons" />
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHeZuu5PGQzYw/profile-displayphoto-shrink_200_200/0/1600449353015?e=1613001600&v=beta&t=IynkjyVYywicpR9q8TkLMVaqDQwVtlZJElfklKBp62I"
          alt=""
        />
      </div>
    </div>
  );
}

export default Card;
