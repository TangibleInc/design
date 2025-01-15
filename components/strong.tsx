import * as React from 'react';
import classNames from 'classnames';
import { Slot } from '@radix-ui/react-slot';

import { extractProps } from '../helpers/extract-props';
import { strongPropDefs } from './strong.props';

import type { ComponentPropsWithout, RemovedProps } from '../helpers/component-props';
import type { GetPropDefTypes } from '../props/prop-def';

type StrongElement = React.ElementRef<'strong'>;
type StrongOwnProps = GetPropDefTypes<typeof strongPropDefs>;
interface StrongProps extends ComponentPropsWithout<'strong', RemovedProps>, StrongOwnProps {}
const Strong = React.forwardRef<StrongElement, StrongProps>((props, forwardedRef) => {
  const { asChild, className, ...strongProps } = extractProps(props, strongPropDefs);
  const Comp = asChild ? Slot : 'strong';
  return (
    <Comp {...strongProps} ref={forwardedRef} className={classNames('t-Strong', className)} />
  );
});
Strong.displayName = 'Strong';

export { Strong };
export type { StrongProps };
