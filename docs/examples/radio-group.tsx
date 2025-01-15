import { RadioGroup } from '@site/components'

export default function RadioGroupExample() {
  return (
    <RadioGroup.Root defaultValue="1" name="example">
      <RadioGroup.Item value="1">Default</RadioGroup.Item>
      <RadioGroup.Item value="2">Comfortable</RadioGroup.Item>
      <RadioGroup.Item value="3">Compact</RadioGroup.Item>
    </RadioGroup.Root>
  )
}
