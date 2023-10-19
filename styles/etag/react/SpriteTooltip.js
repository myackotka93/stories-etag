import React from 'react';
export const SpriteTooltip = props => (
  <svg viewBox="0 0 20 20" width="16px" height="16px" {...props} className={`etag-font ${props.className ? props.className : ''}`}><path d="M10 .313a9.687 9.687 0 1 0 0 19.375A9.687 9.687 0 0 0 19.688 10C19.688 4.652 15.35.312 10 .312zm0 4.296a1.64 1.64 0 1 1 0 3.282 1.64 1.64 0 0 1 0-3.282zm2.188 9.922c0 .26-.21.469-.47.469H8.282a.469.469 0 0 1-.469-.469v-.937c0-.26.21-.469.47-.469h.468v-2.5h-.469a.469.469 0 0 1-.469-.469V9.22c0-.26.21-.469.47-.469h2.5c.258 0 .468.21.468.469v3.906h.469c.259 0 .469.21.469.469v.937z" fillRule="evenodd" /></svg>
);
