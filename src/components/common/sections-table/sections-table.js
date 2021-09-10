import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "./header";
import Section from "./section";

const Container = styled.div`
  width: 100%;
  margin: 26px 0;
`;
const Body = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 1px 1px 2px ${(props) => props.theme.colors.shadowGray};
  margin-top: 1px;
`;

const SectionsTable = ({ className, columns, data }) => {
  return (
    <Container className={className}>
      <Header columns={columns} />
      <Body>
        {Object.keys(data).map((key) => (
          <Section name={key} columns={columns} rows={data[key]} />
        ))}
      </Body>
    </Container>
  );
};

SectionsTable.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.object,
  data: PropTypes.object,
};

export default SectionsTable;
