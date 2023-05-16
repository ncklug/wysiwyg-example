import React from 'react'
import { BaseCard } from 'components/Card/Base'
import { Grid } from 'components/Grid/Base'
import { throwNotImplemented } from 'utilFunctions/throwNotImplemented'

type GridCardProps = {
  cols: Array<
    {
      type: 'gridCol'
    } & React.ComponentProps<typeof Grid['Col']>
  >
}

type SimpleCardProps =
  | ({
      type: 'grid'
    } & GridCardProps)
  | {
      type: 'chart'
    }

const GridCard = ({ cols }: GridCardProps) => {}

export const SimpleCard = (props: SimpleCardProps) => {
  if (props.type === 'grid') {
  } else {
    throwNotImplemented()
  }
}
