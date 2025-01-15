import { Flex, Badge } from '@site/components'

export default function BadgeExample() {
  return (
    <>
      <Flex gap="2" my="4">
        <Badge color="orange">In progress</Badge>
        <Badge color="blue">In review</Badge>
        <Badge color="green">Complete</Badge>
      </Flex>

      <Flex align="center" gap="2" my="4">
        <Badge size="1" color="indigo">
          New
        </Badge>
        <Badge size="2" color="indigo">
          New
        </Badge>
        <Badge size="3" color="indigo">
          New
        </Badge>
      </Flex>

      <Flex gap="2" my="4">
        <Badge variant="solid" color="indigo">
          New
        </Badge>
        <Badge variant="soft" color="indigo">
          New
        </Badge>
        <Badge variant="surface" color="indigo">
          New
        </Badge>
        <Badge variant="outline" color="indigo">
          New
        </Badge>
      </Flex>

      <Flex gap="2" my="4">
        <Badge color="indigo">New</Badge>
        <Badge color="cyan">New</Badge>
        <Badge color="orange">New</Badge>
        <Badge color="crimson">New</Badge>
      </Flex>

      <Flex gap="2" my="4">
        <Badge variant="solid" radius="none" color="indigo">
          New
        </Badge>
        <Badge variant="solid" radius="large" color="indigo">
          New
        </Badge>
        <Badge variant="solid" radius="full" color="indigo">
          New
        </Badge>
      </Flex>
    </>
  )
}
