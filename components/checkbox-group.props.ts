import { asChildPropDef } from '../props/as-child.prop';
import { baseCheckboxPropDefs } from './base-checkbox.props';

const checkboxGroupRootPropDefs = {
  ...asChildPropDef,
  ...baseCheckboxPropDefs,
};

export { checkboxGroupRootPropDefs };
