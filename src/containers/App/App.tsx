import React, { useState, useEffect } from "react";
import { BASE_URL, useMockData } from "../../config";
import Table from "../../components/Table/Table";
import { dataListMock } from "../../mocks/tableData.mock";

interface Paginated<T> {
  data: T[];
  total: number;
}

const fetchData = async (page: number): Promise<Paginated<object>> => {
  try {
    const response = await fetch(`${BASE_URL}/page${page}`);
    const totalResponse = await fetch(`${BASE_URL}/total`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const total = await totalResponse.json();
    return { data, total };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { data: [], total: 0 };
  }
};

const App = () => {
  const [data, setData] = useState<object[]>([]);
  const [total, setTotal] = useState<number>();
  const [loading, setLoading] = useState(true);
  const [selectedRows, setSelectedRows] = useState<object[]>([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const [totalEntries, setTotalEntries] = useState(0);

  /* Reviewer Note:
    Functions to handle moving to the next page and the previous page
  */
  const handleNextPage = () => {
    const nextPage = page + 1;
    setPage(nextPage);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      const previousPage = page - 1;
      setPage(previousPage);
    }
  };

  useEffect(() => {
    /* Reviewer Note: If useMockData is true, I'll use mock data and set the total entries*/
    if (useMockData) {
      setData(dataListMock);
      setTotalEntries(dataListMock.length);
      setLoading(false);
    } else {
      /* Reviewer Note:
        If useMockData is false, I'll fetch data from the mock API
        and set the state based on the API response
      */
      fetchData(page)
        .then((result) => {
          setData(result.data);
          setTotal(result.total);
          setTotalEntries(result.total);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }
  }, [page]);

  const getSelectedRows = () => {
    return selectedRows;
  };

  /* Reviewer Note:
    Determine the columns to be displayed based on data structure
  */
  const columns = (
    data && data.length > 0 ? Object.keys(data[0]) : []
  ) as (keyof (typeof data)[0])[];

  return (
    <div className="App">
      <h1>Custom Table Component</h1>
      {loading ? (
        <p>Loading data...</p>
      ) : data && data.length > 0 ? (
        <Table
          data={data}
          useMockData={useMockData}
          currentPage={page}
          columns={columns}
          /* Reviewer Note: 
            Users have the flexibility to pass custom headers or customize the columns. 
            The 'customHeader' prop can be used to define a custom table header. 
            The 'customColumnHeaders' prop allows users to specify their own column headers,
            which will replace the columns of data provided from the API or mock data. 
          */
          // customHeader={<h2>Custom Table Header</h2>}
          customColumnHeaders={columns}
          pagination={true}
          itemsPerPage={itemsPerPage}
          totalEntries={totalEntries}
          selectedRows={selectedRows}
          getSelectedRows={getSelectedRows}
          setSelectedRows={setSelectedRows}
          onNextPage={handleNextPage}
          onPreviousPage={handlePreviousPage}
        />
      ) : (
        <p data-testid="no-data-message">No data available.</p>
      )}
    </div>
  );
};

export default App;
