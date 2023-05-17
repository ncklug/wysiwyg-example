import { ConfigMetric, ConfigMetricProps } from 'components/Metric/ConfigMetric'
import React from 'react'

type ConfigElementProps = { type: 'metric'; props: ConfigMetricProps }

export const RootConfigElement = ({ type, props }: ConfigElementProps) => {
  if (type === 'metric') {
    return <ConfigMetric {...props} />
  }
  return null
}
