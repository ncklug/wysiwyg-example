import { JsxMetric } from 'components/Metric/JsxMetric'
import { StoriesWrapper, StoryWrapper } from 'components/StoryWrapper'

export default () => {
  return (
    <StoriesWrapper>
      <StoryWrapper name="Basic Metric">
        <JsxMetric
          metric={97}
          comparator={{ label: 'last year', metric: 90 }}
          changePrecision={0}
        />
      </StoryWrapper>
    </StoriesWrapper>
  )
}
