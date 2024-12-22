import { Link } from "react-router-dom";

export default function NotFound() {
        return (<div className="container p-5 mb-5">
                <div className="row text-center">
                        <h1>404</h1>
                        <h3>Kiaan couldn’t find that page</h3>
                        <p className="fs-3 fw-normal">We couldn’t find the page you were looking for.Visit  <Link to={"/"}>Waner’s home pages.</Link> </p>
                        
                </div>

        </div>
        )
}