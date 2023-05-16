import { Box } from '@mantine/core'
import { Text } from 'components/Text'
import { toPrecision } from 'utilFunctions/formatNumber'
import { IconArrowUp, IconArrowDown } from '@tabler/icons-react'

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
  const Icon = roundedValue >= 0 ? IconArrowUp : IconArrowDown

  return (
    <div>
      <div>
        <Text fz="xl" pr={6} span>
          {metric}
        </Text>
        <Box
          sx={() => ({
            borderRadius: 4,
            backgroundColor: '#DFEFE5',
            color: '#008663',
            display: 'inline-flex',
            alignItems: 'center',
            lineHeight: '24px',
          })}
          component="span"
        >
          <Box mr={-4} ml={-4} component="span" display="inline-flex">
            <Icon height="14px" />
          </Box>
          <Text span fz="xs" weight={700} pr={2}>
            {roundedValue}%
          </Text>
        </Box>
      </div>
      <div>
        <Text fz="sm" color="#8A8A8A" span>
          vs {comparator.label}:{' '}
        </Text>
        <Text fz="sm" span>
          {comparator.metric}
        </Text>
      </div>
    </div>
  )
}
