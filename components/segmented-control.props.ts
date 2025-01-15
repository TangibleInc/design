import { radiusPropDef } from '../props/radius.prop';

import type { PropDef } from '../props/prop-def';

const sizes = ['1', '2', '3'] as const;
const variants = ['surface', 'classic'] as const;

const segmentedControlRootPropDefs = {
  disabled: { type: 'boolean', className: 'disabled', default: false },
  size: { type: 'enum', className: 't-size', values: sizes, default: '2', responsive: true },
  variant: { type: 'enum', className: 't-variant', values: variants, default: 'surface' },
  ...radiusPropDef,
} satisfies {
  disabled?: PropDef<boolean>;
  size: PropDef<(typeof sizes)[number]>;
  variant: PropDef<(typeof variants)[number]>;
};

export { segmentedControlRootPropDefs };
