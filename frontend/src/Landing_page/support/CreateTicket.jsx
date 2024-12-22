export default function CreateTicket() {
  return (
    <div className="container">
      <h5 className="text-muted">
        To create a ticket, select a relevant topic
      </h5>
      <div className="row mt-4 text-muted">
        <div className="col-4">
          <h5>
            <i
              class="fa-sharp-duotone fa-solid fa-square-plus"
              style={{ paddingRight: "5px" }}
            ></i>
            Account Opening
          </h5>
          <ul style={{listStyleType:"none"}} className="p-2">
            <li className="p-1">Getting started</li>
            <li className="p-1">Online</li>
            <li className="p-1">Offline</li>
            <li className="p-1">Charges</li>
            <li className="p-1">Company, Partnership and HUF</li>
            <li className="p-1">Non Resident Indian (NRI)</li>
          </ul>
        </div>
        <div className="col-4">
          <h5>
          <i class="fa-duotone fa-solid fa-user"
              style={{ paddingRight: "5px" }}
            ></i>
            Your Zerodha Account
          </h5>
          <ul style={{listStyleType:"none"}} className="p-2">
          <li className="p-1">Login credentials</li>
<li className="p-1">Your Profile</li>
<li className="p-1">Account modification and segment addition</li>
<li className="p-1">CMR & DP ID</li>
<li className="p-1">Nomination</li>
<li className="p-1">Transfer and conversion of shares</li>
          
          </ul>
        </div>
        <div className="col-4">
          <h5>
            <i
              class="fa-solid fa-money-bill-trend-up"
              style={{ paddingRight: "5px" }}
            ></i>
            Trading and Markets 
          </h5>
          <ul style={{listStyleType:"none"}} className="p-2">
        <li className="p-1">Trading FAQs</li>
<li className="p-1">Hub</li>
<li className="p-1">Margins</li>
<li className="p-1">Product and order types</li>
<li className="p-1">Corporate actions</li>
<li className="p-1">Hub features</li>
          </ul>
        </div>
      </div>
      <div className="row text-muted">
      <div className="col-4">
          <h5>
          <i class="fa-solid fa-wallet"
              style={{ paddingRight: "5px" }}
            ></i>
           Funds
          </h5>
          <ul style={{listStyleType:"none"}} className="p-2">
        <li className="p-1">Fund withdrawal</li>
<li className="p-1">Adding funds</li>
<li className="p-1">Adding bank accounts</li>
<li className="p-1">eMandates</li>
          
          </ul>
        </div><div className="col-4">
          <h5>
          <i class="fa-solid fa-feather"
              style={{ paddingRight: "5px" }}
            ></i>
           Hub
          </h5>
          <ul style={{listStyleType:"none"}} className="p-2">
        <li className="p-1">IPO</li>
<li className="p-1">Portfolio</li>
<li className="p-1">Funds statement</li>
<li className="p-1">Profile</li>
<li className="p-1">Reports</li>
<li className="p-1">Referral program</li>
          
          </ul>
        </div><div className="col-4">
          <h5>
          <i class="fa-solid fa-hand"
              style={{ paddingRight: "5px" }}
            ></i>
            Bloom       
          </h5>
          <ul style={{listStyleType:"none"}} className="p-2">
        <li className="p-1">Understanding mutual funds and Bloom</li>
<li className="p-1">Bloom app</li>
<li className="p-1">Bloom web</li>
<li className="p-1">Transactions and reports</li>
<li className="p-1">National Pension Scheme (NPS)</li>
          
          </ul>
        </div>
      </div>
    </div>
  );
}
