import React, { useState, useEffect } from "react";

import { useRouter } from "next/router"
import type { NextPage } from 'next'
import Header from '@/Layout/Header';
import chat_data from "@/mocks/chat_data.json"

const Home: NextPage = () => {
  const router = useRouter();
  function handleEnder(e: React.ReactElement) {
    if (e.key === '16') {

    }
  }
  return (
    <>
      <header>
        <Header />
      </header>

      {/* <div className="flex flex-col h-screen">
        <div className="flex-1 bg-gray-100">
          <Chat messages={messages} />
        </div>
        <div className="p-4 bg-white border-t border-gray-200">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="w-full p-2 rounded-lg focus:outline-none focus:ring"
          />
        </div>
      </div> */}

      <div className='flex items-center px-20 mt-16'>
        <div className='bg_gabby motion-safe:hover:scale-110 cursor-pointer' onClick={() => router.push({ pathname: "profile" })}>
          <div
            className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/07a4393b360e06fc1fc624a8b10cd6c648036d19.webp)_center_/_cover]  w-[468px] h-[450.52px]"
          />
        </div>
        <div className="chat-main ml-8 ">
          <div className="chat chat-start my-2 max-w-xl">
            <div className="chat-bubble bg-white text-black">Hey there! Did you <i id='chat_high_text'> cook steak again</i> today? How did it turn out?</div>
          </div>        <div className="chat chat-end my-2">
            <div className="chat-bubble bg-[#FFF6E9] text-black">It was said that you would, destroy the Sith, not join them.</div>
          </div>
          <div className="chat chat-start my-2">
            <div className="chat-bubble bg-white text-black">"That's a great idea. Have you ever tried using a coffee rub? It adds a nice depth of flavor."</div>
          </div>        <div className="chat chat-end my-2">
            <div className="chat-bubble bg-[#FFF6E9] text-black">It was said <i id="chat_high_text">that you would</i>, destroy the Sith, not join them.</div>
          </div>

          <div className="chat chat-start my-2">
            <div className="chat-bubble bg-white text-black">Sure do! Just mix together some ground coffee, brown sugar, salt, and a bit of chili powder. Rub it onto the steak and grill as usual.</div>
          </div>
          <div className="chat chat-end my-2 float-right">
            <div className="chat-bubble bg-[#FFF6E9] text-black">It was said that you wouIt was said that you wouldIt was said that you wouldIt was said that you wouldld,It was said that you would, destroy the Sith, not join them.</div>
          </div>
          {/* <div className="chat chat-start my-2">
            <div className="chat-bubble bg-white text-black">Please do! What's your favorite cut? <i id='chat_high_text'>I guess you’d be into ribeye or filet mignon?</i></div>
          </div> */}
          <div className="chat chat-end my-2 float-right">
            <div className="chat-bubble bg-[#FFF6E9] text-black">It was said that you wouIt was said that you wouldIt was said that you wouldIt was said that you wouldld,It was said that you would, destroy the Sith, not join them.</div>
          </div>
        </div>
      </div>
      <div className="chatbox h-[200px] w-full drop-shadow rounded-xl mt-10">
        <div className="chatbox_header px-4 flex justify-between bg-bginputbox rounded-t-xl  p-2 h-[20]">
          <div className="chatbox_left_option">
            <div className="left_option flex items-center">
              <div className="smile_svg mr-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="#979797" />
                  <path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#979797" />
                  <path d="M12 18C14.28 18 16.22 16.34 17 14H7C7.78 16.34 9.72 18 12 18Z" fill="#979797" />
                  <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#979797" />
                </svg>
              </div>
              <div className="picture_svg mr-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 21C4.45 21 3.979 20.804 3.587 20.412C3.195 20.02 2.99934 19.5493 3 19V5C3 4.45 3.196 3.979 3.588 3.587C3.98 3.195 4.45067 2.99934 5 3H14V5H5V19H19V10H21V19C21 19.55 20.804 20.021 20.412 20.413C20.02 20.805 19.5493 21.0007 19 21H5ZM17 9V7H15V5H17V3H19V5H21V7H19V9H17ZM6 17H18L14.25 12L11.25 16L9 13L6 17Z" fill="#979797" />
                </svg>
              </div>
              <i id="chat_high_text" >Meet for 100 days  ^ ^</i>
            </div>
          </div>
          <div className="chatbox_right_text font-bold text-xl text-gray">Chat with gabby</div>
        </div>
        <div className="input_out_box p-4 pt-0 bg-bginputbox rounded-b-xl ">
          <textarea onKeyUp={handleEnder} className="chatbox_input bg-bginput rounded-md p-2 h-[100px] block w-full focus:outline-none focus:ring focus:ring-indigo-100 resize-none" onClick={() => { }} />
        </div>
      </div>
    </>
  )
}


export default Home

