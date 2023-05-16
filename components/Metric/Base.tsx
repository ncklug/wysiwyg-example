import { BaseText } from 'components/Text/Base'
type BaseMetricProps = {
  metric: number
  comparator: {
    metric: number
    label: string
  }
}
export const BaseMetric = ({ metric, comparator }: BaseMetricProps) => {
  return (
    <div>
      <div>
        <BaseText fz="xl">{metric}</BaseText>
      </div>
      <div>
        <BaseText fz="sm">
          vs {comparator.label}: {comparator.metric}
        </BaseText>
      </div>
    </div>
  )
}
