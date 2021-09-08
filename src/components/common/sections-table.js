import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const SectionsTable = ({ className }) => {
  return <Container className={className}>Hello</Container>;
};

SectionsTable.propTypes = {
  className: PropTypes.string,
};

export default SectionsTable;
