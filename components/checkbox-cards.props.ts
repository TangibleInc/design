import { asChildPropDef } from '../props/as-child.prop';
import { colorPropDef } from '../props/color.prop';
import { highContrastPropDef } from '../props/high-contrast.prop';
import { gridPropDefs } from './grid.props';

import type { PropDef } from '../props/prop-def';

const sizes = ['1', '2', '3'] as const;
const variants = ['surface', 'classic'] as const;

const checkboxCardsRootPropDefs = {
  ...asChildPropDef,
  size: { type: 'enum', className: 't-size', values: sizes, default: '2', responsive: true },
  variant: { type: 'enum', className: 't-variant', values: variants, default: 'surface' },
  ...colorPropDef,
  ...highContrastPropDef,
  columns: { ...gridPropDefs.columns, default: 'repeat(auto-fit, minmax(200px, 1fr))' },
  gap: { ...gridPropDefs.gap, default: '4' },
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  variant: PropDef<(typeof variants)[number]>;
  columns: PropDef<(typeof gridPropDefs.columns.values)[number]>;
  gap: PropDef<(typeof gridPropDefs.gap.values)[number]>;
};

export { checkboxCardsRootPropDefs };
