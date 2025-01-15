import {
  Text,
  HoverCard,
  Box,
  Flex,
  Avatar,
  Heading,
  Link,
} from '@site/components'

export default function HoverCardExample() {
  return (
    <Text>
      Follow{' '}
      <HoverCard.Root>
        <HoverCard.Trigger>
          <Link href="#" target="_blank">
            @tangible
          </Link>
        </HoverCard.Trigger>
        <HoverCard.Content maxWidth="300px">
          <Flex gap="4">
            <Avatar
              size="3"
              fallback="R"
              radius="full"
              src="/demo/profile.png"
            />
            <Box>
              <Heading size="3" as="h3">
                Tangible
              </Heading>
              <Text as="div" size="2" color="gray" mb="2">
                @tangible
              </Text>
              <Text as="div" size="2">
                React components, icons, and colors for building high-quality,
                accessible UI.
              </Text>
            </Box>
          </Flex>
        </HoverCard.Content>
      </HoverCard.Root>{' '}
      for updates.
    </Text>
  )
}
