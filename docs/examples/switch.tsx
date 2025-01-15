import { Box, Flex, Switch, Text } from '@site/components'

export default function SwitchExample() {
  return (
    <>
      <Box my="4">
        <Switch defaultChecked />
      </Box>

      <Flex align="center" gap="2" my="4">
        <Switch size="1" defaultChecked />
        <Switch size="2" defaultChecked />
        <Switch size="3" defaultChecked />
      </Flex>

      <Flex direction="column" gap="3" my="4">
        <Text as="label" size="2">
          <Flex gap="2">
            <Switch size="1" defaultChecked /> Sync settings
          </Flex>
        </Text>

        <Text as="label" size="3" my="4">
          <Flex gap="2">
            <Switch size="2" defaultChecked /> Sync settings
          </Flex>
        </Text>

        <Text as="label" size="4" my="4">
          <Flex gap="2">
            <Switch size="3" defaultChecked /> Sync settings
          </Flex>
        </Text>
      </Flex>

      <Flex gap="2">
        <Switch color="indigo" defaultChecked />
        <Switch color="cyan" defaultChecked />
        <Switch color="orange" defaultChecked />
        <Switch color="crimson" defaultChecked />
      </Flex>
    </>
  )
}
