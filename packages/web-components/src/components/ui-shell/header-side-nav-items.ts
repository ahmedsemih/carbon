/**
 * Copyright IBM Corp. 2023, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import { prefix } from '../../globals/settings';
import styles from './side-nav.scss?lit';

/**
 * Header Side Nav Items section
 *
 * @element cds-header-side-nav-items
 */
@customElement(`${prefix}-header-side-nav-items`)
class CDSHeaderSideNavItems extends LitElement {
  /**
   * Optionally specify if container will have a bottom divider to differentiate
   * between original sidenav items and header menu items. False by default.
   */
  @property({ type: Boolean, attribute: 'has-divider' })
  hasDivider = false;

  connectedCallback() {
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'list');
    }
    super.connectedCallback();
  }

  render() {
    return html`<slot></slot>`;
  }

  static styles = styles;
}

export default CDSHeaderSideNavItems;
