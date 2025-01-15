import { asChildPropDef } from '../props/as-child.prop';
import { heightPropDefs } from '../props/height.props';
import { widthPropDefs } from '../props/width.props';

import type { PropDef, GetPropDefTypes } from '../props/prop-def';

const contentSizes = ['1', '2', '3'] as const;

const hoverCardContentPropDefs = {
  ...asChildPropDef,
  size: {
    type: 'enum',
    className: 't-size',
    values: contentSizes,
    default: '2',
    responsive: true,
  },
  width: widthPropDefs.width,
  minWidth: widthPropDefs.minWidth,
  maxWidth: { ...widthPropDefs.maxWidth, default: '480px' },
  ...heightPropDefs,
} satisfies {
  width: PropDef<string>;
  minWidth: PropDef<string>;
  maxWidth: PropDef<string>;
  size: PropDef<(typeof contentSizes)[number]>;
};

type HoverCardContentOwnProps = GetPropDefTypes<
  typeof hoverCardContentPropDefs &
    typeof asChildPropDef &
    typeof widthPropDefs &
    typeof heightPropDefs
>;

export { hoverCardContentPropDefs };
export type { HoverCardContentOwnProps };
