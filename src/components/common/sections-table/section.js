import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { ApiSections } from "../../../constants";
import { useState } from "react";
import BoolButton from "./bool-button";
const Container = styled.div`
  padding: 12px 16px;
`;
const Picker = styled.div`
  margin-bottom: ${(props) => (props.isOpen ? "12px" : 0)};
`;
const Icon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.colors.purple};
  font-size: 10px;
  padding: 1px 3px;
  background: ${(props) => props.theme.colors.lightGray};
  border-radius: 20px;
  padding: ${(props) => (props.isOpen ? "1px 3px" : "1px 4.3px")};
`;
const PickerName = styled.span`
  font-size: 13px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.darkGray};
`;
const Row = styled.div`
  height: 50px;
  padding: 0 38px;
  margin: 4px 0;
  background: ${(props) => props.theme.colors.white};
  box-shadow: -1px 1px 3px ${(props) => props.theme.colors.shadowGray};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Col = styled.div`
  width: ${(props) => `${props.size}%`};
  font-size: 12px;
  color: ${(props) => props.theme.colors.blue};
`;
const Badge = styled.div`
  height: 18px;
  width: 65px;
  background: ${(props) => props.theme.colors.lightNavy};
  color: ${(props) => props.theme.colors.navy};
  padding: 0 8px;
  font-weight: bold;
  text-align: center;
`;

const Section = ({ name, columns, rows }) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderCol = (col, value) => {
    switch (col.type) {
      case "bool":
        return (
          <BoolButton
            value={col.name.toUpperCase()}
            isOn={value}
            blue={col.color === "blue"}
            purple={col.color === "purple"}
          />
        );
      case "badge":
        return <Badge>{value.toUpperCase()}</Badge>;
      default:
        return value;
    }
  };

  return (
    <Container>
      <Picker isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <Icon isOpen={isOpen} icon={isOpen ? faCaretDown : faCaretRight} />
        <PickerName>{ApiSections[name]}</PickerName>
      </Picker>
      {isOpen &&
        rows.map((row) => (
          <Row>
            {columns.map((col) => (
              <Col size={col.size}>{renderCol(col, row[col.name])}</Col>
            ))}
          </Row>
        ))}
    </Container>
  );
};

Section.propTypes = {
  name: PropTypes.string,
  columns: PropTypes.object,
  rows: PropTypes.array,
};

export default Section;
