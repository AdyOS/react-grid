import React from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

function App() {
  const COLUMNS_COUNT = 1000;
  const columnDefs = [{ headerName: '0', field: '0', rowDrag: true }];
  const rowData = [];

  for (let i = 1; i < COLUMNS_COUNT; i++) {
    columnDefs.push({
      headerName: i + '',
      field: i + '',
    });

    rowData.push({ ...(new Array(COLUMNS_COUNT)).fill(i + '') });
  }

  const gridOptions = {
    defaultColDef: {
      width: 150,
      sortable: true,
      filter: true
    },
    rowDragManaged: true,
    columnDefs: columnDefs,
    animateRows: true
  };

  return (
    <div className="ag-theme-balham" style={{ height: '600px', width: '100%' }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        gridOptions={gridOptions}
      >
      </AgGridReact>
    </div>
  );
}

export default App;
