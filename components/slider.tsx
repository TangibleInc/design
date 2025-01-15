import * as React from 'react';
import classNames from 'classnames';
import * as SliderPrimitive from '@radix-ui/react-slider';

import { sliderPropDefs } from './slider.props';
import { extractProps } from '../helpers/extract-props';
import { marginPropDefs } from '../props/margin.props';

import type { MarginProps } from '../props/margin.props';
import type { ComponentPropsWithout } from '../helpers/component-props';
import type { GetPropDefTypes } from '../props/prop-def';

type SliderElement = React.ElementRef<typeof SliderPrimitive.Root>;
type SliderOwnProps = GetPropDefTypes<typeof sliderPropDefs>;
interface SliderProps
  extends ComponentPropsWithout<
      typeof SliderPrimitive.Root,
      'asChild' | 'color' | 'children' | 'defaultChecked'
    >,
    MarginProps,
    SliderOwnProps {}
const Slider = React.forwardRef<SliderElement, SliderProps>((props, forwardedRef) => {
  const { className, color, radius, tabIndex, ...sliderProps } = extractProps(
    props,
    sliderPropDefs,
    marginPropDefs
  );
  return (
    <SliderPrimitive.Root
      data-accent-color={color}
      data-radius={radius}
      ref={forwardedRef}
      {...sliderProps}
      asChild={false}
      className={classNames('t-SliderRoot', className)}
    >
      <SliderPrimitive.Track className="t-SliderTrack">
        <SliderPrimitive.Range
          className={classNames('t-SliderRange', { 't-high-contrast': props.highContrast })}
          data-inverted={sliderProps.inverted ? '' : undefined}
        />
      </SliderPrimitive.Track>
      {(sliderProps.value ?? sliderProps.defaultValue ?? []).map((value, index) => (
        <SliderPrimitive.Thumb
          key={index}
          className="t-SliderThumb"
          {...(tabIndex !== undefined ? { tabIndex } : undefined)}
        />
      ))}
    </SliderPrimitive.Root>
  );
});
Slider.displayName = 'Slider';

export { Slider };
export type { SliderProps };
