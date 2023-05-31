import Link from 'next/link';
import Image from 'next/image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Footer() {

    return (
      <div id="foundation">
      <section id="footer">
      <div id="footer">
        <div className="wrap">
          <div className="row left">
            <figure><Image src="/images/logo-with-text.png" width={420} height={86} alt="Kyoto Logo"/></figure>
          </div>
          <div className="row">
            <h4>About</h4>
            <Link href="#" className="developers"><p>Community</p></Link>
            <Link href="#" className="developers"><p>Documentation</p></Link>
          </div>
          <div className="row">
            <h4>Build on Kyoto</h4>
            <div className="content">
              <Link href="#" className="developers"><p>Grant Program</p></Link>
              </div>
          </div>
          <div className="row">
            <h4>Ecosystem</h4>
            <Link href="https://kyotoswap.io" target="_blank"><p>KyotoSwap.io</p></Link>
            <Link href="https://kyotowallet.io" target="_blank"><p>KyotoWallet.io</p></Link>
          </div>
          <div className="row mobile">
            <h4>Menu</h4>
            <div className="accordion container">
              <div id="accordion-1">
                <div className="head">
                <p>About <KeyboardArrowDownIcon /></p>
                </div>
                <div className="content">
                <Link href="#" className="developers"><p>Community</p></Link>
                <Link href="#"><p>Documentation</p></Link>
                </div>
              </div>

              <div id="accordion-1">
                <div className="head">
                <p>Build on Kyoto <KeyboardArrowDownIcon /></p>
                </div>
                <div className="content">
                <Link href="#" className="developers"><p>Grant Program</p></Link>
                </div>
              </div>							

              <div id="accordion-1">
                <div className="head">
                <p>Ecosystem <KeyboardArrowDownIcon /></p>
                </div>
                <div className="content">
                  <Link href="https://kyotoswap.io" target="_blank"><p>KyotoSwap.io</p></Link>
                  <Link href="https://kyotowallet.io" target="_blank"><p>KyotoWallet.io</p></Link>
                </div>
                </div>	
            </div>
          </div>
          <div className="row social">
            <p>Join our community</p>
            <div className="social-inner">
              <Link href="https://discord.gg/kyotoprotocol" target="_blank"><figure><Image src="/images/social/discord-footer.png" width={50} height={50} alt="Social logo"/></figure></Link>
              <Link href="https://twitter.com/KyotoRefi" target="_blank"><figure><Image src="/images/social/twitter-footer.png" width={50} height={50} alt="Social logo"/></figure></Link>
              <Link href="https://medium.com/@KyotoProtocol.io" target="_blank"><figure><Image src="/images/social/medium-footer.png" width={50} height={50} alt="Social logo"/></figure></Link>
              <Link href="https://www.youtube.com/channel/UCIijeBIESm9rnnckEwbU14g" target="_blank"><figure><Image src="/images/social/youtube-footer.png" width={50} height={50} alt="Social logo"/></figure></Link>
              <Link href="https://t.me/KyotoProtocol" target="_blank"><figure><Image src="/images/social/telegram-footer.png" width={50} height={50} alt="Social logo"/></figure></Link>
              <Link href="https://www.linkedin.com/company/kyotoprotocol-io/" target="_blank"><figure><Image src="/images/social/linkedin-footer.png" width={50} height={50} alt="Social logo"/></figure></Link>
            </div>
          </div>
        </div>
        <div id="copyright">2023 &copy; KYOTOPROTOCOL.IO</div>
      </div>
    </section>
    </div>
    );
  }
export default Footer