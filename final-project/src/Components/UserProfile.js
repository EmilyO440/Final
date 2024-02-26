import { Col, Button } from "react-bootstrap";
import Badge from "./Components/Badge.js";
import { useState } from "react";

function UserProfile({ user }) {
  const { name, avatar, phone, id, teams } = user;
  const [badgeStatus, setBadgeStatus] = useState(false);

  function handleClick() {
    console.log("button to show teams was clicked: ", badgeStatus);
    setBadgeStatus(!badgeStatus);
    console.log(badgeStatus);
  }
  return (
    <Col key={id} className="p-2 text-center border border-1 rounded-4 m-1">
      <img src={avatar} alt={name} className="img-fluid rounded-circle Image" />
      <h1 className="fs-4">{name}</h1>
      <p>{phone}</p>
      <Button variant="secondary" onClick={() => handleClick()}>
        Show Teams
      </Button>
      <div className={badgeStatus ? "" : "d-none"}>
        <Badge teams={teams} />
      </div>
    </Col>
  );
}

export default UserProfile;