import { Flex, Slider } from '@site/components'

export default function SliderExample() {
  return (
    <Flex direction="column" gap="4" maxWidth="300px">
      <Slider defaultValue={[25]} size="1" />
      <Slider defaultValue={[50]} size="2" />
      <Slider defaultValue={[75]} size="3" />
    </Flex>
  )
}
