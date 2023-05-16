import React from 'react'

import Head from 'next/head'
import { Button, Card } from '@mantine/core'
import Link from 'next/link'

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
      <Link href="/components">Components</Link>
    </div>
  )
}
