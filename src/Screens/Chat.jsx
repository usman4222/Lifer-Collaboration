import React from "react";
import ChatSideBar from "../Components/ChatSideBar";
import ChatsLeft from "../Components/ChatsLeft";

const Chat = () => {
  return (
    <>
      <ChatSideBar />
      <section className="w-full lg:w-[65%] xl:w-[75%] md:float-end flex flex-col ">
        <ChatsLeft />
      </section>
    </>
  );
};

export default Chat;
