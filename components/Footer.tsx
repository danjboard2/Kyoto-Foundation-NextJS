import Link from 'next/link';

function Footer() {

    return (
      <div id="foundation">
      <section id="footer">
      <div id="footer">
        <div className="wrap">
          <div className="row left">
            <figure><img src="/images/logo-with-text.png"/></figure>
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
                <p>About <img src="/images/chevron-down.png"/></p>
                </div>
                <div className="content">
                <Link href="#" className="developers"><p>Community</p></Link>
                <Link href="#"><p>Documentation</p></Link>
                </div>
              </div>

              <div id="accordion-1">
                <div className="head">
                <p>Build on Kyoto <img src="/images/chevron-down.png"/></p>
                </div>
                <div className="content">
                <Link href="#" className="developers"><p>Grant Program</p></Link>
                </div>
              </div>							

              <div id="accordion-1">
                <div className="head">
                <p>Ecosystem <img src="/images/chevron-down.png"/></p>
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
              <Link href="https://discord.gg/kyotoprotocol" target="_blank"><figure><img src="/images/social/discord-footer.png"/></figure></Link>
              <Link href="https://twitter.com/official_kpio" target="_blank"><figure><img src="/images/social/twitter-footer.png"/></figure></Link>
              <Link href="https://medium.com/@KyotoProtocol.io" target="_blank"><figure><img src="/images/social/medium-footer.png"/></figure></Link>
              <Link href="https://www.youtube.com/channel/UCIijeBIESm9rnnckEwbU14g" target="_blank"><figure><img src="/images/social/youtube-footer.png"/></figure></Link>
              <Link href="https://t.me/KyotoProtocol" target="_blank"><figure><img src="/images/social/telegram-footer.png"/></figure></Link>
              <Link href="https://www.linkedin.com/company/kyotoprotocol-io/" target="_blank"><figure><img src="/images/social/linkedin-footer.png"/></figure></Link>
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