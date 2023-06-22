import "./Card.css";
import companyLogo from "../../util/imgs/logo.png";
import { useEffect } from "react";

function Card(props) {
  useEffect(() => {
    console.log(props);
  }, [])
  //<img className="d-block w-100" src={companyLogo} alt="First slide" />
  return (
    <div className="item">
      <div className="card">

      </div>
      <h3>{props.data.title}</h3>
      <p>
        {props.data.description}
      </p>
      <a href="http://localhost:3000">Saiba mais</a>
    </div>
  );
}

export default Card;
