import React from 'react'
import { JsxMetric, MetricProps } from 'components/Metric/JsxMetric'

export type ConfigMetricProps = MetricProps

export const ConfigMetric = (props: ConfigMetricProps) => {
  return <JsxMetric {...props} />
}
