import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  height: 35px;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 1px 1px 2px ${(props) => props.theme.colors.shadowGray};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 54px;
`;
const Col = styled.div`
  width: ${(props) => `${props.size}%`};
  font-size: 12px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.pink};
`;

const Header = ({ columns }) => {
  return (
    <Container>
      {columns.map((col) => (
        <Col size={col.size}>{col.label.toUpperCase()}</Col>
      ))}
    </Container>
  );
};

Header.propTypes = {
  columns: PropTypes.object,
};

export default Header;
