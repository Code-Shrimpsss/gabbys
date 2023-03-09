import type { NextPage } from "next";

const Chat: NextPage = () => {
  return (
    <>
      {/* 模板
    user:
    <div className="chat chat-end ">
            <div className="chat-bubble bg-[#FFF6E9] text-black"></div>
     </div>  
      gabby:
              <div className="chat chat-start ">
            <div className="chat-bubble bg-white text-black"></div>
          </div>
    */}
      <div className="chat-main ml-8 ">
        <div className="chat chat-start my-2 max-w-xl">
          <div className="chat-bubble bg-white text-black">It was said that you would, destroy the Si would, destroy the Si would, destroy the Sith, not join them.</div>
        </div>        <div className="chat chat-end my-2">
          <div className="chat-bubble bg-[#FFF6E9] text-black">It was said that you would, destroy the Sith, not join them.</div>
        </div>
        <div className="chat chat-start my-2">
          <div className="chat-bubble bg-white text-black">It was said that you would, destroy the Sith, not join them.</div>
        </div>        <div className="chat chat-end my-2">
          <div className="chat-bubble bg-[#FFF6E9] text-black">It was said <i id="chat_high_text">that you would</i>, destroy the Sith, not join them.</div>
        </div>
        <div className="chat chat-start my-2">
          <div className="chat-bubble bg-white text-black">It was said that you would, destroy the Sith, not join them.</div>
        </div>

        <div className="chat chat-end my-2 float-right">
          <div className="chat-bubble bg-[#FFF6E9] text-black">It was said that you wouIt was said that you wouldIt was said that you wouldIt was said that you wouldld,It was said that you would, destroy the Sith, not join them.</div>
        </div>
      </div>
    </>
  )
}


export default Chat;
