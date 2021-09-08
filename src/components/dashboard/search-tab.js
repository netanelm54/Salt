import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "../common/button";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const Content = styled.div`
  width: 100%;
  height: 42px;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 1px 1px 2px ${(props) => props.theme.colors.shadowGray};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Icon = styled(FontAwesomeIcon)`
  padding: 0 18px;
  color: ${(props) => props.theme.colors.gray};
  font-size: 17px;
`;
const SearchInput = styled.input`
  border: none;
  outline: none;
  :focus {
    border: none;
    outline: none;
  }
`;
const Seperator = styled.div`
  height: 26px;
  margin: 0 32px;
  border-right: 2px solid ${(props) => props.theme.colors.borderGray};
`;
const ApplyButton = styled(Button)`
  margin-left: 32px;
  height: 40px;
  width: 136px; ;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
`;
const Label = styled.label`
  font-size: 12px;
`;
const ResetButton = styled(Button)`
  padding: 4px 0;
  color: ${(props) => props.theme.colors.purple};
  font-weight: normal;
`;

const SearchTab = ({ data }) => {
  return (
    <Container>
      <Content>
        <Row>
          <Icon icon={faSearch} />
          <SearchInput type="text" name="search" placeholder="Search" />
        </Row>

        <Row>
          <Seperator />
          <input type="checkbox" name="piiCheck" id="piiCheck" />
          <Label for="piiCheck">Show PII only</Label>
          <ApplyButton purple fill>
            Apply
          </ApplyButton>
        </Row>
      </Content>
      <ResetButton>Reset Filter</ResetButton>
    </Container>
  );
};

export default SearchTab;
