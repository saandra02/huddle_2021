import { ChatEngine } from 'react-chat-engine';
import ChatHeaderCustom from './ChatHeader.js';

function Chats() {
    if(!sessionStorage.getItem('username')){
      window.location.href = '/#/';
      return <div/>;
    }
    function LogOut (){
      sessionStorage.removeItem("username");
      sessionStorage.removeItem("password");
      window.location.href = '/#/';
    }
    return(
    <div className="chat-container">
      <button className="log-out-button" onClick={LogOut}>
        Log Out
      </button>
      <ChatEngine
      height = "89.75vh"
      projectID = "a6d8680f-e736-48dd-8d7f-ab79b785f47a"
      userName = {sessionStorage.getItem('username')}
      userSecret = {sessionStorage.getItem('password')}
      renderChatHeader = {(chat)=> <ChatHeaderCustom {...chat} />}
      />
    </div>
  );
}

export default Chats;
