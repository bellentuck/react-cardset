import React from 'react';
import Card from './Card';

const requiredPropErr = (component, prop) =>
  new ReferenceError(`The ${component} component requires a ${prop} prop.`);

const propTypeErr = (component, prop, types) =>
  new TypeError(`The ${component} component requires its ${prop} prop to be ${types}.`);


const Cardset = ({ cardContents, styles }) => {

  if (!cardContents) throw requiredPropErr('Cardset', 'cardContents');

  const isCardArrLiteral = Array.isArray(cardContents);
  const isCardObjLiteral = Object.prototype.toString.call(cardContents).slice(8, -1) === 'Object';
  if (!(isCardArrLiteral || isCardObjLiteral)) {
    throw propTypeErr('Cardset', 'cardContents', 'an array or object literal');
  }

  return (
    Object.keys(cardContents).map(key => {
      const singleCardContents = cardContents[key];
      return (
        React.createElement(
          Card,
          { key, styles },
          singleCardContents
        )
        // <Card key={key} styles={styles}>
        //   {singleCardContents}
        // </Card>
      );
    })
  );
}

export default Cardset;
