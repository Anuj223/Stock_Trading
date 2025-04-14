export default function Universe() {
        return (
          <div className="container mt-5">
            <h1 className="text-center">The Waner Universe</h1>
            <p>
              Expand your trading and investment journey with Waner’s partner
              platforms, offering even more opportunities and seamless integration for
              your financial growth.
            </p>
            <div className="row">
              <div className="col-4 p-3">
                <img src="images/zerodhaFundhouse.png" alt="" style={{width:"55%"}}/>
                <p className="text-muted text-small mt-2">Our asset management venture is creating simple and transparent index funds to help you save for your financial goals.</p>
              </div>
              <div className="col-4 p-3">
                <img src="images/sensibull-logo.svg" alt="" style={{width:"55%"}}/>
                <p className="text-muted text-small mt-2">An options trading platform that lets you create strategies, analyze positions, and examine crucial data points like open interest, FII/DII, and more.</p>
              </div>
              <div className="col-4 p-3">
                <img src="images/tijori.svg" alt="" style={{width:"55%"}}/>
                <p className="text-muted text-small mt-2">An investment research platform that provides detailed insights on stocks, sectors, supply chains, and more</p>
              </div>
            </div>
      
            <div className="row">
              <div className="col-4 p-3">
                <img src="images/streakLogo.png" alt="" style={{width:"55%"}}/>
                <p className="text-muted text-small mt-2">A systematic trading platform that allows you to create and backtest strategies without writing any code.</p>
              </div>
              <div className="col-4 p-3">
            <img src="images/smallcaseLogo.png" alt="" style={{width:"55%"}}/>
                <p className="text-muted text-small mt-2">A thematic investing platform that helps you invest in diversified baskets of stocks and ETFs, tailored to your preferences.</p>
              
              </div>
              <div className="col-4 p-3">
                <img src="images/dittoLogo.png" alt="" style={{width:"55%"}}/>
                <p className="text-muted text-small mt-2">Get personalized advice on life and health insurance—no spam, no mis-selling, just expert recommendations.</p>
              </div>
              <button className='message btn btn-primary'>Sign up for free</button>
                               
            </div>
          </div>
        );
      }
      