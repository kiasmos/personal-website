import { Link } from "react-router-dom/cjs/react-router-dom.min";
import portimg from "../assets/port1.svg";

export default function Portfolios() {
  return (
    <>
      <div className="portfolios">
        <div className="portfolio-card">
          <img src={portimg} alt="" />
          <div className="card-body">
            <div className="card-title">There is more than you know</div>
            <div className="card-des">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </div>
            <Link to=""> Read more</Link>
          </div>
        </div>
      
      </div>
    </>
  );
}
