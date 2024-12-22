export default function Pricing()
{
        return(
                <div className="container p-3">
                        <div className="row">
                                <div className="col-6 p-3">
                                        <h1 className="fs-3">Flat Fees, No Surprises – Just Savings</h1>
                                        <p> Emphasizes no hidden charges and positions your pricing as straightforward and beneficial</p>
                                        
                                        <a href="" className="mx-3" style={{textDecoration:"none"}}>See Pricing 
                                                        <i class="fa-solid fa-arrow-right"></i></a>
                                </div>
                                <div className="col">
                                        <h1 style={{color:"gold"}}>₹0</h1>
                                        <p> Free account
                                        opening</p>
                                </div>
                                <div className="col">
                                        <h1 style={{color:"gold"}}>₹0</h1>
                                        <p> Free equity delivery
                                        and direct mutual funds</p>
                                </div>
                                <div className="col">
                                <h1 style={{color:"gold"}}>₹20</h1>
                                <p> Intraday and
                                F&O</p>
                                </div>
                        </div>
                </div>
        )
}