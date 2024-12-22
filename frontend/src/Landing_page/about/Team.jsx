import "./Team.css"

export default function Team() {
        return (
                <div className="container mt-4 border-top">
                        <div className="row text-center mt-2 p-5 mb-2">
                        <h1 className="fw-medium fs-2">People</h1>
                        </div>
                        <div className="row">
                                <div className="col-6 text-center">
                                        <img src="/images/AJ.jpeg" alt="Aj" className="Ajimage"/>
                                        <h4 className="mt-4">Anuj Goel</h4>
                                        <h5 className="text-muted">Founder, Ceo</h5>
                                </div>
                                <div className="col-6 text-muted mt-5 fs-5">
                                        <p>Anuj bootstrapped and founded Waner in 2010 to address the challenges he encountered during his decade-long career as a trader. Today, Waner has transformed the landscape of the Indian broking industry, setting new benchmarks in transparency and customer-centric innovation.</p>
                                        <p>Anuj is an active contributor to the financial ecosystem and serves on key advisory committees, including:</p>
                                        <ul>
                                                <li>SEBI Secondary Market Advisory Committee (SMAC)</li>
                                                <li>SEBI Market Data Advisory Committee (MDAC)</li>
                                        </ul>
                                        <p>In his downtime, Anuj finds balance by playing basketball, his ultimate zen.</p>
                                </div>
                        </div>
                </div>
        )
}