import { Metric } from 'components/Metric'
import { StoriesWrapper, StoryWrapper } from 'components/StoryWrapper'

export default () => {
  return (
    <StoriesWrapper>
      <StoryWrapper name="Basic Metric">
        <Metric
          metric={97}
          comparator={{ label: 'last year', metric: 90 }}
          changePrecision={0}
        />
      </StoryWrapper>
    </StoriesWrapper>
  )
}
