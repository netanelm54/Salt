import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Header from "./header";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { fetchData } from "../../actions";
import SectionsTable from "../common/sections-table/sections-table";
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
  const [piiOnly, setPiiOnly] = useState(false);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const filteredData = data && {
    ...data,
    request: {
      ...data.request,
      urlParams: data.request.urlParams.filter((r) => !piiOnly || r.pii),
      queryParams: data.request.queryParams.filter((r) => !piiOnly || r.pii),
      headers: data.request.headers.filter((r) => !piiOnly || r.pii),
      body: data.request.body.filter((r) => !piiOnly || r.pii),
    },
    response: {
      ...data.response,
      headers: data.response.headers.filter((r) => !piiOnly || r.pii),
      body: data.response.body.filter((r) => !piiOnly || r.pii),
    },
  };

  return (
    filteredData && (
      <Container>
        <Header data={filteredData} />
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
          <SearchTab piiOnly={piiOnly} setPiiOnly={setPiiOnly} />
          <SectionsTable
            columns={[
              { name: "name", label: "Name", size: 25 },
              {
                name: "pii",
                label: "PII",
                size: 10,
                type: "bool",
                color: "blue",
              },
              {
                name: "masked",
                label: "Masking",
                size: 55,
                type: "bool",
                color: "purple",
              },
              { name: "type", label: "Type", size: 10, type: "badge" },
            ]}
            data={tabIndex === 0 ? filteredData.request : filteredData.response}
          />
        </Body>
      </Container>
    )
  );
};

export default DashboardManager;
