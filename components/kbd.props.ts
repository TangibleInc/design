import { asChildPropDef } from '../props/as-child.prop';

import type { PropDef } from '../props/prop-def';

const sizes = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;

const kbdPropDefs = {
  ...asChildPropDef,
  size: {
    type: 'enum',
    className: 't-size',
    values: sizes,
    responsive: true,
  },
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
};

export { kbdPropDefs };
