import React from 'react';
import { css, minify } from 'aphrodite/no-important';
import { compose } from '../utils';

// Shortening class names for easier accessing elements in development
minify(false);

/*
`styles` props:
- width
- height
- padding
- boxShadow [ main, hover, active ]

re: `children` (default prop - basically content)
- "`props.children` is just a reference to what is between the opening and closing tags of the component."
- See: https://codeburst.io/a-quick-intro-to-reacts-props-children-cb3d2fce4891
*/

const Card = ({ styles, children }) => (
  <div className={css( compose('card')(styles) )}>
    {children}
  </div>
);

export default Card;
