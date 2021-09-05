import data from "./data.json";

export const fetchData = () => {
  return {
    type: "FETCH_DATA",
    payload: data,
  };
};
