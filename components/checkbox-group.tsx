'use client';

import * as React from 'react';
import classNames from 'classnames';
import { createContextScope } from '@radix-ui/react-context';

import * as CheckboxGroupPrimitive from './checkbox-group.primitive';
import { createCheckboxGroupScope } from './checkbox-group.primitive';
import { checkboxGroupRootPropDefs } from './checkbox-group.props';
import { ThickCheckIcon } from './icons';
import { Text } from './text';
import { extractProps } from '../helpers/extract-props';
import { marginPropDefs } from '../props/margin.props';

import type { Scope } from '@radix-ui/react-context';
import type { ComponentPropsWithout, RemovedProps } from '../helpers/component-props';
import type { MarginProps } from '../props/margin.props';
import type { GetPropDefTypes } from '../props/prop-def';

const CHECKBOX_GROUP_NAME = 'CheckboxGroup';

type ScopedProps<P> = P & { __scopeCheckboxGroup?: Scope };
const [createCheckboxGroupContext] = createContextScope(CHECKBOX_GROUP_NAME, [
  createCheckboxGroupScope,
]);
const useCheckboxGroupScope = createCheckboxGroupScope();

type CheckboxGroupRootOwnProps = GetPropDefTypes<typeof checkboxGroupRootPropDefs>;
type CheckboxGroupContextValue = CheckboxGroupRootOwnProps;

const [CheckboxGroupProvider, useCheckboxGroupContext] =
  createCheckboxGroupContext<CheckboxGroupContextValue>(CHECKBOX_GROUP_NAME);

type CheckboxGroupRootElement = React.ElementRef<typeof CheckboxGroupPrimitive.Root>;
interface CheckboxGroupRootProps
  extends ComponentPropsWithout<
      typeof CheckboxGroupPrimitive.Root,
      'asChild' | 'color' | 'defaultChecked'
    >,
    MarginProps,
    CheckboxGroupRootOwnProps {}
const CheckboxGroupRoot = React.forwardRef<CheckboxGroupRootElement, CheckboxGroupRootProps>(
  (
    {
      color = checkboxGroupRootPropDefs.color.default,
      highContrast = checkboxGroupRootPropDefs.highContrast.default,
      size = checkboxGroupRootPropDefs.size.default,
      variant = checkboxGroupRootPropDefs.variant.default,
      ...props
    }: ScopedProps<CheckboxGroupRootProps>,
    forwardedRef
  ) => {
    const { __scopeCheckboxGroup, className, ...rootProps } = extractProps(props, marginPropDefs);
    const checkboxGroupScope = useCheckboxGroupScope(__scopeCheckboxGroup);
    return (
      <CheckboxGroupProvider
        scope={__scopeCheckboxGroup}
        color={color}
        size={size}
        highContrast={highContrast}
        variant={variant}
      >
        <CheckboxGroupPrimitive.Root
          {...checkboxGroupScope}
          {...rootProps}
          ref={forwardedRef}
          className={classNames('t-CheckboxGroupRoot', className)}
        />
      </CheckboxGroupProvider>
    );
  }
);
CheckboxGroupRoot.displayName = 'CheckboxGroup.Root';

type CheckboxGroupItemElement = React.ElementRef<typeof CheckboxGroupPrimitive.Item>;
interface CheckboxGroupItemProps
  extends ComponentPropsWithout<typeof CheckboxGroupPrimitive.Item, RemovedProps>,
    MarginProps {}
const CheckboxGroupItem = React.forwardRef<CheckboxGroupItemElement, CheckboxGroupItemProps>(
  (_props: ScopedProps<CheckboxGroupItemProps>, forwardedRef) => {
    const { __scopeCheckboxGroup, children, className, style, ...props } = _props;
    const { size } = useCheckboxGroupContext('CheckboxGroupItem', __scopeCheckboxGroup);

    // Render `<Text as="label">` if children are provided, otherwise render
    // the solo checkbox to allow building out your custom layouts with it.
    if (children) {
      return (
        <Text
          as="label"
          size={size}
          className={classNames('t-CheckboxGroupItem', className)}
          style={style}
        >
          <CheckboxGroupItemCheckbox
            __scopeCheckboxGroup={__scopeCheckboxGroup}
            {...props}
            ref={forwardedRef}
          />
          {children && <span className="t-CheckboxGroupItemInner">{children}</span>}
        </Text>
      );
    }

    return (
      <CheckboxGroupItemCheckbox
        __scopeCheckboxGroup={__scopeCheckboxGroup}
        {...props}
        ref={forwardedRef}
        className={className}
        style={style}
      />
    );
  }
);
CheckboxGroupItem.displayName = 'CheckboxGroup.Item';

type CheckboxGroupItemCheckboxElement = React.ElementRef<typeof CheckboxGroupPrimitive.Item>;
interface CheckboxGroupItemCheckboxProps
  extends ComponentPropsWithout<typeof CheckboxGroupPrimitive.Item, RemovedProps> {}
const CheckboxGroupItemCheckbox = React.forwardRef<
  CheckboxGroupItemCheckboxElement,
  ScopedProps<CheckboxGroupItemCheckboxProps>
>(({ __scopeCheckboxGroup, ...props }, forwardedRef) => {
  const context = useCheckboxGroupContext('CheckboxGroupItemCheckbox', __scopeCheckboxGroup);
  const checkboxGroupScope = useCheckboxGroupScope(__scopeCheckboxGroup);
  const { color, className } = extractProps(
    { ...props, ...context },
    checkboxGroupRootPropDefs,
    marginPropDefs
  );
  return (
    <CheckboxGroupPrimitive.Item
      {...checkboxGroupScope}
      data-accent-color={color}
      {...props}
      ref={forwardedRef}
      className={classNames(
        't-reset',
        't-BaseCheckboxRoot',
        't-CheckboxGroupItemCheckbox',
        className
      )}
    >
      <CheckboxGroupPrimitive.Indicator
        {...checkboxGroupScope}
        asChild
        className="t-BaseCheckboxIndicator"
      >
        <ThickCheckIcon />
      </CheckboxGroupPrimitive.Indicator>
    </CheckboxGroupPrimitive.Item>
  );
});
CheckboxGroupItemCheckbox.displayName = 'CheckboxGroup.ItemCheckbox';

export { CheckboxGroupRoot as Root, CheckboxGroupItem as Item };
export type { CheckboxGroupRootProps as RootProps, CheckboxGroupItemProps as ItemProps };
