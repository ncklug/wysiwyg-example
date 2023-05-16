import { BaseCard } from 'components/Card/Base'

type StoryWrapperProps = {
  children: React.ReactNode
}

export const StoryWrapper = ({ children }: StoryWrapperProps) => {
  return <BaseCard p="xl">{children}</BaseCard>
}
