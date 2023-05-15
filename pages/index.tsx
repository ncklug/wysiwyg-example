import React from 'react'

import Head from 'next/head'
import { Button } from '@mantine/core'
import { AgGridReact } from 'ag-grid-react'
import { AgChartsReact } from 'ag-charts-react'

import 'ag-grid-community/styles/ag-grid.css' // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css' // Optional theme CSS

const SAMPLE_DATA = [{ a: 'aa', b: 'bb', c: 'cc' }]
const COL_DEF = [
  { field: 'a', filter: true },
  { field: 'b', filter: true },
  { field: 'c' },
]
const DEFAULT_COL_DEF = {
  sortable: true,
}

const CHART_DATA = [
  {
    quarter: 'Q1',
    spending: 450,
  },
  {
    quarter: 'Q2',
    spending: 560,
  },
  {
    quarter: 'Q3',
    spending: 600,
  },
  {
    quarter: 'Q4',
    spending: 700,
  },
]

const CHART_OPTIONS = {
  data: CHART_DATA,
  series: [
    {
      xKey: 'quarter',
      yKey: 'spending',
    },
  ],
}

export default () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Button>hi</Button>

      <div className="ag-theme-alpine" style={{ width: 500, height: 500 }}>
        <AgGridReact
          rowData={SAMPLE_DATA} // Row Data for Rows
          columnDefs={COL_DEF} // Column Defs for Columns
          defaultColDef={DEFAULT_COL_DEF} // Default Column Properties
          animateRows={true} // Optional - set to 'true' to have rows animate when sorted
          rowSelection="multiple" // Options - allows click selection of rows
        />
      </div>
      <AgChartsReact options={CHART_OPTIONS} />
    </div>
  )
}
