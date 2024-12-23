export default function Hero() {
        return (
                <div className="container">
                        <div className="row p-5 mt-5 border-bottom text-center">
                                <h1>Pricing</h1>
                                <h4 className="text-muted mt-3">Free equity investments and flat ₹20 intraday and F&O trades</h4>
                        </div>
                        <div className="row mt-5 p-4">
                        <div className="col-4 p-5">
                                <img src="images/pricing0.svg" alt="" />
                                <h3 className="mt-2">Free Equity Delivery</h3>
                                <p className="text-muted mt-3">All equity delivery investments (NSE, BSE) are completely free—₹0 brokerage.</p>
                        </div>
                        <div className="col-4 p-3">
                                <img src="images/mf.svg" alt="" />
                                <h3 className="mt-2">Intraday and F&O Trades</h3>
                                <p className="text-muted mt-3">Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity markets. Flat ₹20 on all options trades.</p>
                        </div>
                        <div className="col-4 p-3">
                                <img src="images/pricingMF.svg" alt="" />
                                <h3 className="mt-2">Free Direct Mutual Funds</h3>
                                <p className="text-muted mt-3">Invest in direct mutual funds with Waner for free—₹0 commissions and ₹0 DP charges.</p>
                        </div>
                        </div>
                </div>
        )
}