import { Flex, Text, Checkbox } from '@site/components'

export default function CheckboxExample() {
  return (
    <Text as="label" size="2">
      <Flex gap="2">
        <Checkbox defaultChecked />
        Agree to Terms and Conditions
      </Flex>
    </Text>
  )
}
