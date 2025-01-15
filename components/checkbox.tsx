'use client';

import * as React from 'react';
import classNames from 'classnames';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { useControllableState } from '@radix-ui/react-use-controllable-state';

import { checkboxPropDefs } from './checkbox.props';
import { ThickCheckIcon, ThickDividerHorizontalIcon } from './icons';
import { extractProps } from '../helpers/extract-props';
import { marginPropDefs } from '../props/margin.props';

import type { MarginProps } from '../props/margin.props';
import type { ComponentPropsWithout } from '../helpers/component-props';
import type { GetPropDefTypes } from '../props/prop-def';

type CheckboxElement = React.ElementRef<typeof CheckboxPrimitive.Root>;
type CheckboxOwnProps = GetPropDefTypes<typeof checkboxPropDefs>;
interface CheckboxProps
  extends ComponentPropsWithout<
      typeof CheckboxPrimitive.Root,
      'asChild' | 'color' | 'defaultValue' | 'children'
    >,
    MarginProps,
    CheckboxOwnProps {}
const Checkbox = React.forwardRef<CheckboxElement, CheckboxProps>((props, forwardedRef) => {
  const {
    className,
    color,
    checked: checkedProp,
    defaultChecked: defaultCheckedProp,
    onCheckedChange,
    ...checkboxProps
  } = extractProps(props, checkboxPropDefs, marginPropDefs);

  const [checked, setChecked] = useControllableState({
    prop: checkedProp,
    defaultProp: defaultCheckedProp,
    onChange: onCheckedChange,
  });

  return (
    <CheckboxPrimitive.Root
      data-accent-color={color}
      {...checkboxProps}
      defaultChecked={defaultCheckedProp}
      checked={checked}
      onCheckedChange={setChecked}
      asChild={false}
      ref={forwardedRef}
      className={classNames('t-reset', 't-BaseCheckboxRoot', 't-CheckboxRoot', className)}
    >
      <CheckboxPrimitive.Indicator
        asChild
        className="t-BaseCheckboxIndicator t-CheckboxIndicator"
      >
        {checked === 'indeterminate' ? <ThickDividerHorizontalIcon /> : <ThickCheckIcon />}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = 'Checkbox';

export { Checkbox };
export type { CheckboxProps };
