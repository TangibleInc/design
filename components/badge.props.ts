import { asChildPropDef } from '../props/as-child.prop';
import { accentColorPropDef } from '../props/color.prop';
import { highContrastPropDef } from '../props/high-contrast.prop';
import { radiusPropDef } from '../props/radius.prop';

import type { PropDef } from '../props/prop-def';

const sizes = ['1', '2', '3'] as const;
const variants = ['solid', 'soft', 'surface', 'outline'] as const;

const badgePropDefs = {
  ...asChildPropDef,
  size: { type: 'enum', className: 't-size', values: sizes, default: '1', responsive: true },
  variant: { type: 'enum', className: 't-variant', values: variants, default: 'soft' },
  ...accentColorPropDef,
  ...highContrastPropDef,
  ...radiusPropDef,
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  variant: PropDef<(typeof variants)[number]>;
};

export { badgePropDefs };
