import { asChildPropDef } from '../props/as-child.prop';

const tabsRootPropDefs = {
  ...asChildPropDef,
};

const tabsContentPropDefs = {
  ...asChildPropDef,
};

export { baseTabListPropDefs as tabsListPropDefs } from './base-tab-list.props';
export { tabsRootPropDefs, tabsContentPropDefs };
