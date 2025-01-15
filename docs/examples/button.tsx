import { Box, Button, Flex } from '@site/components'
import { BookmarkIcon } from '@radix-ui/react-icons'

export default function ButtonExample() {
  return (
    <>
      <Box my="4">
        <Button>
          <BookmarkIcon /> Bookmark
        </Button>
      </Box>

      <Flex gap="3" align="center" my="4">
        <Button size="1" variant="soft">
          Edit profile
        </Button>
        <Button size="2" variant="soft">
          Edit profile
        </Button>
        <Button size="3" variant="soft">
          Edit profile
        </Button>
      </Flex>

      <Flex align="center" gap="3" my="4">
        <Button variant="classic">Edit profile</Button>
        <Button variant="solid">Edit profile</Button>
        <Button variant="soft">Edit profile</Button>
        <Button variant="surface">Edit profile</Button>
        <Button variant="outline">Edit profile</Button>
      </Flex>

      <Flex gap="3" my="4">
        <Button color="indigo" variant="soft">
          Edit profile
        </Button>
        <Button color="cyan" variant="soft">
          Edit profile
        </Button>
        <Button color="orange" variant="soft">
          Edit profile
        </Button>
        <Button color="crimson" variant="soft">
          Edit profile
        </Button>
      </Flex>
      <Flex gap="3" my="4">
        <Button radius="none" variant="soft">
          Edit profile
        </Button>
        <Button radius="large" variant="soft">
          Edit profile
        </Button>
        <Button radius="full" variant="soft">
          Edit profile
        </Button>
      </Flex>

      <Flex gap="3" my="4">
        <Button variant="classic">
          <BookmarkIcon /> Bookmark
        </Button>
        <Button variant="solid">
          <BookmarkIcon /> Bookmark
        </Button>
        <Button variant="soft">
          <BookmarkIcon /> Bookmark
        </Button>
        <Button variant="surface">
          <BookmarkIcon /> Bookmark
        </Button>
        <Button variant="outline">
          <BookmarkIcon /> Bookmark
        </Button>
      </Flex>
    </>
  )
}
