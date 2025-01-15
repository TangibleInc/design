import * as React from 'react';
import classNames from 'classnames';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import { tabNavRootPropDefs } from './tab-nav.props';
import { extractProps } from '../helpers/extract-props';
import { getSubtree } from '../helpers/get-subtree';
import { marginPropDefs } from '../props/margin.props';

import type { tabNavLinkPropDefs } from './tab-nav.props';
import type { MarginProps } from '../props/margin.props';
import type { ComponentPropsWithout, RemovedProps } from '../helpers/component-props';
import type { GetPropDefTypes } from '../props/prop-def';

type TabNavRootElement = React.ElementRef<typeof NavigationMenu.Root>;
type TabNavRootElementProps = ComponentPropsWithout<'nav', RemovedProps>;
type TabNavOwnProps = GetPropDefTypes<typeof tabNavRootPropDefs>;
interface TabNavRootProps
  extends Omit<TabNavRootElementProps, 'defaultValue' | 'dir' | 'color'>,
    MarginProps,
    TabNavOwnProps {}
const TabNavRoot = React.forwardRef<TabNavRootElement, TabNavRootProps>((props, forwardedRef) => {
  const { children, className, color, ...rootProps } = extractProps(
    props,
    tabNavRootPropDefs,
    marginPropDefs
  );
  return (
    <NavigationMenu.Root
      className="t-TabNavRoot"
      data-accent-color={color}
      {...rootProps}
      asChild={false}
      ref={forwardedRef}
    >
      <NavigationMenu.List
        className={classNames('t-reset', 't-BaseTabList', 't-TabNavList', className)}
      >
        {children}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
});
TabNavRoot.displayName = 'TabNav.Root';

type TabNavLinkElement = React.ElementRef<typeof NavigationMenu.Link>;
type TabNavLinkOwnProps = GetPropDefTypes<typeof tabNavLinkPropDefs>;
interface TabNavLinkProps
  extends ComponentPropsWithout<typeof NavigationMenu.Link, RemovedProps | 'onSelect'>,
    TabNavLinkOwnProps {}
const TabNavLink = React.forwardRef<TabNavLinkElement, TabNavLinkProps>((props, forwardedRef) => {
  const { asChild, children, className, ...linkProps } = props;

  return (
    <NavigationMenu.Item className="t-TabNavItem">
      <NavigationMenu.Link
        {...linkProps}
        ref={forwardedRef}
        className={classNames('t-reset', 't-BaseTabListTrigger', 't-TabNavLink', className)}
        onSelect={undefined}
        asChild={asChild}
      >
        {getSubtree({ asChild, children }, (children) => (
          <>
            <span className="t-BaseTabListTriggerInner t-TabNavLinkInner">{children}</span>
            <span className="t-BaseTabListTriggerInnerHidden t-TabNavLinkInnerHidden">
              {children}
            </span>
          </>
        ))}
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
});
TabNavLink.displayName = 'TabNav.Link';

export { TabNavRoot as Root, TabNavLink as Link };
export type { TabNavRootProps as RootProps, TabNavLinkProps as LinkProps };
