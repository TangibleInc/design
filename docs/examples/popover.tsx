import {
  Avatar,
  Box,
  Button,
  Flex,
  Text,
  TextArea,
  Checkbox,
  Popover,
} from '@site/components'
import { ChatBubbleIcon } from '@radix-ui/react-icons'

export default function PopoverExample() {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button variant="soft">
          <ChatBubbleIcon width="16" height="16" />
          Comment
        </Button>
      </Popover.Trigger>
      <Popover.Content width="360px">
        <Flex gap="3">
          <Avatar
            size="2"
            src="/demo/profile.png"
            fallback="A"
            radius="full"
          />
          <Box flexGrow="1">
            <TextArea placeholder="Write a comment…" style={{ height: 80 }} />
            <Flex gap="3" mt="3" justify="between">
              <Flex align="center" gap="2" asChild>
                <Text as="label" size="2">
                  <Checkbox />
                  <Text>Send to group</Text>
                </Text>
              </Flex>

              <Popover.Close>
                <Button size="1">Comment</Button>
              </Popover.Close>
            </Flex>
          </Box>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  )
}
