// This utility file provides a constructor-like helper method for styling card boxes.

import { StyleSheet } from 'aphrodite/no-important';
import {balancedLight} from '../boxShadowLibrary';

const setShadows = boxShadow => {
  let boxShadowDefault, boxShadowHover, boxShadowActive;
  if (!boxShadow || !Array.isArray(boxShadow)) {
    boxShadowDefault = balancedLight.default;
    boxShadowHover = balancedLight.hover;
    boxShadowActive = balancedLight.active;
  } else {
    if (boxShadow.length < 2 || boxShadow.length > 3) {
      throw Error(`The "boxShadow" prop should reference an object of the
      form "{ default, hover }" or "{ default, hover, active }".`);
    }
    [ boxShadowDefault, boxShadowHover, boxShadowActive ] = boxShadow;
    if (boxShadow.length === 2) boxShadowActive = boxShadowDefault;
  }
  return [
    boxShadowDefault,
    boxShadowHover,
    boxShadowActive
  ];
}

const setCard = (
  width, height, padding,
  boxShadowDefault, boxShadowHover, boxShadowActive
) => {
  const { box } = StyleSheet.create({
    box: {
      display: 'flex',
      justifyContent: 'space-around',
      width: width || '50%',
      height: height || '200px',
      padding: padding || '14px',
      boxShadow: boxShadowDefault,
      marginLeft: '5%',
      ':hover': {
        boxShadow: boxShadowHover,
      },
      ':active': {
        boxShadow: boxShadowActive,
      }
    }
  });
  return box;
}

const composeCardStyles = ({ width, height, padding, boxShadow }) => {
  const [ boxShadowDefault, boxShadowHover, boxShadowActive ] = setShadows(boxShadow);
  return setCard(width, height, padding, boxShadowDefault, boxShadowHover, boxShadowActive);
}

export default composeCardStyles;
