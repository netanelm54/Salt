import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  padding: 24px;
`;
const Row = styled.div`
  padding: 0 16px;
  display: flex;
  align-items: baseline;
`;
const Method = styled.div`
  color: ${(props) => props.theme.colors.pink};
  font-size: 16px;
`;
const Path = styled.div`
  color: ${(props) => props.theme.colors.purple};
  font-size: 24px;
  padding-left: 12px;
  font-weight: bold;
`;
const Api = styled.div`
  padding: 0 16px;
  color: ${(props) => props.theme.colors.purple};
  font-size: 14px;
  padding-top: 8px;
`;
const Seperator = styled.div`
  width: 100%;
  padding-top: 24px;
  border-bottom: 1px solid #ebebeb;
  color: ${(props) => props.theme.colors.borderGray};
`;
const Icon = styled(FontAwesomeIcon)`
  font-size: 10px;
  padding: 0 6px;
`;

const Header = ({ data }) => {
  return (
    <Container>
      <Row>
        <Method>{data.method.toUpperCase()}</Method>
        <Path>{data.path}</Path>
      </Row>
      <Api>
        <b>
          All APIs
          <Icon icon={faChevronRight} />
          {data.api}
          <Icon icon={faChevronRight} />
        </b>{" "}
        {data.path}
      </Api>
      <Seperator />
    </Container>
  );
};

Header.propTypes = {
  data: PropTypes.object,
};

export default Header;
