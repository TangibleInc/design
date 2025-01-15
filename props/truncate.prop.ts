import type { PropDef } from './prop-def';

const truncatePropDef = {
  truncate: {
    type: 'boolean',
    className: 't-truncate',
  },
} satisfies {
  truncate: PropDef<boolean>;
};

export { truncatePropDef };
