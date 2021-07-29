import { ComponentType } from 'react';

import Counter from '../pages/Counter';

const counterConfig: IPageConfig = {
  title: 'Счетчик',
  path: '/counter',
  component: Counter,
};

export const PAGE_CONFIGS: IPageConfig[] = [
  counterConfig,
];

interface IPageConfig {
  title: string;
  path: string;
  component: ComponentType;
}
