import Link from 'next/link';
import Image from 'next/image';
export default function Navbar({links} : {links: any}) {

    return (
      <>
    <div id="foundation">
      <div className="menuwrap">
        <div className="menuinner">
          <Link href="/">
          <div className="logo">
            <figure className="logo" title="Kyoto Protocol">
              <svg width="48" height="50" viewBox="0 0 48 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.3986 41.6742C47.3986 46.267 43.6806 50 39.0837 50C34.4869 50 30.7689 46.267 30.7689 41.6742C30.7689 37.0814 27.1635 33.4389 22.6793 33.3484C22.6117 33.3258 22.5441 33.3258 22.4765 33.3258C22.4089 33.3258 22.3413 33.3258 22.2737 33.3484C17.767 33.2353 14.1616 29.5475 14.1616 25C14.1616 20.4525 17.767 16.7873 22.2737 16.6968H22.6793C27.1635 16.5837 30.7689 12.8959 30.7689 8.34842C30.7689 3.8009 34.4869 0 39.0837 0C43.6806 0 47.3986 3.73303 47.3986 8.34842C47.3986 12.9638 43.7932 16.5837 39.3091 16.6968C39.2415 16.6742 39.1513 16.6742 39.0837 16.6742C39.0161 16.6742 38.9485 16.6742 38.8809 16.6968C34.3742 16.7873 30.7689 20.4751 30.7689 25C30.7689 29.5249 34.3742 33.2353 38.8809 33.3484H39.3091C43.7932 33.4389 47.3986 37.1267 47.3986 41.6742Z" fill="#DFF4E7"></path>
                <path d="M7.94798 16.7629C12.3375 16.7629 15.896 13.1397 15.896 8.67037C15.896 4.20101 12.3375 0.577881 7.94798 0.577881C3.55843 0.577881 0 4.20101 0 8.67037C0 13.1397 3.55843 16.7629 7.94798 16.7629Z" fill="#DFF4E7"></path>
                <path d="M7.94798 49.9998C12.3375 49.9998 15.896 46.2473 15.896 41.6183C15.896 36.9893 12.3375 33.2368 7.94798 33.2368C3.55843 33.2368 0 36.9893 0 41.6183C0 46.2473 3.55843 49.9998 7.94798 49.9998Z" fill="#DFF4E7"></path>
                </svg>
            </figure>
          <h3>Kyoto<br/><span>PROTOCOL.IO</span></h3>
          </div>
          </Link>
          <div className="burger_box">
            <div className="price-ticker">
              <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="17.5" cy="17.5" r="17" stroke="#DFF4E7"/>
                <path d="M26.5993 23.6876C26.5993 25.4494 25.1689 26.8814 23.4004 26.8814C21.6319 26.8814 20.2016 25.4494 20.2016 23.6876C20.2016 21.9258 18.8145 20.5285 17.0894 20.4937C17.0634 20.4851 17.0374 20.4851 17.0114 20.4851C16.9854 20.4851 16.9594 20.4851 16.9333 20.4937C15.1995 20.4504 13.8125 19.0357 13.8125 17.2913C13.8125 15.5468 15.1995 14.1409 16.9333 14.1061H17.0894C18.8145 14.0627 20.2016 12.6481 20.2016 10.9037C20.2016 9.15921 21.6319 7.70117 23.4004 7.70117C25.1689 7.70117 26.5993 9.13318 26.5993 10.9037C26.5993 12.6741 25.2122 14.0627 23.4871 14.1061C23.4611 14.0975 23.4264 14.0975 23.4004 14.0975C23.3744 14.0975 23.3484 14.0975 23.3224 14.1061C21.5886 14.1409 20.2016 15.5555 20.2016 17.2913C20.2016 19.027 21.5886 20.4504 23.3224 20.4937H23.4871C25.2122 20.5285 26.5993 21.9431 26.5993 23.6876Z" fill="#DFF4E7"/>
                <path d="M11.4741 14.0909C13.1717 14.0909 14.5479 12.7147 14.5479 11.0171C14.5479 9.31952 13.1717 7.94336 11.4741 7.94336C9.77655 7.94336 8.40039 9.31952 8.40039 11.0171C8.40039 12.7147 9.77655 14.0909 11.4741 14.0909Z" fill="#DFF4E7"/>
                <path d="M11.4741 26.8817C13.1717 26.8817 14.5479 25.4505 14.5479 23.685C14.5479 21.9195 13.1717 20.4883 11.4741 20.4883C9.77655 20.4883 8.40039 21.9195 8.40039 23.685C8.40039 25.4505 9.77655 26.8817 11.4741 26.8817Z" fill="#DFF4E7"/>
              </svg>
              <p>$0.33</p>
            </div>
            <div className="menu-icon-container">
              <Link href="" className="menu-icon js-menu_toggle closed">				
                <span className="menu-icon_box">
                  <span className="menu-icon_line menu-icon_line--1"></span>
                  <span className="menu-icon_line menu-icon_line--2"></span>
                  <span className="menu-icon_line menu-icon_line--3"></span>
                </span>
              
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div id="blur-container">
        <div className="side_menu">
          <div className="container">
            <h2 className="menu_title">MENU</h2>
            <ul className="list_load">
              <li className="list_item"><Link href="/competition/" className="competition">Launch Competition</Link></li>
              <li className="list_item"><Link href="#" className="developers">Ecosystem</Link></li>
              <li className="list_item"><Link href="#" className="developers">Developers</Link>
                </li>
              <li className="list_item"><Link href="#" className="developers">Grant Program</Link></li>
              {links.data.links.map((link:any, index:any) => (
              <li className="list_item" key={index}><a key={index} href={link.url}>
              {link.text}
            </a></li>
          ))}

            </ul>
            <div className="socials">
              <p>Join our community</p>
              <div className="socials-inner">
                <Link href="https://discord.gg/kyotoprotocol" target="_blank"><figure><Image src="/images/social/discord.png" width={50} height={50} alt="Social logo"/></figure></Link>
                <Link href="https://twitter.com/official_kpio" target="_blank"><figure><Image src="/images/social/twitter.png" width={50} height={50} alt="Social logo"/></figure></Link>
                <Link href="https://medium.com/@KyotoProtocol.io" target="_blank"><figure><Image src="/images/social/medium.png" width={50} height={50} alt="Social logo"/></figure></Link>
                <Link href="https://www.youtube.com/channel/UCIijeBIESm9rnnckEwbU14g" target="_blank"><figure><Image src="/images/social/youtube.png" width={50} height={50} alt="Social logo"/></figure></Link>
                <Link href="https://t.me/KyotoProtocol" target="_blank"><figure><Image src="/images/social/telegram.png" width={50} height={50} alt="Social logo"/></figure></Link>
                <Link href="https://www.linkedin.com/company/kyotoprotocol-io/" target="_blank"><figure><Image src="/images/social/linkedin.png" width={50} height={50} alt="Social logo"/></figure></Link>
              </div>
            </div>
          </div>
        </div>
        <div id="background-blur"></div>
      </div>
      </div>
      </>
    );
  }
