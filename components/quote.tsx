import * as React from 'react';
import classNames from 'classnames';
import { Slot } from '@radix-ui/react-slot';

import { quotePropDefs } from './quote.props';
import { extractProps } from '../helpers/extract-props';

import type { ComponentPropsWithout, RemovedProps } from '../helpers/component-props';
import type { GetPropDefTypes } from '../props/prop-def';

type QuoteElement = React.ElementRef<'q'>;
type QuoteOwnProps = GetPropDefTypes<typeof quotePropDefs>;
interface QuoteProps extends ComponentPropsWithout<'q', RemovedProps>, QuoteOwnProps {}
const Quote = React.forwardRef<QuoteElement, QuoteProps>((props, forwardedRef) => {
  const { asChild, className, ...quoteProps } = extractProps(props, quotePropDefs);
  const Comp = asChild ? Slot : 'q';
  return <Comp {...quoteProps} ref={forwardedRef} className={classNames('t-Quote', className)} />;
});
Quote.displayName = 'Quote';

export { Quote };
export type { QuoteProps };
