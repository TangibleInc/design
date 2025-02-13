import * as React from 'react';
import classNames from 'classnames';
import { Slot } from '@radix-ui/react-slot';

import { badgePropDefs } from './badge.props';
import { extractProps } from '../helpers/extract-props';
import { marginPropDefs } from '../props/margin.props';

import type { MarginProps } from '../props/margin.props';
import type { ComponentPropsWithout, RemovedProps } from '../helpers/component-props';
import type { GetPropDefTypes } from '../props/prop-def';

type BadgeElement = React.ElementRef<'span'>;
type BadgeOwnProps = GetPropDefTypes<typeof badgePropDefs>;
interface BadgeProps
  extends ComponentPropsWithout<'span', RemovedProps>,
    MarginProps,
    BadgeOwnProps {}
const Badge = React.forwardRef<BadgeElement, BadgeProps>((props, forwardedRef) => {
  const { asChild, className, color, radius, ...badgeProps } = extractProps(
    props,
    badgePropDefs,
    marginPropDefs
  );
  const Comp = asChild ? Slot : 'span';
  return (
    <Comp
      data-accent-color={color}
      data-radius={radius}
      {...badgeProps}
      ref={forwardedRef}
      className={classNames('t-reset', 't-Badge', className)}
    />
  );
});
Badge.displayName = 'Badge';

export { Badge };
export type { BadgeProps };
