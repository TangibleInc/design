import { asChildPropDef } from '../props/as-child.prop';
import { accentColorPropDef } from '../props/color.prop';
import { highContrastPropDef } from '../props/high-contrast.prop';
import { radiusPropDef } from '../props/radius.prop';

import type { PropDef } from '../props/prop-def';

const sizes = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;
const variants = ['solid', 'soft'] as const;

const avatarPropDefs = {
  ...asChildPropDef,
  size: { type: 'enum', className: 't-size', values: sizes, default: '3', responsive: true },
  variant: { type: 'enum', className: 't-variant', values: variants, default: 'soft' },
  ...accentColorPropDef,
  ...highContrastPropDef,
  ...radiusPropDef,
  fallback: { type: 'ReactNode', required: true },
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  variant: PropDef<(typeof variants)[number]>;
  fallback: PropDef<React.ReactNode>;
};

export { avatarPropDefs };
