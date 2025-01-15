import { Box, Card, Flex, Avatar, Text } from '@site/components'

export default function CardExample() {
  return (
    <Box maxWidth="240px">
      <Card>
        <Flex gap="3" align="center">
          <Avatar size="3" src="/demo/profile.png" radius="full" fallback="T" />
          <Box>
            <Text as="div" size="2" weight="bold">
              Teodros Girmay
            </Text>
            <Text as="div" size="2" color="gray">
              Engineering
            </Text>
          </Box>
        </Flex>
      </Card>
    </Box>
  )
}
