import Menu from "./Menu";
import "./TopBar.css"
export default function Topbar() {
  return (
    <div className="Topbar">
      <div className="indices">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>
      <Menu />
    </div>
  );
}
