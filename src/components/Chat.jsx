import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";
import { useSelector } from "react-redux";
// import EmojiPicker from "emoji-picker-react";

import "./chat.scss";
const host = "http://localhost:8080";

function Chat() {
  const [mess, setMess] = useState([]);
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [id, setId] = useState();
  const socketRef = useRef();
  const user = useSelector(({ user }) => user);
  const { userId = "", token = "" } = user || {};
  useEffect(() => {
    const getChat = async () => {
      const result = await fetch(`${host}/chats`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      const data = await result.json();
      console.log(data);
      setMess(data.data);
    };
    getChat();
  }, [token]);
  useEffect(() => {
    socketRef.current = socketIOClient.connect(host);

    socketRef.current.on("getId", (id) => {
      console.log("id", id);
      setId(id);
    });

    socketRef.current.on("sendData", (dataGot) => {
      console.log(dataGot);
      setMess((oldMsgs) => [...oldMsgs, dataGot.data]);
    });
    socketRef.current.on("typing", (dataGot) => {
      console.log(dataGot);
      setIsTyping(dataGot.data.userId !== userId && dataGot.data.status);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [userId]);
  const sendMessage = () => {
    if (message) {
      const msg = {
        content: message,
        userId,
        id: id,
      };
      socketRef.current.emit("sendData", msg);
      setMessage("");
    }
    const data = {
      status: false,
      userId,
    };
    socketRef.current.emit("typing", data);
    return;
  };
  const handleChange = (e) => {
    setMessage(e.target.value);
    if (!e.target.value) {
      const data = {
        status: false,
        userId,
      };
      socketRef.current.emit("typing", data);
      return;
    }
    const data = {
      status: true,
      userId,
    };
    socketRef.current.emit("typing", data);
  };
  const renderMess = mess.map((m, index) => (
    <div key={index} className={`${m.userId === userId && "your-box"}`}>
      <div className={`${m.userId === userId ? "your-mess" : "other-mess"}`}>
        {m.content}
      </div>
    </div>
  ));
  return (
    <div className="chat-page">
      <div className="chat-line">{renderMess}</div>
      <div className="typing">
        <i>{isTyping && "Someone is typing..."} </i>
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={message}
          placeholder="Nhập tin nhắn ..."
          onChange={(e) => handleChange(e)}
        />
        {/* <EmojiPicker /> */}
        <button onClick={() => sendMessage()}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
