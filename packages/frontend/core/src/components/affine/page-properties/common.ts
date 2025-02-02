import { cssVar } from '@toeverything/theme';
import { atom } from 'jotai';
import { createContext } from 'react';

import type { PagePropertiesManager } from './page-properties-manager';

// @ts-expect-error this should always be set
export const managerContext = createContext<PagePropertiesManager>();
export const pageInfoCollapsedAtom = atom(false);

type TagColorHelper<T> = T extends `paletteLine${infer Color}` ? Color : never;
type TagColorName = TagColorHelper<Parameters<typeof cssVar>[0]>;

const tagColorIds: TagColorName[] = [
  'Red',
  'Magenta',
  'Orange',
  'Yellow',
  'Green',
  'Teal',
  'Blue',
  'Purple',
  'Grey',
];

export const tagColors = tagColorIds.map(
  color => [color, cssVar(`paletteLine${color}`)] as const
);
