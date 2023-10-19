import React from 'react';
export const SpriteStx = props => (
  <svg viewBox="0 0 20 20" width="16px" height="16px" {...props} className={`etag-font ${props.className ? props.className : ''}`}><path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm8.5 16.978h-17v2.07h5.181L9.071 24.5h2.683l4.239-6.423 4.24 6.423h2.697l-3.611-5.467H24.5v-2.055zM11.71 7.5H9.014l3.568 5.395H7.5v2.084h17v-2.084h-5.081L22.987 7.5h-2.698l-4.296 6.509L11.71 7.5z" fillRule="evenodd" /></svg>
);
