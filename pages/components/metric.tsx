import { Metric } from 'components/Metric'
import { StoryWrapper } from 'components/StoryWrapper'

export default () => {
  return (
    <StoryWrapper>
      <Metric
        metric={97}
        comparator={{ label: 'last year', metric: 90 }}
        changePrecision={0}
      />
    </StoryWrapper>
  )
}
