import { Tooltip, IconButton } from '@site/components'
import { PlusIcon } from '@radix-ui/react-icons'

export default function TooltipExample() {
  return (
    <Tooltip content="Add to library">
      <IconButton radius="full">
        <PlusIcon />
      </IconButton>
    </Tooltip>
  )
}
