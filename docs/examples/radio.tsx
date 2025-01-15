import { Flex, Text, Radio } from '@site/components'

export default function RadioExample() {
  return (
    <Flex align="start" direction="column" gap="1">
      <Flex asChild gap="2">
        <Text as="label" size="2">
          <Radio name="example" value="1" defaultChecked />
          Default
        </Text>
      </Flex>

      <Flex asChild gap="2">
        <Text as="label" size="2">
          <Radio name="example" value="2" />
          Comfortable
        </Text>
      </Flex>

      <Flex asChild gap="2">
        <Text as="label" size="2">
          <Radio name="example" value="3" />
          Compact
        </Text>
      </Flex>
    </Flex>
  )
}
