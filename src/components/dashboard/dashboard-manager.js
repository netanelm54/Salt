import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Header from "./header";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { fetchData } from "../../actions";

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;
const TabsContainer = styled.div`
  padding: 0 24px;
`;
const Body = styled.div`
  width: 100%;
  min-height: calc(100vh - 164px);
  background: ${(props) => props.theme.colors.background};
  box-shadow: inset 0px 2px 3px -3px ${(props) => props.theme.colors.black};
`;

const DashboardManager = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    data && (
      <Container>
        <Header data={data} />
        <TabsContainer>
          <Tabs
            value={tabIndex}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="Request" />
            <Tab label="Response" />
          </Tabs>
        </TabsContainer>
        <Body>{tabIndex}</Body>
      </Container>
    )
  );
};

DashboardManager.propTypes = {};

export default DashboardManager;
