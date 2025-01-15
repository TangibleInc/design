import { Text, Separator, Flex } from '@site/components'

export default function SeparatorExample() {
  return (
    <Text size="2">
      Tools for building high-quality, accessible UI.
      <Separator my="3" size="4" />
      <Flex gap="3" align="center">
        Themes
        <Separator orientation="vertical" />
        Primitives
        <Separator orientation="vertical" />
        Icons
        <Separator orientation="vertical" />
        Colors
      </Flex>
    </Text>
  )
}
