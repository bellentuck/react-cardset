// one thing to test for: can supply custom inputs for card shadows
// - if input is < 2 || > 3 || invalid, should throw
// - if input === 2, should default appropriately
// - if input === 3, should work accordingly

// otherwise, another thing to test for will be that the correct style is grabbed from the lib and used, when its corresponding prop is supplied.

/* global describe it */

import { expect } from 'chai';
import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from '../components/Card';

const adapter = new Adapter();
enzyme.configure({ adapter });

console.log('GOT HERE')

describe('The baseline Card component', () => {
  let card;
  beforeEach(() => {
    card = shallow(<Card>{'hi'}</Card>);
  })

  it.only('Should render a component', () => {
    expect(shallow(card).not.to.throw())
  })

  describe('Wrapping children in an appropriately-styled card', () => {
    it('Takes an optional `styles` prop')
    it('If `styles` does not contain box shadows...')
  });
});
