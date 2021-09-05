import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchData } from "../../actions";

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

const DashboardManager = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return <Container>Hello</Container>;
};

DashboardManager.propTypes = {};

export default DashboardManager;
