/**
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import styles from './modal.scss?lit';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Modal footer.
 *
 * @element cds-modal-footer
 */
@customElement(`${prefix}-modal-footer`)
class CDSModalFooter extends LitElement {
  /**
   * `true` if this modal footer has more than two buttons.
   */
  @property({ type: Boolean, reflect: true, attribute: 'has-three-buttons' })
  hasThreeButtons = false;

  /**
   * Handles `slotchange` event.
   */
  private _handleSlotChange(event: Event) {
    const { selectorButtons } = this.constructor as typeof CDSModalFooter;
    this.hasThreeButtons =
      (event.target as HTMLSlotElement)
        .assignedNodes()
        .filter(
          (node) =>
            node.nodeType === Node.ELEMENT_NODE &&
            (node as Element).matches(selectorButtons)
        ).length > 2;
    this.requestUpdate();
  }

  render() {
    return html` <slot @slotchange="${this._handleSlotChange}"></slot> `;
  }

  /**
   * A selector that selects the child buttons.
   */
  static get selectorButtons() {
    return `${prefix}-button,${prefix}-modal-footer-button`;
  }

  static styles = styles;
}

export default CDSModalFooter;
