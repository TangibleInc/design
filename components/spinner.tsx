import * as React from 'react';
import classNames from 'classnames';

import { Flex } from './flex';
import { spinnerPropDefs } from './spinner.props';
import { extractProps } from '../helpers/extract-props';
import { marginPropDefs } from '../props/margin.props';

import type { MarginProps } from '../props/margin.props';
import type { ComponentPropsWithout, RemovedProps } from '../helpers/component-props';
import type { GetPropDefTypes } from '../props/prop-def';

type SpinnerElement = React.ElementRef<'span'>;
type SpinnerOwnProps = GetPropDefTypes<typeof spinnerPropDefs>;
interface SpinnerProps
  extends ComponentPropsWithout<'span', RemovedProps>,
    MarginProps,
    SpinnerOwnProps {}
const Spinner = React.forwardRef<SpinnerElement, SpinnerProps>((props, forwardedRef) => {
  const { className, children, loading, ...spinnerProps } = extractProps(
    props,
    spinnerPropDefs,
    marginPropDefs
  );

  if (!loading) return children;

  const spinner = (
    <span {...spinnerProps} ref={forwardedRef} className={classNames('t-Spinner', className)}>
      <span className="t-SpinnerLeaf" />
      <span className="t-SpinnerLeaf" />
      <span className="t-SpinnerLeaf" />
      <span className="t-SpinnerLeaf" />
      <span className="t-SpinnerLeaf" />
      <span className="t-SpinnerLeaf" />
      <span className="t-SpinnerLeaf" />
      <span className="t-SpinnerLeaf" />
    </span>
  );

  if (children === undefined) return spinner;

  return (
    <Flex asChild position="relative" align="center" justify="center">
      <span>
        {/**
         * `display: contents` removes the content from the accessibility tree in some browsers,
         * so we force remove it with `aria-hidden`
         */}
        <span
          aria-hidden
          style={{ display: 'contents', visibility: 'hidden' }}
          // @ts-ignore
          inert={undefined}
        >
          {children}
        </span>

        <Flex asChild align="center" justify="center" position="absolute" inset="0">
          <span>{spinner}</span>
        </Flex>
      </span>
    </Flex>
  );
});
Spinner.displayName = 'Spinner';

export { Spinner };
export type { SpinnerProps };
