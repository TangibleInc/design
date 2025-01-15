import { TabNav } from '@site/components'

export default function TabsExample() {
  return (
    <TabNav.Root>
      <TabNav.Link href="#" active>
        Account
      </TabNav.Link>
      <TabNav.Link href="#">Documents</TabNav.Link>
      <TabNav.Link href="#">Settings</TabNav.Link>
    </TabNav.Root>
  )
}
