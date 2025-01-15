import { Box, CheckboxCards, Flex, Text } from '@site/components'

export default function CheckboxCardsExample() {
  return (
    <Box maxWidth="600px">
      <CheckboxCards.Root
        defaultValue={['1']}
        columns={{ initial: '1', sm: '3' }}
      >
        <CheckboxCards.Item value="1">
          <Flex direction="column" width="100%">
            <Text weight="bold">A1 Keyboard</Text>
            <Text>US Layout</Text>
          </Flex>
        </CheckboxCards.Item>
        <CheckboxCards.Item value="2">
          <Flex direction="column" width="100%">
            <Text weight="bold">Pro Mouse</Text>
            <Text>Zero-lag wireless</Text>
          </Flex>
        </CheckboxCards.Item>
        <CheckboxCards.Item value="3">
          <Flex direction="column" width="100%">
            <Text weight="bold">Lightning Mat</Text>
            <Text>Wireless charging</Text>
          </Flex>
        </CheckboxCards.Item>
      </CheckboxCards.Root>
    </Box>
  )
}
