import { asChildPropDef } from '../props/as-child.prop';

import type { PropDef } from '../props/prop-def';

const sizes = ['1', '2', '3', '4', '5'] as const;
const variants = ['surface', 'classic', 'ghost'] as const;

const cardPropDefs = {
  ...asChildPropDef,
  size: { type: 'enum', className: 't-size', values: sizes, default: '1', responsive: true },
  variant: { type: 'enum', className: 't-variant', values: variants, default: 'surface' },
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  variant: PropDef<(typeof variants)[number]>;
};

export { cardPropDefs };
