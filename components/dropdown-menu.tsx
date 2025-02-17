'use client';

import * as React from 'react';
import classNames from 'classnames';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Slottable } from '@radix-ui/react-slot';

import { ScrollArea } from './scroll-area';
import {
  dropdownMenuContentPropDefs,
  dropdownMenuItemPropDefs,
  dropdownMenuCheckboxItemPropDefs,
  dropdownMenuRadioItemPropDefs,
} from './dropdown-menu.props';
import { Theme, useThemeContext } from './theme';
import { ChevronDownIcon, ThickCheckIcon, ThickChevronRightIcon } from './icons';
import { extractProps } from '../helpers/extract-props';
import { requireReactElement } from '../helpers/require-react-element';

import type { IconProps } from './icons';
import type { ComponentPropsWithout, RemovedProps } from '../helpers/component-props';
import type { GetPropDefTypes } from '../props/prop-def';

interface DropdownMenuRootProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Root> {}
const DropdownMenuRoot: React.FC<DropdownMenuRootProps> = (props) => (
  <DropdownMenuPrimitive.Root {...props} />
);
DropdownMenuRoot.displayName = 'DropdownMenu.Root';

type DropdownMenuTriggerElement = React.ElementRef<typeof DropdownMenuPrimitive.Trigger>;
interface DropdownMenuTriggerProps
  extends ComponentPropsWithout<typeof DropdownMenuPrimitive.Trigger, RemovedProps> {}
const DropdownMenuTrigger = React.forwardRef<DropdownMenuTriggerElement, DropdownMenuTriggerProps>(
  ({ children, ...props }, forwardedRef) => (
    <DropdownMenuPrimitive.Trigger {...props} ref={forwardedRef} asChild>
      {requireReactElement(children)}
    </DropdownMenuPrimitive.Trigger>
  )
);
DropdownMenuTrigger.displayName = 'DropdownMenu.Trigger';

type DropdownMenuContentOwnProps = GetPropDefTypes<typeof dropdownMenuContentPropDefs>;
type DropdownMenuContentContextValue = DropdownMenuContentOwnProps;
const DropdownMenuContentContext = React.createContext<DropdownMenuContentContextValue>({});
type DropdownMenuContentElement = React.ElementRef<typeof DropdownMenuPrimitive.Content>;
interface DropdownMenuContentProps
  extends ComponentPropsWithout<typeof DropdownMenuPrimitive.Content, RemovedProps>,
    DropdownMenuContentContextValue {
  container?: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Portal>['container'];
}
const DropdownMenuContent = React.forwardRef<DropdownMenuContentElement, DropdownMenuContentProps>(
  (props, forwardedRef) => {
    const themeContext = useThemeContext();
    const {
      size = dropdownMenuContentPropDefs.size.default,
      variant = dropdownMenuContentPropDefs.variant.default,
      highContrast = dropdownMenuContentPropDefs.highContrast.default,
    } = props;
    const { className, children, color, container, forceMount, ...contentProps } = extractProps(
      props,
      dropdownMenuContentPropDefs
    );
    const resolvedColor = color || themeContext.accentColor;
    return (
      <DropdownMenuPrimitive.Portal container={container} forceMount={forceMount}>
        <Theme asChild>
          <DropdownMenuPrimitive.Content
            data-accent-color={resolvedColor}
            align="start"
            sideOffset={4}
            collisionPadding={10}
            {...contentProps}
            asChild={false}
            ref={forwardedRef}
            className={classNames(
              't-PopperContent',
              't-BaseMenuContent',
              't-DropdownMenuContent',
              className
            )}
          >
            <ScrollArea type="auto">
              <div className={classNames('t-BaseMenuViewport', 't-DropdownMenuViewport')}>
                <DropdownMenuContentContext.Provider
                  value={React.useMemo(
                    () => ({ size, variant, color: resolvedColor, highContrast }),
                    [size, variant, resolvedColor, highContrast]
                  )}
                >
                  {children}
                </DropdownMenuContentContext.Provider>
              </div>
            </ScrollArea>
          </DropdownMenuPrimitive.Content>
        </Theme>
      </DropdownMenuPrimitive.Portal>
    );
  }
);
DropdownMenuContent.displayName = 'DropdownMenu.Content';

type DropdownMenuLabelElement = React.ElementRef<typeof DropdownMenuPrimitive.Label>;
interface DropdownMenuLabelProps
  extends ComponentPropsWithout<typeof DropdownMenuPrimitive.Label, RemovedProps> {}
const DropdownMenuLabel = React.forwardRef<DropdownMenuLabelElement, DropdownMenuLabelProps>(
  ({ className, ...props }, forwardedRef) => (
    <DropdownMenuPrimitive.Label
      {...props}
      asChild={false}
      ref={forwardedRef}
      className={classNames('t-BaseMenuLabel', 't-DropdownMenuLabel', className)}
    />
  )
);
DropdownMenuLabel.displayName = 'DropdownMenu.Label';

type DropdownMenuItemElement = React.ElementRef<typeof DropdownMenuPrimitive.Item>;
type DropdownMenuItemOwnProps = GetPropDefTypes<typeof dropdownMenuItemPropDefs>;
interface DropdownMenuItemProps
  extends ComponentPropsWithout<typeof DropdownMenuPrimitive.Item, RemovedProps>,
    DropdownMenuItemOwnProps {}
const DropdownMenuItem = React.forwardRef<DropdownMenuItemElement, DropdownMenuItemProps>(
  (props, forwardedRef) => {
    const {
      className,
      children,
      color = dropdownMenuItemPropDefs.color.default,
      shortcut,
      ...itemProps
    } = props;
    return (
      <DropdownMenuPrimitive.Item
        data-accent-color={color}
        {...itemProps}
        ref={forwardedRef}
        className={classNames('t-reset', 't-BaseMenuItem', 't-DropdownMenuItem', className)}
      >
        <Slottable>{children}</Slottable>
        {shortcut && <div className="t-BaseMenuShortcut t-DropdownMenuShortcut">{shortcut}</div>}
      </DropdownMenuPrimitive.Item>
    );
  }
);
DropdownMenuItem.displayName = 'DropdownMenu.Item';

type DropdownMenuGroupElement = React.ElementRef<typeof DropdownMenuPrimitive.Group>;
interface DropdownMenuGroupProps
  extends ComponentPropsWithout<typeof DropdownMenuPrimitive.Group, RemovedProps> {}
const DropdownMenuGroup = React.forwardRef<DropdownMenuGroupElement, DropdownMenuGroupProps>(
  ({ className, ...props }, forwardedRef) => (
    <DropdownMenuPrimitive.Group
      {...props}
      asChild={false}
      ref={forwardedRef}
      className={classNames('t-BaseMenuGroup', 't-DropdownMenuGroup', className)}
    />
  )
);
DropdownMenuGroup.displayName = 'DropdownMenu.Group';

type DropdownMenuRadioGroupElement = React.ElementRef<typeof DropdownMenuPrimitive.RadioGroup>;
interface DropdownMenuRadioGroupProps
  extends ComponentPropsWithout<typeof DropdownMenuPrimitive.RadioGroup, RemovedProps> {}
const DropdownMenuRadioGroup = React.forwardRef<
  DropdownMenuRadioGroupElement,
  DropdownMenuRadioGroupProps
>(({ className, ...props }, forwardedRef) => (
  <DropdownMenuPrimitive.RadioGroup
    {...props}
    asChild={false}
    ref={forwardedRef}
    className={classNames('t-BaseMenuRadioGroup', 't-DropdownMenuRadioGroup', className)}
  />
));
DropdownMenuRadioGroup.displayName = 'DropdownMenu.RadioGroup';

type DropdownMenuRadioItemElement = React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>;
type DropdownMenuRadioItemOwnProps = GetPropDefTypes<typeof dropdownMenuRadioItemPropDefs>;
interface DropdownMenuRadioItemProps
  extends ComponentPropsWithout<typeof DropdownMenuPrimitive.RadioItem, RemovedProps>,
    DropdownMenuRadioItemOwnProps {}
const DropdownMenuRadioItem = React.forwardRef<
  DropdownMenuRadioItemElement,
  DropdownMenuRadioItemProps
>((props, forwardedRef) => {
  const {
    children,
    className,
    color = dropdownMenuRadioItemPropDefs.color.default,
    ...itemProps
  } = props;
  return (
    <DropdownMenuPrimitive.RadioItem
      {...itemProps}
      asChild={false}
      ref={forwardedRef}
      data-accent-color={color}
      className={classNames(
        't-BaseMenuItem',
        't-BaseMenuRadioItem',
        't-DropdownMenuItem',
        't-DropdownMenuRadioItem',
        className
      )}
    >
      {children}
      <DropdownMenuPrimitive.ItemIndicator className="t-BaseMenuItemIndicator t-DropdownMenuItemIndicator">
        <ThickCheckIcon className="t-BaseMenuItemIndicatorIcon t-DropdownMenuItemIndicatorIcon" />
      </DropdownMenuPrimitive.ItemIndicator>
    </DropdownMenuPrimitive.RadioItem>
  );
});
DropdownMenuRadioItem.displayName = 'DropdownMenu.RadioItem';

type DropdownMenuCheckboxItemElement = React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>;
type DropdownMenuCheckboxItemOwnProps = GetPropDefTypes<typeof dropdownMenuCheckboxItemPropDefs>;
interface DropdownMenuCheckboxItemProps
  extends ComponentPropsWithout<typeof DropdownMenuPrimitive.CheckboxItem, RemovedProps>,
    DropdownMenuCheckboxItemOwnProps {}
const DropdownMenuCheckboxItem = React.forwardRef<
  DropdownMenuCheckboxItemElement,
  DropdownMenuCheckboxItemProps
>((props, forwardedRef) => {
  const {
    children,
    className,
    shortcut,
    color = dropdownMenuCheckboxItemPropDefs.color.default,
    ...itemProps
  } = props;
  return (
    <DropdownMenuPrimitive.CheckboxItem
      {...itemProps}
      asChild={false}
      ref={forwardedRef}
      data-accent-color={color}
      className={classNames(
        't-BaseMenuItem',
        't-BaseMenuCheckboxItem',
        't-DropdownMenuItem',
        't-DropdownMenuCheckboxItem',
        className
      )}
    >
      {children}
      <DropdownMenuPrimitive.ItemIndicator className="t-BaseMenuItemIndicator t-DropdownMenuItemIndicator">
        <ThickCheckIcon className="t-BaseMenuItemIndicatorIcon t-ContextMenuItemIndicatorIcon" />
      </DropdownMenuPrimitive.ItemIndicator>
      {shortcut && <div className="t-BaseMenuShortcut t-DropdownMenuShortcut">{shortcut}</div>}
    </DropdownMenuPrimitive.CheckboxItem>
  );
});
DropdownMenuCheckboxItem.displayName = 'DropdownMenu.CheckboxItem';

interface DropdownMenuSubProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Sub> {}
const DropdownMenuSub: React.FC<DropdownMenuSubProps> = (props) => (
  <DropdownMenuPrimitive.Sub {...props} />
);
DropdownMenuSub.displayName = 'DropdownMenu.Sub';

type DropdownMenuSubTriggerElement = React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>;
interface DropdownMenuSubTriggerProps
  extends ComponentPropsWithout<typeof DropdownMenuPrimitive.SubTrigger, RemovedProps> {}
const DropdownMenuSubTrigger = React.forwardRef<
  DropdownMenuSubTriggerElement,
  DropdownMenuSubTriggerProps
>((props, forwardedRef) => {
  const { className, children, ...subTriggerProps } = props;
  return (
    <DropdownMenuPrimitive.SubTrigger
      {...subTriggerProps}
      asChild={false}
      ref={forwardedRef}
      className={classNames(
        't-BaseMenuItem',
        't-BaseMenuSubTrigger',
        't-DropdownMenuItem',
        't-DropdownMenuSubTrigger',
        className
      )}
    >
      {children}
      <div className="t-BaseMenuShortcut t-DropdownMenuShortcut">
        <ThickChevronRightIcon className="t-BaseMenuSubTriggerIcon t-DropdownMenuSubtriggerIcon" />
      </div>
    </DropdownMenuPrimitive.SubTrigger>
  );
});
DropdownMenuSubTrigger.displayName = 'DropdownMenu.SubTrigger';

type DropdownMenuSubContentElement = React.ElementRef<typeof DropdownMenuPrimitive.SubContent>;
interface DropdownMenuSubContentProps
  extends ComponentPropsWithout<typeof DropdownMenuPrimitive.SubContent, RemovedProps> {
  container?: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Portal>['container'];
}
const DropdownMenuSubContent = React.forwardRef<
  DropdownMenuSubContentElement,
  DropdownMenuSubContentProps
>((props, forwardedRef) => {
  const { size, variant, color, highContrast } = React.useContext(DropdownMenuContentContext);
  const { className, children, container, forceMount, ...subContentProps } = extractProps(
    { size, variant, color, highContrast, ...props },
    dropdownMenuContentPropDefs
  );
  return (
    <DropdownMenuPrimitive.Portal container={container} forceMount={forceMount}>
      <Theme asChild>
        <DropdownMenuPrimitive.SubContent
          data-accent-color={color}
          alignOffset={-Number(size) * 4}
          // Side offset accounts for the outer solid box-shadow
          sideOffset={1}
          collisionPadding={10}
          {...subContentProps}
          asChild={false}
          ref={forwardedRef}
          className={classNames(
            't-PopperContent',
            't-BaseMenuContent',
            't-BaseMenuSubContent',
            't-DropdownMenuContent',
            't-DropdownMenuSubContent',
            className
          )}
        >
          <ScrollArea type="auto">
            <div className={classNames('t-BaseMenuViewport', 't-DropdownMenuViewport')}>
              {children}
            </div>
          </ScrollArea>
        </DropdownMenuPrimitive.SubContent>
      </Theme>
    </DropdownMenuPrimitive.Portal>
  );
});
DropdownMenuSubContent.displayName = 'DropdownMenu.SubContent';

type DropdownMenuSeparatorElement = React.ElementRef<typeof DropdownMenuPrimitive.Separator>;
interface DropdownMenuSeparatorProps
  extends ComponentPropsWithout<typeof DropdownMenuPrimitive.Separator, RemovedProps> {}
const DropdownMenuSeparator = React.forwardRef<
  DropdownMenuSeparatorElement,
  DropdownMenuSeparatorProps
>(({ className, ...props }, forwardedRef) => (
  <DropdownMenuPrimitive.Separator
    {...props}
    asChild={false}
    ref={forwardedRef}
    className={classNames('t-BaseMenuSeparator', 't-DropdownMenuSeparator', className)}
  />
));
DropdownMenuSeparator.displayName = 'DropdownMenu.Separator';

export {
  DropdownMenuRoot as Root,
  DropdownMenuTrigger as Trigger,
  ChevronDownIcon as TriggerIcon,
  DropdownMenuContent as Content,
  DropdownMenuLabel as Label,
  DropdownMenuItem as Item,
  DropdownMenuGroup as Group,
  DropdownMenuRadioGroup as RadioGroup,
  DropdownMenuRadioItem as RadioItem,
  DropdownMenuCheckboxItem as CheckboxItem,
  DropdownMenuSub as Sub,
  DropdownMenuSubTrigger as SubTrigger,
  DropdownMenuSubContent as SubContent,
  DropdownMenuSeparator as Separator,
};

export type {
  DropdownMenuRootProps as RootProps,
  DropdownMenuTriggerProps as TriggerProps,
  IconProps as TriggerIconProps,
  DropdownMenuContentProps as ContentProps,
  DropdownMenuLabelProps as LabelProps,
  DropdownMenuItemProps as ItemProps,
  DropdownMenuGroupProps as GroupProps,
  DropdownMenuRadioGroupProps as RadioGroupProps,
  DropdownMenuRadioItemProps as RadioItemProps,
  DropdownMenuCheckboxItemProps as CheckboxItemProps,
  DropdownMenuSubProps as SubProps,
  DropdownMenuSubTriggerProps as SubTriggerProps,
  DropdownMenuSubContentProps as SubContentProps,
  DropdownMenuSeparatorProps as SeparatorProps,
};
