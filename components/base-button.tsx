import * as React from 'react';
import classNames from 'classnames';
import { Slot } from '@radix-ui/react-slot';

import { baseButtonPropDefs } from './base-button.props';
import { Flex } from './flex';
import { Spinner } from './spinner';
import { VisuallyHidden } from './visually-hidden';
import { extractProps } from '../helpers/extract-props';
import { mapResponsiveProp, mapButtonSizeToSpinnerSize } from '../helpers/map-prop-values';
import { marginPropDefs } from '../props/margin.props';

import type { MarginProps } from '../props/margin.props';
import type { ComponentPropsWithout, RemovedProps } from '../helpers/component-props';
import type { GetPropDefTypes } from '../props/prop-def';

type BaseButtonElement = React.ElementRef<'button'>;
type BaseButtonOwnProps = GetPropDefTypes<typeof baseButtonPropDefs>;
interface BaseButtonProps
  extends ComponentPropsWithout<'button', RemovedProps>,
    MarginProps,
    BaseButtonOwnProps {}
const BaseButton = React.forwardRef<BaseButtonElement, BaseButtonProps>((props, forwardedRef) => {
  const { size = baseButtonPropDefs.size.default } = props;
  const {
    className,
    children,
    asChild,
    color,
    radius,
    disabled = props.loading,
    ...baseButtonProps
  } = extractProps(props, baseButtonPropDefs, marginPropDefs);
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      // The `data-disabled` attribute enables correct styles when doing `<Button asChild disabled>`
      data-disabled={disabled || undefined}
      data-accent-color={color}
      data-radius={radius}
      {...baseButtonProps}
      ref={forwardedRef}
      className={classNames('t-reset', 't-BaseButton', className)}
      disabled={disabled}
    >
      {props.loading ? (
        <>
          {/**
           * We need a wrapper to set `visibility: hidden` to hide the button content whilst we show the `Spinner`.
           * The button is a flex container with a `gap`, so we use `display: contents` to ensure the correct flex layout.
           *
           * However, `display: contents` removes the content from the accessibility tree in some browsers,
           * so we force remove it with `aria-hidden` and re-add it in the tree with `VisuallyHidden`
           */}
          <span style={{ display: 'contents', visibility: 'hidden' }} aria-hidden>
            {children}
          </span>
          <VisuallyHidden>{children}</VisuallyHidden>

          <Flex asChild align="center" justify="center" position="absolute" inset="0">
            <span>
              <Spinner size={mapResponsiveProp(size, mapButtonSizeToSpinnerSize)} />
            </span>
          </Flex>
        </>
      ) : (
        children
      )}
    </Comp>
  );
});
BaseButton.displayName = 'BaseButton';

export { BaseButton };
export type { BaseButtonProps };
