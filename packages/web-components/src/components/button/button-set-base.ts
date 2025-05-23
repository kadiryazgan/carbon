/**
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import styles from './button.scss?lit';
import { prefix } from '../../globals/settings';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Button set without button checks
 *
 * @element cds-button-set-base
 */
@customElement(`${prefix}-button-set-base`)
class CDSButtonSetBase extends LitElement {
  render() {
    return html`<slot></slot>`;
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'list');
  }

  static styles = styles;
}

export default CDSButtonSetBase;
