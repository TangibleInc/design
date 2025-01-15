import { colorPropDef } from '../props/color.prop';
import { highContrastPropDef } from '../props/high-contrast.prop';
import { leadingTrimPropDef } from '../props/leading-trim.prop';
import { widthPropDefs } from '../props/width.props';

import type { PropDef } from '../props/prop-def';

const alignValues = ['start', 'center', 'end', 'baseline', 'stretch'] as const;
const orientationValues = ['horizontal', 'vertical'] as const;
const sizes = ['1', '2', '3'] as const;

const dataListRootPropDefs = {
  orientation: {
    type: 'enum',
    className: 't-orientation',
    values: orientationValues,
    default: 'horizontal',
    responsive: true,
  },
  size: {
    type: 'enum',
    className: 't-size',
    values: sizes,
    default: '2',
    responsive: true,
  },
  trim: {
    ...leadingTrimPropDef.trim,
    className: 't-trim', // Custom trim styles due to grid layout
  },
} satisfies {
  orientation: PropDef<(typeof orientationValues)[number]>;
  size: PropDef<(typeof sizes)[number]>;
  trim: typeof leadingTrimPropDef.trim;
};

const dataListItemPropDefs = {
  align: {
    type: 'enum',
    className: 't-ai',
    values: alignValues,
    responsive: true,
  },
} satisfies {
  align: PropDef<(typeof alignValues)[number]>;
};

const dataListLabelPropDefs = {
  ...widthPropDefs,
  ...colorPropDef,
  ...highContrastPropDef,
};

export { dataListRootPropDefs, dataListItemPropDefs, dataListLabelPropDefs };
