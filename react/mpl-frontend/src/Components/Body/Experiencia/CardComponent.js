import {Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import "holderjs";
import companyLogo from "../../util/imgs/logo.png";
import { useEffect } from "react";

function CardComponent(props) {
  //<img className="d-block w-100" src={companyLogo} alt="First slide" />
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text>
          {props.data.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
