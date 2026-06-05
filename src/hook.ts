import { useContext } from 'react';

import { Context } from './context.ts';

import ContextInterface from './interfaces/context.ts';

export default function useLaravelReactI18n<T extends string = string>() {
  return useContext<ContextInterface<T>>(Context);
}
