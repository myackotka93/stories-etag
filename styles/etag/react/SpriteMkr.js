import React from 'react';
export const SpriteMkr = props => (
  <svg viewBox="0 0 20 20" width="16px" height="16px" {...props} className={`etag-font ${props.className ? props.className : ''}`}><path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zM6 11.81v9.346h1.558v-8.045l6.101 4.592v3.453h1.558V17.38a.909.909 0 00-.363-.726l-7.399-5.569A.909.909 0 006 11.81zm19.99 0a.909.909 0 00-1.455-.726l-7.4 5.569a.909.909 0 00-.362.726v3.777h1.558v-3.453l6.1-4.592v8.045h1.559z" fillRule="evenodd" /></svg>
);
