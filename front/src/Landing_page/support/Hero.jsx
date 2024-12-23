import "./Hero.css"

export default function Hero() {
        return (
                
                <section className="container-fluid" id="sec">
                        <div className="p-2 mt-0 mb-0" id="hero">
                        <h4>Support Panel</h4>
                        <a href="/">Track tickets</a>
                        </div>
                        <div className="row mt-0 p-5">
                                <div className="col-6 p-3 mt-1 text-center">
                                        <h4>Search for an answer or browse help topics to create a ticket</h4>
                                        <input type="text" placeholder="Enter your Query"/>
                                        <i class="fa-solid fa-magnifying-glass mb-5"></i>
                                        <br />
                                        <a href="/">Track account opening</a>
                                        <a href="/">Track segment activation </a>
                                        <a href="/">Intraday margins</a> 
                                        <a href="/">Hub user manual</a>
                                </div>
                                <div className="col-6 p-3">
                                        <h4 className="mb-3">Featured</h4>
                                        <br />
                                        1.<a href="/">Latest Intraday leverages and Square-off timings</a>
                                        <br />
                                        <br />
                                        2.<a href="/">
                                        Surveillance measure on scrips - December 2024</a>
                                </div>
                        </div>
                </section>
        )
}