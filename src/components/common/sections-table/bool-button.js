import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../button";
import { useState } from "react";

const Container = styled(Button)`
  width: 60px;
  height: 16px;
`;

const BoolButton = ({ value, blue, purple, isOn }) => {
  const [fill, setFill] = useState(isOn);

  return (
    <Container
      onClick={() => {
        setFill(!fill);
      }}
      blue={blue}
      purple={purple}
      fill={fill}
    >
      {value}
    </Container>
  );
};

BoolButton.BoolButton = {
  value: PropTypes.string,
  blue: PropTypes.bool,
  purple: PropTypes.bool,
  isOn: PropTypes.bool,
};

export default BoolButton;
