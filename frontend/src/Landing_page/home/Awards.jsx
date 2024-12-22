export default function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="/images/largestBroker.svg" alt="Image Failed to load" />
        </div>
        <div className="col-6 p-5 mt-3">
          <h2 className="fs-2">Your Gateway to the Largest Brokerage</h2>
          <h3 className="fw-normal">
            Join the Movement: 2+ Million Traders Driving India's Market
          </h3>
          <p className="fs-5 mt-3">
            With Waner, everyday investors contribute to over 15% of India’s
            retail order volume. Trade with confidence, grow with purpose
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures & Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPO</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="images/pressLogos.png" alt="" style={{width:"90%"}}/>
        </div>
      </div>
    </div>
  );
}
