import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import EmployeeTable from "../EmployeeTable";
import styled from "styled-components";

const StyledApp = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #212121;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

function App() {
  const [{ data, isLoading, isError }, doFetch] = useFetch();

  useEffect(() => {
    doFetch("http://localhost:3500/api/employees");
  }, [doFetch]);

  return (
    <StyledApp>
      {isError ? (
        <div>Something went wrong ...</div>
      ) : (
        <div>
          {isLoading ? <div>Loading...</div> : <EmployeeTable rows={data} />}
        </div>
      )}
    </StyledApp>
  );
}

export default App;
