/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useCallback, Ref, ForwardedRef } from 'react';

// TODO: Investigate updating this hook based on the following code from
// https://github.com/carbon-design-system/carbon/pull/18611:
// https://github.com/adamalston/carbon/blob/dd403b6b10de3d8a6ccd8d2e21174c908c1e890a/packages/react/src/components/ListBox/ListBoxMenuItem.tsx#L23-L46
/**
 * Combine multiple refs into a single ref. This use useful when you have two
 * refs from both `React.forwardRef` and `useRef` that you would like to add to
 * the same node.
 */
export const useMergedRefs = <T extends unknown>(
  refs: ForwardedRef<T>[]
): Ref<T> => {
  return useCallback((node) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref !== null && ref !== undefined) {
        ref.current = node;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
};
