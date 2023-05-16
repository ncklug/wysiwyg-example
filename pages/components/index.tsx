// TODO(nathan): Figure out how to autogenerate this

import { Paper } from '@mantine/core'
import Link from 'next/link'

const ROUTES = ['metric']
export default () => {
  return (
    <Paper m="xl">
      Components:
      <ul>
        {ROUTES.map(route => (
          <li key={route}>
            <Link href={`/components/${route}`}>{route}</Link>
          </li>
        ))}
      </ul>
    </Paper>
  )
}
