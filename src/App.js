import React from "react";
import "./App.css";

function App() {
  return (
    
    <div className="glara-main-bg">
      
      <header className="glara-header">
        <div className="glara-logo-area">
          <div className="glara-logo-circle"></div>
          <span className="glara-logo-text">GLARA</span>
        </div>
        <nav className="glara-nav" >
          <a href="#about" >About</a>
          <a href="#features" className="glara-gradient">Features</a>
          <a href="#tokenomics">Tokenomics</a>
          <a href="#roadmap" className="glara-gradient" >Roadmap</a>
        </nav>
        <a href="#buy" className="glara-buy-btn">Buy Token</a>
      </header>
      <section className="glara-hero">
        <div className="glara-hero-content">
          <h1>The Future of <span className="glara-gradient">Crypto</span> is Here</h1>
          <p>GLARA Token is a next-generation BEP-20 token built on Binance Smart Chain with Chainlink price feed integration for maximum security and reliability.</p>
          <div className="glara-hero-btns">
            <a href="#buy" className="glara-btn-primary">Get Started</a>
            <a href="#about" className="glara-btn-secondary">Learn More</a>
            
          </div>
          <div className="token-info-row">
            <div className="token-info-col">
              <span className="gradient-heading">BEP-20</span>
              <span className="token-info-label">Token Standard</span>
            </div>
            <div className="section-divider"></div>
            <div className="token-info-col">
              <span className="gradient-heading">BSC</span>
              <span className="token-info-label">Network</span>
            </div>
            <div className="section-divider"></div>
           <div className="token-info-col">
            <span className="gradient-heading">Verified</span>
            <span className="token-info-label">Contract</span>
            </div>
          </div>
          
        </div>
        <div className="glara-hero-img">
          <div className="glara-logo-img"></div>
        </div>
      </section>
      <section id="about" className="glara-about">
        <h2>About <span className="glara-gradient">GLARA Token</span></h2>
        <p>A revolutionary BEP-20 token designed for the future of decentralized finance.</p>
        <div className="glara-about-cards">
          <div className="glara-card">
            <h3 className="glara-gradient">Token Overview</h3>
            <ul>
              <li>BEP-20 token on Binance Smart Chain</li>
              <li>Contract address verified</li>
              <li>Chainlink price feed integration</li>
            </ul>
          </div>
          <div className="glara-card">
            <h3 className="glara-gradient">Technical Highlights</h3>
            <ul>
              <li>Secure contract architecture</li>
              <li>Price oracle integration</li>
              <li>Transparent codebase</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="features" className="glara-features">
        <h2>Key <span className="glara-gradient">Features</span></h2>
        <p>Discover the potential use cases and features of GLARA Token.</p>
        <div className="glara-features-cards">
          <div className="glara-feature-card">
            <div className="glara-feature-icon wallet"></div>
            <h4>Payment Integration</h4>
            <p>Seamlessly integrate GLARA as a payment method in your DApp ecosystem.</p>
          </div>
          <div className="glara-feature-card">
            <div className="glara-feature-icon reward"></div>
            <h4>Reward Mechanism</h4>
            <p>Incentivize user engagement by implementing GLARA as a reward token.</p>
          </div>
          <div className="glara-feature-card">
            <div className="glara-feature-icon governance"></div>
            <h4>Governance</h4>
            <p>Participate in key decisions through our upcoming DAO governance system.</p>
          </div>
          <div className="glara-feature-card">
            <div className="glara-feature-icon staking"></div>
            <h4>Staking</h4>
            <p>Earn passive income by staking your GLARA tokens in our upcoming staking platform.</p>
          </div>
        </div>
      </section>
      <section className="glara-next-steps">
        <h2>Next Development Steps</h2>
        <div className="glara-next-steps-cards">
          <div className="glara-next-step-card">
            <div className="glara-feature-icon liquidity"></div>
            <h4>Adding Liquidity on PancakeSwap</h4>
            <p>We're preparing to add significant liquidity to PancakeSwap to ensure smooth trading experience for all users.</p>
          </div>
          <div className="glara-next-step-card">
            <div className="glara-feature-icon staking"></div>
            <h4>Developing Staking Contracts</h4>
            <p>Our team is working on secure staking contracts to allow token holders to earn passive income.</p>
          </div>
          <div className="glara-next-step-card">
            <div className="glara-feature-icon docs"></div>
            <h4>Creating Tokenomics Documentation</h4>
            <p>Comprehensive documentation detailing our token distribution, vesting schedules, and economic model.</p>
          </div>
          <div className="glara-next-step-card">
            <div className="glara-feature-icon governance"></div>
            <h4>Implementing Governance Features</h4>
            <p>Building a decentralized governance system to give the community a voice in the project's future.</p>
          </div>
        </div>
      </section>
      <section id="tokenomics" className="glara-tokenomics">
        <h2><span className="glara-gradient">Tokenomics</span></h2>
        <p>Our token distribution model is designed for long-term sustainability and growth.</p>
        <div className="glara-tokenomics-cards">
          <div className="glara-tokenomics-card">
            <h3>Token Details</h3>
            <ul>
              <li><span>Name</span> <b>GLARA Token</b></li>
              <li><span>Symbol</span> <b>GLARA</b></li>
              <li><span>Total Supply</span> <b>2,000,000,000</b></li>
              <li><span>Token Type</span> <b>BEP-20</b></li>
              <li><span>Decimals</span> <b>18</b></li>
              <li><span>Initial Price</span> <b>$0.01 USD</b></li>
            </ul>
          </div>
          <div className="glara-tokenomics-card">
            <h3>Token Distribution</h3>
            <ul>
              <li><span className="dot blue"></span> Public Sale <b>40%</b></li>
              <li><span className="dot purple"></span> Team & Advisors <b>15%</b></li>
              <li><span className="dot cyan"></span> Ecosystem Development <b>20%</b></li>
              <li><span className="dot lightblue"></span> Liquidity Pool <b>10%</b></li>
              <li><span className="dot pink"></span> Marketing <b>10%</b></li>
              <li><span className="dot violet"></span> Reserve <b>5%</b></li>
            </ul>
          </div>
        </div>
        <div className="glara-token-utility">
          <h3>Token Utility</h3>
          <div className="glara-token-utility-cards">
            <div className="glara-token-utility-card">
              <div className="glara-feature-icon reward"></div>
              <h4>Payments</h4>
              <p>Use GLARA for fast and secure transactions within our ecosystem.</p>
            </div>
            <div className="glara-token-utility-card">
              <div className="glara-feature-icon governance"></div>
              <h4>Governance</h4>
              <p>Vote on key decisions and proposals in our upcoming DAO.</p>
            </div>
            <div className="glara-token-utility-card">
              <div className="glara-feature-icon staking"></div>
              <h4>Staking Rewards</h4>
              <p>Earn passive income by staking your tokens in our platform.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="roadmap" className="glara-roadmap">
        <h2>Development <span className="glara-gradient">Roadmap</span></h2>
        <p>Our strategic plan for the growth and development of GLARA Token.</p>
        <div className="glara-roadmap-cards">
          <div className="glara-roadmap-card">
            <div className="glara-roadmap-phase">Q2 <span className="glara-gradient">2025</span></div>
            <h4>Foundation Phase</h4>
            <ul>
              <li>Smart contract development and testing</li>
              <li>Chainlink price feed integration</li>
              <li>Contract verification on BscScan</li>
            </ul>
            <div className="glara-status completed">Completed</div>
          </div>
          <div className="glara-roadmap-card">
            <div className="glara-roadmap-phase">Q3 <span className="glara-gradient">2025</span></div>
            <h4>Growth Phase</h4>
            <ul>
              <li>Website launch and branding</li>
              <li>Adding liquidity on PancakeSwap</li>
              <li>Creating tokenomics documentation</li>
            </ul>
            <div className="glara-status inprogress">In Progress</div>
          </div>
          <div className="glara-roadmap-card">
            <div className="glara-roadmap-phase">Q4 <span className="glara-gradient">2025</span></div>
            <h4>Expansion Phase</h4>
            <ul>
              <li>Developing staking contracts</li>
              <li>Community building initiatives</li>
              <li>Strategic partnerships</li>
            </ul>
            <div className="glara-status upcoming">Upcoming</div>
          </div>
          <div className="glara-roadmap-card">
            <div className="glara-roadmap-phase">Q1 <span className="glara-gradient">2026</span></div>
            <h4>Maturity Phase</h4>
            <ul>
              <li>Implementing governance features</li>
              <li>Launch of GLARA DAO</li>
              <li>Cross-chain integration exploration</li>
            </ul>
            <div className="glara-status upcoming">Upcoming</div>
          </div>
        </div>
      </section>
      <section className="glara-cta">
        <h2>Ready to Join the <span className="glara-gradient">GLARA</span> Ecosystem?</h2>
        <p>Be part of the next generation of decentralized finance with GLARA Token.</p>
        <div className="glara-cta-btns">
          <a href="#buy" className="glara-btn-primary">Buy GLARA</a>
          <a href=" "  className="glara-btn-secondary">View on BscScan</a>
        </div>
      </section>
      <footer className="glara-footer">
        <div className="glara-footer-main">
          <div className="glara-footer-brand">
            <div className="glara-logo-circle"></div>
            <div>
              <b>GLARA Token</b>
              <p>The next generation BEP-20 token built on Binance Smart Chain with advanced features and real-world utility.</p><h4>© 2025 GLARA Token. All rights reserved.</h4>
            </div>
          </div>
          <div className="glara-footer-links">
            <div>
              <b>Resources</b>
              <a href="#whitepaper">Whitepaper</a>
              <a href="#docs">Documentation</a>
            </div>
            <div>
              <b>Community</b>
              <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer">Telegram</a>
              <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
            <div>
              <b>Legal</b>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;