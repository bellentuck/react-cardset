import composeCardStyles from './composeCardStyles';

export const compose = styleType => {
  switch (styleType) {
    case 'card':
      return styles => composeCardStyles(styles || {});
    default:
      return styles => composeCardStyles(styles || {});
  }
}
