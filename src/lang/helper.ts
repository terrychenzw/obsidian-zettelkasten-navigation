import { moment } from 'obsidian';

import zhCN from './locale/zh-cn';
import en from "./locale/en";




const localeMap: { [k: string]: Partial<typeof en> } = {
  en,
  'zh-cn': zhCN,
};

const locale = localeMap[moment.locale()];

export function t(str: keyof typeof en | string): string {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }

  return (
    (locale && locale[str as keyof typeof en]) ||
    en[str as keyof typeof en] ||
    str
  );
}