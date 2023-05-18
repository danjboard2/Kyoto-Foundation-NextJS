import Link from 'next/link';
export default function Socials() {

    return (
      <>
       <div className="flex flex-row justify-center align-middle items-center">
        <a target="_blank" href="https://discord.gg/kyotoprotocol">
        <figure><img className="max-w-[40px] p-2" src="/images/social/discord.png"/>
        </figure>
      </a>
     <a target="_blank" href="https://twitter.com/official_kpio">
     <figure>
        <img className="max-w-[40px] p-2" src="/images/social/twitter.png"/>
   </figure>
    </a>
       <a target="_blank" href="https://medium.com/@KyotoProtocol.io">
        <figure>
        <img className="max-w-[40px] p-2" src="/images/social/medium.png"/>
        </figure>
          </a>
       <a target="_blank" href="https://www.youtube.com/channel/UCIijeBIESm9rnnckEwbU14g">
        <figure>
        <img className="max-w-[40px] p-2" src="/images/social/youtube.png"/>
           </figure>
             </a>
              <a target="_blank" href="https://t.me/KyotoProtocol">
             <figure>
              <img className="max-w-[40px] p-2" src="/images/social/telegram.png"/>
               </figure>
              </a>
            <a target="_blank" href="https://www.linkedin.com/company/kyotoprotocol-io/">
           <figure>
           <img className="max-w-[40px] p-2" src="/images/social/linkedin.png"/>
          </figure>
          </a>
          </div>
      </>
    );
  }
