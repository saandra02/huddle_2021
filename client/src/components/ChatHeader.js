import React, { Component } from 'react';
import { FaVideo } from 'react-icons/fa';

class ChatHeaderCustom extends Component {
    state = {
        title: null,
        date: null,
        time: null
    }

    HandleClick = () =>{
        if(this.props.people.length === 2){
            window.open('/video', '_blank');
        } else {
            alert("Video call is currently supported only for two participants!");  
        }
    }

    render() {
        console.log(this.props);
        if(this.props.last_message){
            var date_num = new Date(this.props.last_message.created.slice(0, 10));
            var date_arr = date_num.toDateString().split(' ');
            var date = date_arr[2] + ' ' + date_arr[1] + ' ' + date_arr[3];
            var time = this.props.last_message.created.slice(11, 16);
            document.getElementById("chat-subtitle").innerHTML = "Last Active on " + date + " at " + time;
        }
        return(
            <div className="chat-title-container">
            <div className="chat-title">
                {this.props.title}
                <span onClick={this.HandleClick} id="video-button" className="video-button">
                <FaVideo/>
                </span>
            </div>
            <div id="chat-subtitle" className="chat-subtitle"> 
            Last Active
            </div>
            </div>
          );   
    }
}

export default ChatHeaderCustom;
