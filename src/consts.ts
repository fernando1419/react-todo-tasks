/* eslint-disable no-unused-vars */
export enum FILTER_TYPES {
   ALL = 'all',
   ACTIVE = 'active',
   COMPLETED = 'completed'
};

export const FILTERS_BUTTONS = {
   [FILTER_TYPES.ALL]: {
      literal: 'All',
      href: `/?filter=${FILTER_TYPES.ALL}`
   },
   [FILTER_TYPES.ACTIVE]: {
      literal: 'Active',
      href: `/?filter=${FILTER_TYPES.ACTIVE}`
   },
   [FILTER_TYPES.COMPLETED]: {
      literal: 'Completed',
      href: `/?filter=${FILTER_TYPES.COMPLETED}`
   }
};
