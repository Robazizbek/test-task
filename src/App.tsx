import { useEffect, useState } from 'react';
import Search from './components/Search/Search';
import Table from './components/Table/Table';
import { TableItem } from './components/Table/types';
import  { CSAppWrapper } from './App.styled';

function App() {
  const [tableData, setTableData] = useState<TableItem[]>([]);
  const [filterString, setFilterString] = useState<string>('');


  useEffect(()=>{
    fetch('http://localhost:3001/data').then((res)=>{
      return res.json();
    }).then((data)=>{
      setTableData(data);
    }).catch((error)=>{
      console.log(error);
    })
  },[])

  return (
    <CSAppWrapper>
      <Search setFilterString={setFilterString}/>
      {tableData && <Table
        headers={{
          avatar: "Avatar",
          first_name: "First Name",
          last_name: "Last Name",
          email: "Email Address",
          ethereum_address: "Ethereum Address",
          ip_address: "IP Address",
        }}
        settings={{
          headerHeight: 50,
          rowHeight: 10,
          stripedRows: true,
        }}
        items={tableData}
        customRenderers={{
          avatar: (item) => (
            <img
              alt={item.avatar}
              src={item.avatar}
            />
          )
        }}
        filterString={filterString}
      />
      }
    </CSAppWrapper>
  );
}

export default App;
