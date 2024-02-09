import React, { useState } from "react";
import ChatSideBar from "../Components/ChatSideBar";
import ChatsLeft from "../Components/ChatsLeft";

const Chat = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const toggleSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  return (
    <>
      <section className="flex flex-col lg:flex-row">
        <ChatSideBar openSideBar={openSideBar} />
        <section className="w-full md:float-end flex flex-col ">
          <ChatsLeft toggleSideBar={toggleSideBar} openSideBar={openSideBar} />
        </section>
      </section>
    </>
  );
};

export default Chat;
