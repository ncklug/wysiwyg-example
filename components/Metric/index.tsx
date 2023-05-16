import { Box } from '@mantine/core'
import { Text } from 'components/Text'
import { toPrecision } from 'utilFunctions/formatNumber'
import { IconArrowNarrowUp, IconArrowNarrowDown } from '@tabler/icons-react'

type MetricProps = {
  metric: number
  comparator: {
    metric: number
    label: string
  }
  changePrecision: number
}

export const Metric = ({
  metric,
  comparator,
  changePrecision,
}: MetricProps) => {
  const percentChange = (metric - comparator.metric) / comparator.metric
  const roundedValue = toPrecision(percentChange, changePrecision)
  const Icon = roundedValue >= 0 ? IconArrowNarrowUp : IconArrowNarrowDown

  return (
    <div>
      <div>
        <Text fz="xl" pr="sm" span>
          {metric}
        </Text>
        <Box
          sx={() => ({
            borderRadius: 4,
            backgroundColor: '#DFEFE5',
            color: '#008663',
            display: 'inline-flex',
            alignItems: 'center',
          })}
          component="span"
        >
          <Icon height="10px" />
          <Text span fz="xs" weight={700}>
            {roundedValue}%
          </Text>
        </Box>
      </div>
      <div>
        <Text fz="sm" color="#8A8A8A" span>
          vs {comparator.label}:{' '}
        </Text>
        <Text span>{comparator.metric}</Text>
      </div>
    </div>
  )
}
