export default function Summary({username}) {
  return (
    <div className="section">
      <div className="row m-0 p-0" style={{borderBottom:"1px solid #9eadbd"}}>
        <h3 style={{ fontWeight: "400" }}>Hii, {username}</h3>
      </div>
      <div className="row mt-3 p-4">
        <h5>
          {" "}
          <i class="fa-solid fa-chart-pie p-2"></i>
          Equity
        </h5>

        <div className="data row"style={{borderBottom:"1px solid #9eadbd"}}>
        <div className="col-6">
          <div className="first" style={{borderRight:"1px solid #9eadb6"}} >
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
        </div>
        <div className="col-6" >

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
        </div>
          </div>
        </div>
        <div className="section mt-3">
        <span>
          <h5><i class="fa-solid fa-briefcase"></i> Holdings (13)</h5>
        </span>

        <div className="data row" style={{borderBottom:"1px solid #9eadb6"}}>
                <div className="col-6">

          <div className="first" style={{borderRight:"1px solid #9eadbd"}}>
            <h3 className="profit">
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
                </div>
          </div>
                <div className="col-6">
          <div className="second  ">

            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
                </div>
          </div>
        </div>
        
      </div>
      </div>
    </div>

  );
}
