import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Header from "./header";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { fetchData } from "../../actions";
import SectionsTable from "../common/sections-table";
import SearchTab from "./search-tab";

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;
const TabsContainer = styled.div`
  padding: 0 24px;
`;
const Body = styled.div`
  width: calc(100% - 48px);
  min-height: calc(100vh - 244px);
  background: ${(props) => props.theme.colors.background};
  box-shadow: inset 0px 2px 3px -3px ${(props) => props.theme.colors.black};
  padding: 40px 24px;
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
        <Body>
          <SearchTab />
          <SectionsTable data={tabIndex === 0 ? data.request : data.response} />
        </Body>
      </Container>
    )
  );
};

export default DashboardManager;
