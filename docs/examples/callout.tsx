import { Callout } from '@site/components'
import { InfoCircledIcon } from '@radix-ui/react-icons'

export default function CalloutExample() {
  return (
    <Callout.Root>
      <Callout.Icon>
        <InfoCircledIcon />
      </Callout.Icon>
      <Callout.Text>
        You will need admin privileges to install and access this application.
      </Callout.Text>
    </Callout.Root>
  )
}
