import Menu from "./Menu";
import "./TopBar.css"
export default function Topbar() {
  return (
    <div className="Topbar">
      <div className="indices">
        <div className="nasdaq">
          <p className="index">NASDAQ</p>
          <p className="index-points">{13650.3} </p>
          <p className="percent"> </p>
        </div>
        <div className="dowjones">
          <p className="index">DOW JONES</p>
          <p className="index-points">{38500.6}</p>
          <p className="percent"></p>
        </div>
      </div>
      <Menu />
    </div>
  );
}
