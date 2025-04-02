import { assignAttrsAtTag } from '..';
import { TransformFactory } from '../..';
import { includes } from 'ramda';

const OLD_ICON_NAMES = [
  'step-backward',
  'step-forward',
  'fast-backward',
  'fast-forward',
  'forward',
  'backward',
  'caret-up',
  'caret-down',
  'caret-left',
  'caret-right',
  'retweet',
  'swap-left',
  'swap-right',
  'loading',
  'loading-3-quarters',
  'coffee',
  'bars',
  'file-jpg',
  'inbox',
  'shopping-cart',
  'safety',
  'medium-workmark'
];

export const adjustViewBox: TransformFactory = assignAttrsAtTag(
  'svg',
  ({ name }) => ({
    viewBox: name.includes('qwikpage') ? '0 0 20 20' : (includes(name, OLD_ICON_NAMES) ? '0 0 1024 1024' : '64 64 896 896')
  })
);
