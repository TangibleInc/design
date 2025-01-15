import {
  TextField
} from '@site/components'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

export default function TextFieldExample() {
  return (
    <TextField.Root placeholder="Search the docs…">
      <TextField.Slot>
        <MagnifyingGlassIcon height="16" width="16" />
      </TextField.Slot>
    </TextField.Root>
  )
}
