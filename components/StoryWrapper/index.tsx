import { Box, Divider } from '@mantine/core'
import { Text } from 'components/Text'
import { BaseCard } from 'components/Card/Base'
import Link from 'next/link'
import { IconArrowLeft } from '@tabler/icons-react'

type StoriesWrapperProps = {
  children: React.ReactNode
}

type StoryWrapperProps = {
  children: React.ReactNode
  name: string
}

export const StoriesWrapper = ({ children }: StoriesWrapperProps) => {
  return (
    <Box
      sx={{
        backgroundColor: 'grey',
        minHeight: '100vh',
      }}
    >
      <Box sx={{ backgroundColor: 'white' }}>
        <Link href="/components">
          <IconArrowLeft height={12} />
          Back
        </Link>
      </Box>
      {children}
    </Box>
  )
}

export const StoryWrapper = ({ children, name }: StoryWrapperProps) => {
  return (
    <BaseCard p={0} m="xl">
      <Text ml="sm" fz="xl">
        {name}
      </Text>
      <Divider />
      {children}
    </BaseCard>
  )
}
