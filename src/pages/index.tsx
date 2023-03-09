import { useRouter } from "next/router"
import GabbyInput from '@/components/Home/GabbyInput'
import Chat from '@/components/Home/Chat'
import type { NextPage } from 'next'
import Header from '@/Layout/Header';

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <header>
        <Header />
      </header>
      <div className='flex items-center px-20 mt-16'>
        <div className='bg_gabby motion-safe:hover:scale-110 cursor-pointer' onClick={() => router.push({ pathname: "profile" })}>
          <div
            className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/07a4393b360e06fc1fc624a8b10cd6c648036d19.webp)_center_/_cover]  w-[468px] h-[450.52px]"
          />
        </div>
        <div>
          {/* <ChatBox /> */}
          <Chat />

        </div>
      </div>
      <GabbyInput></GabbyInput>
    </>
  )
}


export default Home
