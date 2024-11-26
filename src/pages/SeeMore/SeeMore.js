import "./seeMore.css";
import { Link } from "react-router-dom";

function SeeMore() {
  return (
    <div className='Maincontainer'>
      <div className='header'>
        <h1>All products</h1>
      </div>
      <div className='AllProducts'>
        <h1>kartice</h1>
      </div>
      <Link to={"/"}>idi nazad</Link>
    </div>
  );
}

export default SeeMore;
