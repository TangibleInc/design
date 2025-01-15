import { ContextMenu, Flex, Grid, Text } from '@site/components'

export default function ContextMenuExample() {
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <RightClickZone style={{ height: 150 }} />
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item shortcut="⌘ E">Edit</ContextMenu.Item>
        <ContextMenu.Item shortcut="⌘ D">Duplicate</ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item shortcut="⌘ N">Archive</ContextMenu.Item>

        <ContextMenu.Sub>
          <ContextMenu.SubTrigger>More</ContextMenu.SubTrigger>
          <ContextMenu.SubContent>
            <ContextMenu.Item>Move to project…</ContextMenu.Item>
            <ContextMenu.Item>Move to folder…</ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item>Advanced options…</ContextMenu.Item>
          </ContextMenu.SubContent>
        </ContextMenu.Sub>

        <ContextMenu.Separator />
        <ContextMenu.Item>Share</ContextMenu.Item>
        <ContextMenu.Item>Add to favorites</ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item shortcut="⌘ ⌫" color="red">
          Delete
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Root>
  )
}

type RightClickZoneProps = React.ComponentPropsWithoutRef<typeof Grid> & {
  title?: string
}

export function RightClickZone({ title, style, ...props }: RightClickZoneProps) {
  return (
    <Grid
      {...props}
      style={{
        height: 100,
        placeItems: 'center',
        border: '1px dashed var(--accent-a6)',
        backgroundColor: 'var(--accent-a2)',
        borderRadius: 'var(--radius-3)',
        cursor: 'default',
        ...style,
      }}
    >
      <Flex direction="column" align="center">
        {title && (
          <Text weight="bold" size="2">
            {title}
          </Text>
        )}
        <Text color="gray" size={title ? '2' : undefined}>
          Right-click here
        </Text>
      </Flex>
    </Grid>
  )
}
