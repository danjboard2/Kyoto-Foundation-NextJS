import Image from 'next/image';
export default function Socials() {

    return (
      <>
       <div className="flex flex-row justify-center align-middle items-center">
        <a target="_blank" href="https://discord.gg/kyotoprotocol">
        <figure><Image className="max-w-[40px] p-2" src="/images/social/discord.png"  width={50} height={50} alt="Social logo"/>
        </figure>
      </a>
     <a target="_blank" href="https://twitter.com/KyotoRefi">
     <figure>
     <Image className="max-w-[40px] p-2" src="/images/social/twitter.png" width={50} height={50} alt="Social logo"/>
   </figure>
    </a>
       <a target="_blank" href="https://medium.com/@KyotoProtocol.io">
        <figure>
        <Image className="max-w-[40px] p-2" src="/images/social/medium.png" width={50} height={50} alt="Social logo"/>
        </figure>
          </a>
       <a target="_blank" href="https://www.youtube.com/channel/UCIijeBIESm9rnnckEwbU14g">
        <figure>
        <Image className="max-w-[40px] p-2" src="/images/social/youtube.png" width={50} height={50} alt="Social logo"/>
           </figure>
             </a>
              <a target="_blank" href="https://t.me/KyotoProtocol">
             <figure>
             <Image className="max-w-[40px] p-2" src="/images/social/telegram.png" width={50} height={50} alt="Social logo"/>
               </figure>
              </a>
            <a target="_blank" href="https://www.linkedin.com/company/kyotoprotocol-io/">
           <figure>
           <Image className="max-w-[40px] p-2" src="/images/social/linkedin.png" width={50} height={50} alt="Social logo"/>
          </figure>
          </a>
          </div>
      </>
    );
  }
