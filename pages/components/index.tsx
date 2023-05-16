// TODO(nathan): Figure out how to autogenerate this

import Link from 'next/link'

const ROUTES = ['metric']
export default () => {
  return (
    <div>
      {ROUTES.map(route => (
        <Link key={route} href={`/components/${route}`}>
          {route}
        </Link>
      ))}
    </div>
  )
}
