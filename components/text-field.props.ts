import { colorPropDef } from '../props/color.prop';
import { paddingPropDefs } from '../props/padding.props';
import { radiusPropDef } from '../props/radius.prop';
import { flexPropDefs } from './flex.props';

import type { PropDef } from '../props/prop-def';

const sizes = ['1', '2', '3'] as const;
const variants = ['classic', 'surface', 'soft'] as const;

const textFieldRootPropDefs = {
  size: { type: 'enum', className: 't-size', values: sizes, default: '2', responsive: true },
  variant: { type: 'enum', className: 't-variant', values: variants, default: 'surface' },
  ...colorPropDef,
  ...radiusPropDef,
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  variant: PropDef<(typeof variants)[number]>;
};

const sides = ['left', 'right'] as const;

const textFieldSlotPropDefs = {
  side: { type: 'enum', values: sides },
  ...colorPropDef,
  gap: flexPropDefs.gap,
  px: paddingPropDefs.px,
  pl: paddingPropDefs.pl,
  pr: paddingPropDefs.pr,
} satisfies {
  side: PropDef<(typeof sides)[number]>;
  gap: typeof flexPropDefs.gap;
  px: typeof paddingPropDefs.px;
  pl: typeof paddingPropDefs.pl;
  pr: typeof paddingPropDefs.pr;
};

export { textFieldRootPropDefs, textFieldSlotPropDefs };
