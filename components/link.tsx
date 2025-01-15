import * as React from 'react';
import classNames from 'classnames';

import { Text } from './text';
import { extractProps } from '../helpers/extract-props';
import { linkPropDefs } from './link.props';

import type { ComponentPropsWithout, RemovedProps } from '../helpers/component-props';
import type { MarginProps } from '../props/margin.props';
import type { GetPropDefTypes } from '../props/prop-def';

type LinkElement = React.ElementRef<'a'>;
type LinkOwnProps = GetPropDefTypes<typeof linkPropDefs>;
interface LinkProps extends ComponentPropsWithout<'a', RemovedProps>, MarginProps, LinkOwnProps {}
const Link = React.forwardRef<LinkElement, LinkProps>((props, forwardedRef) => {
  const { children, className, color, asChild, ...linkProps } = extractProps(props, linkPropDefs);
  return (
    <Text
      {...linkProps}
      data-accent-color={color}
      ref={forwardedRef}
      asChild
      className={classNames('t-reset', 't-Link', className)}
    >
      {asChild ? children : <a>{children}</a>}
    </Text>
  );
});
Link.displayName = 'Link';

export { Link };
export type { LinkProps };
