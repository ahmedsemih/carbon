/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import { ChevronRight } from '@carbon/icons-react';
import SkeletonText from '../SkeletonText';
import { usePrefix } from '../../internal/usePrefix';

export interface AccordionSkeletonProps {
  /**
   * Specify the alignment of the accordion heading
   * title and chevron.
   */
  align?: 'start' | 'end';

  /**
   * Specify an optional className to add.
   */
  className?: string;

  /**
   * Set number of items to render.
   */
  count?: number;

  /**
   * Specify whether an individual AccordionItem should
   * be flush, default is false.
   */
  isFlush?: boolean;

  /**
   * `false` to not display the first item opened.
   */
  open?: boolean;

  /**
   * Specify if the Accordion should be an ordered list,
   * default is `false`
   */
  ordered?: boolean;
}

function AccordionSkeleton({
  align = 'end',
  className,
  count = 4,
  isFlush,
  open = true,
  ordered = false,
  ...rest
}: AccordionSkeletonProps) {
  const prefix = usePrefix();
  const classes = cx(`${prefix}--accordion`, `${prefix}--skeleton`, className, {
    [`${prefix}--accordion--${align}`]: align,
    [`${prefix}--accordion--flush`]: isFlush && align !== 'start',
  });
  const numSkeletonItems = open ? count - 1 : count;
  const ListTag = ordered ? 'ol' : 'ul';
  return (
    <ListTag className={classes} {...rest}>
      {open && (
        <li
          className={`${prefix}--accordion__item ${prefix}--accordion__item--active`}>
          <span className={`${prefix}--accordion__heading`}>
            <ChevronRight className={`${prefix}--accordion__arrow`} />
            <SkeletonText className={`${prefix}--accordion__title`} />
          </span>
          <div className={`${prefix}--accordion__content`}>
            <SkeletonText width="90%" />
            <SkeletonText width="80%" />
            <SkeletonText width="95%" />
          </div>
        </li>
      )}
      {Array.from({ length: numSkeletonItems }).map((_, i) => (
        <AccordionSkeletonItem key={i} />
      ))}
    </ListTag>
  );
}

AccordionSkeleton.propTypes = {
  /**
   * Specify the alignment of the accordion heading title and chevron.
   */
  align: PropTypes.oneOf(['start', 'end']),

  /**
   * Specify an optional className to add.
   */
  className: PropTypes.string,

  /**
   * Set number of items to render
   */
  count: PropTypes.number,

  /**
   * Specify whether an individual AccordionItem should be flush, default is false
   */
  isFlush: PropTypes.bool,

  /**
   * `false` to not display the first item opened
   */
  open: PropTypes.bool,
};

function AccordionSkeletonItem() {
  const prefix = usePrefix();
  return (
    <li className={`${prefix}--accordion__item`}>
      <span className={`${prefix}--accordion__heading`}>
        <ChevronRight className={`${prefix}--accordion__arrow`} />
        <SkeletonText className={`${prefix}--accordion__title`} />
      </span>
    </li>
  );
}

export default AccordionSkeleton;
export { AccordionSkeleton };
