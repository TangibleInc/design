import * as React from 'react';
import classNames from 'classnames';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

import { scrollAreaPropDefs } from './scroll-area.props';
import { extractMarginProps } from '../helpers/extract-margin-props';
import { getMarginStyles } from '../helpers/get-margin-styles';
import { getResponsiveClassNames } from '../helpers/get-responsive-styles';
import { getSubtree } from '../helpers/get-subtree';
import { mergeStyles } from '../helpers/merge-styles';

import type { ComponentPropsWithout, RemovedProps } from '../helpers/component-props';
import type { MarginProps } from '../props/margin.props';
import type { GetPropDefTypes } from '../props/prop-def';

type ScrollAreaElement = React.ElementRef<typeof ScrollAreaPrimitive.Viewport>;
type ScrollAreaOwnProps = GetPropDefTypes<typeof scrollAreaPropDefs>;
interface ScrollAreaProps
  extends ComponentPropsWithout<typeof ScrollAreaPrimitive.Root, RemovedProps>,
    ComponentPropsWithout<typeof ScrollAreaPrimitive.Viewport, RemovedProps | 'dir'>,
    MarginProps,
    ScrollAreaOwnProps {}
const ScrollArea = React.forwardRef<ScrollAreaElement, ScrollAreaProps>((props, forwardedRef) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const [marginClassNames, marginCustomProperties] = getMarginStyles(marginProps);

  const {
    asChild,
    children,
    className,
    style,
    type,
    scrollHideDelay = type !== 'scroll' ? 0 : undefined,
    dir,
    size = scrollAreaPropDefs.size.default,
    radius = scrollAreaPropDefs.radius.default,
    scrollbars = scrollAreaPropDefs.scrollbars.default,
    ...viewportProps
  } = marginRest;

  return (
    <ScrollAreaPrimitive.Root
      type={type}
      scrollHideDelay={scrollHideDelay}
      className={classNames('t-ScrollAreaRoot', marginClassNames, className)}
      style={mergeStyles(marginCustomProperties, style)}
      asChild={asChild}
    >
      {getSubtree({ asChild, children }, (children) => (
        <>
          <ScrollAreaPrimitive.Viewport
            {...viewportProps}
            ref={forwardedRef}
            className="t-ScrollAreaViewport"
          >
            {children}
          </ScrollAreaPrimitive.Viewport>

          <div className="t-ScrollAreaViewportFocusRing" />

          {scrollbars !== 'vertical' ? (
            <ScrollAreaPrimitive.Scrollbar
              data-radius={radius}
              orientation="horizontal"
              className={classNames(
                't-ScrollAreaScrollbar',
                getResponsiveClassNames({
                  className: 't-r-size',
                  value: size,
                  propValues: scrollAreaPropDefs.size.values,
                })
              )}
            >
              <ScrollAreaPrimitive.Thumb className="t-ScrollAreaThumb" />
            </ScrollAreaPrimitive.Scrollbar>
          ) : null}

          {scrollbars !== 'horizontal' ? (
            <ScrollAreaPrimitive.Scrollbar
              data-radius={radius}
              orientation="vertical"
              className={classNames(
                't-ScrollAreaScrollbar',
                getResponsiveClassNames({
                  className: 't-r-size',
                  value: size,
                  propValues: scrollAreaPropDefs.size.values,
                })
              )}
            >
              <ScrollAreaPrimitive.Thumb className="t-ScrollAreaThumb" />
            </ScrollAreaPrimitive.Scrollbar>
          ) : null}

          {scrollbars === 'both' ? (
            <ScrollAreaPrimitive.Corner className="t-ScrollAreaCorner" />
          ) : null}
        </>
      ))}
    </ScrollAreaPrimitive.Root>
  );
});
ScrollArea.displayName = 'ScrollArea';

export { ScrollArea };
export type { ScrollAreaProps };
