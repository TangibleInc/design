// https://react-spectrum.adobe.com/react-aria/ColorPicker.html
import React from 'react'
import {
  Button,
  ColorArea,
  ColorField,
  ColorPicker,
  ColorSlider,
  ColorThumb,
  Input,
  Label,
  SliderOutput,
  SliderTrack,
  type ColorAreaProps,
  type ColorFieldProps,
  type ColorSliderProps,
} from 'react-aria-components'
import {} from 'react-aria-components'
import './color-picker.scss'

function MyColorArea(props: ColorAreaProps) {
  return (
    <ColorArea {...props}>
      <ColorThumb />
    </ColorArea>
  )
}

function MyColorField(props: ColorFieldProps) {
  return (
    <ColorField defaultValue="#ff0" {...props}>
      <Label>Hex</Label>
      <Input />
    </ColorField>
  )
}

function MyColorSlider(props: ColorSliderProps) {
  return (
    <ColorSlider
      colorSpace="hsl"
      channel="hue"
      defaultValue="hsl(0, 100%, 50%)"
      {...props}
    >
      <Label />
      <SliderOutput />
      <SliderTrack>
        <ColorThumb />
      </SliderTrack>
    </ColorSlider>
  )
}

export default function ColorPickerExample() {
  return (
    <ColorPicker defaultValue="#5100FF">
      <MyColorArea
        colorSpace="hsb"
        xChannel="saturation"
        yChannel="brightness"
      />
      <MyColorSlider colorSpace="hsb" channel="hue" />
      <MyColorField />
    </ColorPicker>
  )
}
