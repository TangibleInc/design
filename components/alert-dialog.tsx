import * as React from 'react';
import classNames from 'classnames';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import { alertDialogContentPropDefs } from './alert-dialog.props';
import { Heading } from './heading';
import { Text } from './text';
import { Theme } from './theme';
import { extractProps } from '../helpers/extract-props';
import { requireReactElement } from '../helpers/require-react-element';

import type { AlertDialogContentOwnProps } from './alert-dialog.props';
import type {
  ComponentPropsWithout,
  RemovedProps,
  ComponentPropsAs,
} from '../helpers/component-props';

interface AlertDialogRootProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Root> {}
const AlertDialogRoot: React.FC<AlertDialogRootProps> = (props) => (
  <AlertDialogPrimitive.Root {...props} />
);
AlertDialogRoot.displayName = 'AlertDialog.Root';

type AlertDialogTriggerElement = React.ElementRef<typeof AlertDialogPrimitive.Trigger>;
interface AlertDialogTriggerProps
  extends ComponentPropsWithout<typeof AlertDialogPrimitive.Trigger, RemovedProps> {}
const AlertDialogTrigger = React.forwardRef<AlertDialogTriggerElement, AlertDialogTriggerProps>(
  ({ children, ...props }, forwardedRef) => (
    <AlertDialogPrimitive.Trigger {...props} ref={forwardedRef} asChild>
      {requireReactElement(children)}
    </AlertDialogPrimitive.Trigger>
  )
);
AlertDialogTrigger.displayName = 'AlertDialog.Trigger';

type AlertDialogContentElement = React.ElementRef<typeof AlertDialogPrimitive.Content>;
interface AlertDialogContentProps
  extends ComponentPropsWithout<typeof AlertDialogPrimitive.Content, RemovedProps>,
    AlertDialogContentOwnProps {
  container?: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Portal>['container'];
}
const AlertDialogContent = React.forwardRef<AlertDialogContentElement, AlertDialogContentProps>(
  ({ align, ...props }, forwardedRef) => {
    const { align: alignPropDef, ...propDefs } = alertDialogContentPropDefs;
    const { className: alignClassName } = extractProps({ align }, { align: alignPropDef });
    const { className, forceMount, container, ...contentProps } = extractProps(props, propDefs);
    return (
      <AlertDialogPrimitive.Portal container={container} forceMount={forceMount}>
        <Theme asChild>
          <AlertDialogPrimitive.Overlay className="t-BaseDialogOverlay t-AlertDialogOverlay">
            <div className="t-BaseDialogScroll t-AlertDialogScroll">
              <div
                className={`t-BaseDialogScrollPadding t-AlertDialogScrollPadding ${alignClassName}`}
              >
                <AlertDialogPrimitive.Content
                  {...contentProps}
                  ref={forwardedRef}
                  className={classNames('t-BaseDialogContent', 't-AlertDialogContent', className)}
                />
              </div>
            </div>
          </AlertDialogPrimitive.Overlay>
        </Theme>
      </AlertDialogPrimitive.Portal>
    );
  }
);
AlertDialogContent.displayName = 'AlertDialog.Content';

type AlertDialogTitleElement = React.ElementRef<typeof Heading>;
type AlertDialogTitleProps = ComponentPropsWithout<typeof Heading, 'asChild'>;
const AlertDialogTitle = React.forwardRef<AlertDialogTitleElement, AlertDialogTitleProps>(
  (props, forwardedRef) => (
    <AlertDialogPrimitive.Title asChild>
      <Heading size="5" mb="3" trim="start" {...props} asChild={false} ref={forwardedRef} />
    </AlertDialogPrimitive.Title>
  )
);
AlertDialogTitle.displayName = 'AlertDialog.Title';

type AlertDialogDescriptionElement = HTMLParagraphElement;
type AlertDialogDescriptionProps = ComponentPropsAs<typeof Text, 'p'>;
const AlertDialogDescription = React.forwardRef<
  AlertDialogDescriptionElement,
  AlertDialogDescriptionProps
>((props, forwardedRef) => (
  <AlertDialogPrimitive.Description asChild>
    <Text as="p" size="3" {...props} asChild={false} ref={forwardedRef} />
  </AlertDialogPrimitive.Description>
));
AlertDialogDescription.displayName = 'AlertDialog.Description';

type AlertDialogActionElement = React.ElementRef<typeof AlertDialogPrimitive.Action>;
interface AlertDialogActionProps
  extends ComponentPropsWithout<typeof AlertDialogPrimitive.Action, RemovedProps> {}
const AlertDialogAction = React.forwardRef<AlertDialogActionElement, AlertDialogActionProps>(
  ({ children, ...props }, forwardedRef) => (
    <AlertDialogPrimitive.Action {...props} ref={forwardedRef} asChild>
      {requireReactElement(children)}
    </AlertDialogPrimitive.Action>
  )
);
AlertDialogAction.displayName = 'AlertDialog.Action';

type AlertDialogCancelElement = React.ElementRef<typeof AlertDialogPrimitive.Cancel>;
interface AlertDialogCancelProps
  extends ComponentPropsWithout<typeof AlertDialogPrimitive.Cancel, RemovedProps> {}
const AlertDialogCancel = React.forwardRef<AlertDialogCancelElement, AlertDialogCancelProps>(
  ({ children, ...props }, forwardedRef) => (
    <AlertDialogPrimitive.Cancel {...props} ref={forwardedRef} asChild>
      {requireReactElement(children)}
    </AlertDialogPrimitive.Cancel>
  )
);
AlertDialogCancel.displayName = 'AlertDialog.Cancel';

export {
  AlertDialogRoot as Root,
  AlertDialogTrigger as Trigger,
  AlertDialogContent as Content,
  AlertDialogTitle as Title,
  AlertDialogDescription as Description,
  AlertDialogAction as Action,
  AlertDialogCancel as Cancel,
};

export type {
  AlertDialogRootProps as RootProps,
  AlertDialogTriggerProps as TriggerProps,
  AlertDialogContentProps as ContentProps,
  AlertDialogTitleProps as TitleProps,
  AlertDialogDescriptionProps as DescriptionProps,
  AlertDialogActionProps as ActionProps,
  AlertDialogCancelProps as CancelProps,
};
