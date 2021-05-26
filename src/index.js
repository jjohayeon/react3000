import React from 'react';
import ReactDOM from 'react-dom';

function formatDate(date){
  return date.toLocaleDateString();
}

function Avatar(props){
  return(
    <img src={props.user.avatarUrl} alt={props.user.name}/>
  )
}

function UserInfo(props){
  return(
    <div className="UserInfo">
      <Avatar user={props.user}></Avatar>
      <div>{props.user.name}</div>
    </div>
  )
}

function Comment(props){
  return(
    <div className="Comment">
      <UserInfo user={props.author}/>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-text">{formatDate(props.date)}</div>
    </div>
  )
}

const comment={
  date: new Date(),
  text: "오늘 밥 뭐먹으깡?",
  author: {
  name: "jjohayeon",
  avatarUrl: "http://jjohayeon.dothome.co.kr/portfolio/assets/img/aboutImg01@2x.jpg"
  }
}


ReactDOM.render(<Comment date={comment.date} text={comment.text} author={comment.author}/>, document.getElementById("root"));