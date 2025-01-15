import { colorPropDef } from '../props/color.prop';

import type { PropDef } from '../props/prop-def';

const orientationValues = ['horizontal', 'vertical'] as const;
const sizes = ['1', '2', '3', '4'] as const;

const separatorPropDefs = {
  orientation: {
    type: 'enum',
    className: 't-orientation',
    values: orientationValues,
    default: 'horizontal',
    responsive: true,
  },
  size: { type: 'enum', className: 't-size', values: sizes, default: '1', responsive: true },
  color: { ...colorPropDef.color, default: 'gray' },
  decorative: { type: 'boolean', default: true },
} satisfies {
  orientation: PropDef<(typeof orientationValues)[number]>;
  size: PropDef<(typeof sizes)[number]>;
  color: typeof colorPropDef.color;
  decorative: PropDef<boolean>;
};

export { separatorPropDefs };
