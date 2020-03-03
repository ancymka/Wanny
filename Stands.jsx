import React from "react";

import Stand from "../Components/Stand/Stand";
import { Row } from "react-bootstrap";

const Stands = props => {
  const renderStands = () => {
    const NR_OF_STANDS = 15;
    let stands = [];

    for (let i = 0; i < NR_OF_STANDS; i++) {
      stands.push(<Stand index={i + 1} />);
    }

    return <Row>{stands}</Row>;
  };

  return <div>{renderStands()}</div>;
};

export default Stands;
