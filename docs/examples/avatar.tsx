import { Flex, Avatar } from '@site/components'

export default function AvatarExample() {
  return (
    <Flex gap="2">
      <Avatar src="/demo/profile.png" fallback="A" />
      <Avatar fallback="A" />
    </Flex>
  )
}
