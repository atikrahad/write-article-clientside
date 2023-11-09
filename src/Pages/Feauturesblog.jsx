import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const Feauturesblog = () => {
  const [loadfeautured, setLoadfeautured] = useState([]);
  

  useEffect(() => {
    fetch("http://localhost:5000/feautured")
      .then((res) => res.json())
      .then((data) => setLoadfeautured(data));
  }, []);

  let num = 1;
  loadfeautured.map((data) => (data.serial = num++));

  console.log(loadfeautured);

  const columns = [
    {
      name: "Serial No",
      selector: (row) => row.serial,
      
    },
    {
      name: "Blog Title",
      selector: (row) => row.title,
    },
    {
      name: "Auther Name",
      selector: (row) => row.name,
    },
    {
      name: "Auther Image",
      selector: (row) => (
        <img className="w-10 rounded-full" src={row.pic}></img>
      ),
    },
  ];

  return (
    <div className="mx-auto max-w-7xl w-[90vw]">
      <DataTable
      className="w-[90%]"
        title="Top learge 10 blogs"
        columns={columns}
        highlightOnHover
        
        responsive
        
        
        data={loadfeautured}
      ></DataTable>
    </div>
  );
};

export default Feauturesblog;
