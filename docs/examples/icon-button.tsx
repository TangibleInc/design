import { Flex, IconButton } from '@site/components'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

export default function IconButtonExample() {
  return (
    <>
      <IconButton>
        <MagnifyingGlassIcon width="18" height="18" />
      </IconButton>

      <Flex align="center" gap="3" my="4">
        <IconButton size="1" variant="soft">
          <MagnifyingGlassIcon width="15" height="15" />
        </IconButton>

        <IconButton size="2" variant="soft">
          <MagnifyingGlassIcon width="18" height="18" />
        </IconButton>

        <IconButton size="3" variant="soft">
          <MagnifyingGlassIcon width="22" height="22" />
        </IconButton>
      </Flex>

      <Flex gap="3" my="4">
        <IconButton radius="none" variant="soft">
          <MagnifyingGlassIcon width="18" height="18" />
        </IconButton>
        <IconButton radius="large" variant="soft">
          <MagnifyingGlassIcon width="18" height="18" />
        </IconButton>
        <IconButton radius="full" variant="soft">
          <MagnifyingGlassIcon width="18" height="18" />
        </IconButton>
      </Flex>

      <Flex gap="3" my="4">
        <IconButton color="crimson" variant="soft">
          <MagnifyingGlassIcon width="18" height="18" />
        </IconButton>
        <IconButton color="indigo" variant="soft">
          <MagnifyingGlassIcon width="18" height="18" />
        </IconButton>
        <IconButton color="grass" variant="soft">
          <MagnifyingGlassIcon width="18" height="18" />
        </IconButton>
        <IconButton color="orange" variant="soft">
          <MagnifyingGlassIcon width="18" height="18" />
        </IconButton>
      </Flex>
    </>
  )
}
