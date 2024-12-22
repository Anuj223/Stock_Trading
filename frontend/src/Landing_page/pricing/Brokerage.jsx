export default function Brokerage() {
        return (
                <div className="container">
                        <div className="row p-5 mt-3 text-center border-top">
                                <div className="col-8">
                                        <h3 className="fs-5">Brokerage Calculator</h3>
                                        <ul className="text-muted" style={{textAlign:"text-left",lineHeight:"2.5"}}>
                                                <li><b>
                                                Call & Trade and RMS Auto-Squareoff: </b> Additional charges of ₹50 + GST per order</li>
                                                <li><b>
                                                Digital Contract Notes:</b> Sent via e-mail at no extra charge.</li>
                                                <li><b>Physical Contract Notes:</b> If required, will be charged ₹20 per contract note. Courier charges apply.</li>
                                                <li><b>NRI Account (Non-PIS):</b> 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                                                <li><b>NRI Account (PIS):</b> 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                                                <li><b>Debit Balance Orders:</b> Any order placed when the account is in debit balance will be charged ₹40 per executed order instead of ₹20</li>

                                        </ul>
                                </div>
                                <div className="col-4">
                                        <h3 className="fs-5">List Of Charges</h3>
                                </div>
                        </div>
                </div>
        )
}