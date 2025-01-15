import { colorPropDef } from '../props/color.prop';
import { highContrastPropDef } from '../props/high-contrast.prop';
import { radiusPropDef } from '../props/radius.prop';

import type { PropDef } from '../props/prop-def';

const sizes = ['1', '2', '3'] as const;

const selectRootPropDefs = {
  size: { type: 'enum', className: 't-size', values: sizes, default: '2', responsive: true },
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
};

const triggerVariants = ['classic', 'surface', 'soft', 'ghost'] as const;

const selectTriggerPropDefs = {
  variant: { type: 'enum', className: 't-variant', values: triggerVariants, default: 'surface' },
  ...colorPropDef,
  ...radiusPropDef,
  placeholder: { type: 'string' },
} satisfies {
  variant: PropDef<(typeof triggerVariants)[number]>;
  placeholder: PropDef<string>;
};

const contentVariants = ['solid', 'soft'] as const;

const selectContentPropDefs = {
  variant: { type: 'enum', className: 't-variant', values: contentVariants, default: 'solid' },
  ...colorPropDef,
  ...highContrastPropDef,
} satisfies {
  variant: PropDef<(typeof contentVariants)[number]>;
};

export { selectRootPropDefs, selectTriggerPropDefs, selectContentPropDefs };
