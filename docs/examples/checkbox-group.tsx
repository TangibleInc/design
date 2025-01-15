import { CheckboxGroup } from '@site/components'

export default function CheckboxGroupExample() {
  return (
    <CheckboxGroup.Root defaultValue={['1']} name="example">
      <CheckboxGroup.Item value="1">Fun</CheckboxGroup.Item>
      <CheckboxGroup.Item value="2">Serious</CheckboxGroup.Item>
      <CheckboxGroup.Item value="3">Smart</CheckboxGroup.Item>
    </CheckboxGroup.Root>
  )
}
