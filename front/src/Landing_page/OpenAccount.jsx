import { Link } from "react-router-dom"

export default function OpenAccount() {
        return (<div className="container p-5 mb-5">
                <div className="row text-center">
                        <h1>Open a Waner Account</h1>
                        <p className="fs-3 fw-normal">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                        <Link to='/signup' ><button className='message btn btn-primary'>Sign up for free</button></Link>
                </div>

        </div>
        )
}