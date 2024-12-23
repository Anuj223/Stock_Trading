import './Homepage.css';
export default function Hero() {
        return (<>
                <div className="container p-5 mb-5">
                        <div className="row text-center">
                                <img src="images/homeHero.png" alt="Investement" className="mb-5" />
                                <h1>Invest in Future</h1>
                                <p className="fs-3 fw-normal">Your one-stop platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more. Join for free today!</p>
                                <button className='message btn btn-primary'>Sign up</button>
                        </div>

                </div>
         </>
        )
}