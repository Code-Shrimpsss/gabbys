import { useRouter } from "next/router"

export default function Header() {
  const router = useRouter();
  return (
    <>
      <header className='fixed top-0 pt-20 z-50  w-screen max-w-7xl  md:inline-block '>
        <div className="flex items-center justify-between pb-4  border-b-2 border-neutral-50">
          <div className="main_text_font font-black-ops-one text-white text-5xl leading-[50px] -tracking-tighter">
            <strong onClick={() => router.push({ pathname: "/" })}>Gabby World</strong><strong className="text-3xl text-center align-baseline"> &nbsp; {` > `} &nbsp; {`Gabby Square`}</strong>
          </div>
          <div className="flex flex-row items-center p-0 gap-4.5">
            <div className="opensea_svg mx-2"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 0C8.061 0 0 8.061 0 18C0 27.939 8.061 36 18 36C27.939 36 36 27.939 36 18C36 8.061 27.9435 0 18 0ZM8.88 18.6045L8.9565 18.483L13.641 11.157C13.6567 11.1329 13.6786 11.1135 13.7043 11.1007C13.7301 11.088 13.7588 11.0824 13.7875 11.0846C13.8161 11.0867 13.8437 11.0965 13.8673 11.1129C13.8908 11.1294 13.9096 11.1519 13.9215 11.178C14.7015 12.9315 15.3795 15.1125 15.0615 16.47C14.9295 17.028 14.559 17.784 14.1405 18.483C14.0868 18.5853 14.0282 18.6849 13.965 18.7815C13.9499 18.8031 13.9296 18.8205 13.906 18.8323C13.8825 18.8441 13.8563 18.8498 13.83 18.849H9.0195C8.99079 18.8494 8.96249 18.8421 8.93761 18.8278C8.91274 18.8134 8.89221 18.7926 8.87821 18.7675C8.86421 18.7425 8.85727 18.7141 8.85811 18.6854C8.85895 18.6566 8.86755 18.6287 8.883 18.6045H8.88ZM29.751 21.1245C29.7514 21.1565 29.7423 21.188 29.725 21.2149C29.7077 21.2418 29.6828 21.2631 29.6535 21.276C29.289 21.4305 28.0485 22.0035 27.5325 22.719C26.2155 24.552 25.2105 27.174 22.9605 27.174H13.5795C12.7874 27.1728 12.0034 27.0156 11.2721 26.7112C10.5409 26.4069 9.87677 25.9615 9.31775 25.4003C8.75873 24.8392 8.31576 24.1735 8.01415 23.4411C7.71255 22.7087 7.55823 21.9241 7.56 21.132V21.024C7.56 20.937 7.632 20.865 7.722 20.865H12.9495C13.0545 20.865 13.1295 20.9595 13.122 21.063C13.083 21.402 13.1475 21.7515 13.3095 22.068C13.6185 22.698 14.2635 23.091 14.958 23.091H17.547V21.0705H14.985C14.955 21.0702 14.9256 21.0617 14.9001 21.0459C14.8745 21.0301 14.8538 21.0077 14.84 20.981C14.8263 20.9543 14.8201 20.9244 14.8221 20.8944C14.8241 20.8644 14.8343 20.8356 14.8515 20.811L14.946 20.676C15.186 20.3295 15.5325 19.797 15.8775 19.188C16.1115 18.777 16.3395 18.339 16.5225 17.898C16.5585 17.82 16.587 17.7375 16.62 17.658C16.6695 17.517 16.7205 17.385 16.7565 17.2545C16.7918 17.1438 16.8243 17.0323 16.854 16.92C16.9395 16.545 16.9755 16.149 16.9755 15.7395C16.9755 15.5775 16.9695 15.408 16.9545 15.249C16.947 15.0735 16.9245 14.8965 16.9035 14.721C16.8867 14.564 16.8627 14.4078 16.8315 14.253C16.7911 14.0173 16.7421 13.7831 16.6845 13.551L16.6635 13.461C16.6185 13.299 16.5795 13.146 16.5285 12.9855C16.3857 12.4926 16.2215 12.0062 16.0365 11.5275C15.972 11.3475 15.901 11.1698 15.8235 10.995C15.7155 10.728 15.6045 10.4865 15.504 10.26C15.454 10.163 15.407 10.0644 15.363 9.9645C15.3142 9.85671 15.2627 9.75017 15.2085 9.645C15.1725 9.5655 15.129 9.489 15.1005 9.417L14.784 8.835C14.7405 8.7555 14.8125 8.658 14.8995 8.6835L16.8795 9.219H16.8945L17.154 9.294L17.442 9.375L17.547 9.4035V8.229C17.547 7.6605 18 7.2 18.5655 7.2C18.699 7.19964 18.8313 7.2263 18.9542 7.27837C19.0772 7.33044 19.1883 7.40685 19.281 7.503C19.4725 7.69617 19.5803 7.95698 19.581 8.229V9.975L19.7925 10.0335C19.8075 10.041 19.8255 10.0485 19.839 10.059C19.89 10.095 19.965 10.152 20.0595 10.224C20.1345 10.281 20.214 10.353 20.307 10.4295C20.6032 10.6708 20.8904 10.923 21.168 11.1855C21.489 11.484 21.849 11.8335 22.194 12.222C22.2915 12.333 22.3845 12.441 22.482 12.561C22.575 12.6795 22.68 12.795 22.767 12.909C22.8855 13.065 23.007 13.227 23.1195 13.395C23.169 13.4745 23.2305 13.557 23.277 13.6365C23.421 13.8495 23.544 14.0685 23.6625 14.289C23.7135 14.3895 23.763 14.5005 23.8065 14.6085C23.94 14.904 24.045 15.2025 24.1095 15.5055C24.1308 15.5698 24.1454 15.6362 24.153 15.7035V15.7185C24.174 15.804 24.1815 15.8985 24.189 15.9945C24.2312 16.4379 24.177 16.8851 24.03 17.3055C23.9835 17.4315 23.94 17.5605 23.883 17.6865C23.7705 17.9415 23.6415 18.201 23.487 18.4395C23.436 18.5295 23.3745 18.6225 23.3175 18.7125C23.253 18.807 23.184 18.897 23.127 18.9825C23.0445 19.0961 22.958 19.2067 22.8675 19.314C22.788 19.422 22.7085 19.53 22.6185 19.6275C22.497 19.7745 22.3785 19.9125 22.251 20.0445C22.179 20.1315 22.101 20.2215 22.017 20.2995C21.939 20.3895 21.855 20.469 21.783 20.541C21.657 20.667 21.558 20.7615 21.471 20.844L21.2655 21.027C21.2369 21.0557 21.198 21.0719 21.1575 21.072H19.581V23.091H21.564C22.0065 23.091 22.428 22.935 22.77 22.644C22.8855 22.5435 23.3925 22.104 23.994 21.441C24.0136 21.4184 24.0399 21.4027 24.069 21.396L29.544 19.8105C29.568 19.8035 29.5934 19.8023 29.618 19.8067C29.6426 19.8112 29.6658 19.8213 29.6859 19.8363C29.706 19.8513 29.7223 19.8707 29.7336 19.893C29.7449 19.9153 29.7508 19.94 29.751 19.965V21.1245Z" fill="#FCB69F" />
            </svg>
            </div>
            <div className="twttier_svg mx-2">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM29.2102 13.7411C29.2102 13.5276 29.2102 13.316 29.1965 13.1045C30.0996 12.4074 30.8803 11.5446 31.5 10.554C30.6581 10.9528 29.7642 11.2141 28.8492 11.3291C29.8126 10.7139 30.5338 9.74581 30.8784 8.60611C29.9717 9.17937 28.9808 9.58397 27.947 9.80138C26.1993 7.81933 23.2751 7.72379 21.4159 9.58787C20.2166 10.79 19.7084 12.5819 20.0804 14.292C16.3684 14.094 12.9104 12.2241 10.5667 9.14817C9.34186 11.3983 9.96709 14.2764 11.9954 15.7222C11.2605 15.6988 10.542 15.4872 9.90037 15.106V15.1684C9.90037 17.5122 11.4497 19.5303 13.6033 19.9944C12.9241 20.1923 12.2112 20.2215 11.5192 20.0792C12.1243 22.0846 13.8565 23.4583 15.8318 23.4983C14.1965 24.8681 12.1773 25.612 10.0987 25.61C9.73126 25.609 9.36472 25.5856 9 25.5388C11.1115 26.9837 13.5676 27.75 16.0759 27.7461V27.75C24.5667 27.75 29.2102 20.2469 29.2102 13.7411Z" fill="#FCB69F" />
              </svg>
            </div>
            <div className="discord_svg mx-2">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM20.7108 9.42623C22.27 9.70389 23.7612 10.1887 25.1518 10.8467C25.1639 10.8521 25.1742 10.861 25.1802 10.8735C27.6441 14.6108 28.861 18.8267 28.4061 23.6801C28.4043 23.7006 28.394 23.7194 28.3777 23.7318C26.5115 25.1452 24.7038 26.0032 22.921 26.5719C22.8926 26.5808 22.8617 26.5701 22.8445 26.5451C22.4325 25.9541 22.0584 25.3309 21.7308 24.6764C21.7118 24.6381 21.729 24.5916 21.7677 24.5765C22.362 24.3452 22.927 24.0684 23.4705 23.7408C23.5135 23.7149 23.5161 23.6515 23.4766 23.6211C23.3613 23.5327 23.247 23.4399 23.1377 23.347C23.1171 23.3301 23.0896 23.3265 23.0663 23.3381C19.5378 25.0193 15.6721 25.0193 12.1014 23.3381C12.0782 23.3274 12.0506 23.331 12.0309 23.3479C11.9217 23.4408 11.8072 23.5327 11.6929 23.6211C11.6533 23.6515 11.6568 23.7149 11.6998 23.7408C12.2433 24.0622 12.8083 24.3452 13.4017 24.5773C13.4404 24.5925 13.4585 24.6381 13.4395 24.6764C13.1188 25.3318 12.7447 25.955 12.325 26.546C12.3069 26.5701 12.2768 26.5808 12.2484 26.5719C10.4743 26.0032 8.66655 25.1452 6.80036 23.7318C6.78488 23.7194 6.7737 23.6997 6.77198 23.6792C6.39186 19.4812 7.16672 15.2304 9.99526 10.8726C10.0021 10.861 10.0124 10.8521 10.0245 10.8467C11.416 10.1878 12.9072 9.703 14.4655 9.42623C14.4939 9.42176 14.5223 9.43515 14.5369 9.46104C14.7295 9.81281 14.9497 10.2637 15.0985 10.6324C16.7411 10.3735 18.4095 10.3735 20.0864 10.6324C20.2352 10.2717 20.4476 9.81281 20.6394 9.46104C20.6541 9.43426 20.6824 9.42087 20.7108 9.42623ZM12.0119 18.8553C12.0119 20.1052 12.8977 21.123 13.9727 21.123C15.0649 21.123 15.9335 20.1052 15.9335 18.8553C15.9507 17.6143 15.0735 16.5875 13.9727 16.5875C12.8805 16.5875 12.0119 17.6053 12.0119 18.8553ZM19.2617 18.8553C19.2617 20.1052 20.1475 21.123 21.2225 21.123C22.3233 21.123 23.1833 20.1052 23.1833 18.8553C23.2005 17.6143 22.3233 16.5875 21.2225 16.5875C20.1303 16.5875 19.2617 17.6053 19.2617 18.8553Z" fill="#FCB69F" />
              </svg>

            </div>
          </div>
        </div>
      </header>
      <div className=" mb-40"></div>
    </>
  )
}