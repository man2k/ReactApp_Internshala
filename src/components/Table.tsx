import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { fetchData } from "../utils/FetchData";
import { Post } from "../types/types";

const Table: React.FC = () => {
  const [data, setData] = useState<Post[]>([]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 10 },
    { field: "title", headerName: "Title", flex: 0.3 },
    { field: "body", headerName: "Body", flex: 1 },
  ];

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const result = await fetchData();
      setData(result);
    };

    fetchDataFromApi();
  }, []);

  return (
    <div className="w-full mx-auto p-10 bg-emerald-500">
      <label>
        <h1 className="text-4xl font-mono mb-2">POSTS</h1>
      </label>
      <div className="bg-violet-400 h-80">
        <DataGrid rows={data} columns={columns} className="" />
      </div>
    </div>
  );
};

export default Table;
