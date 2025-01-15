import { Box, Button, Flex, Spinner } from '@site/components'

export default function SpinnerExample() {
  return (
    <>
      <Flex align="center" gap="4" my="4">
        <Spinner size="1" />
        <Spinner size="2" />
        <Spinner size="3" />
      </Flex>
      <Box my="4">
        <Button loading>Bookmark</Button>
      </Box>
    </>
  )
}
