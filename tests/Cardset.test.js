/* global describe beforeEach it */

// This resource was key to making Babel happen (specifically babel-register and test script tips) --
// https://github.com/babel/example-node-server

import { expect } from 'chai';
import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Cardset from '../components/Cardset';

const adapter = new Adapter();
enzyme.configure({ adapter });

describe('The `Cardset` component', () => {
  let set;
  const contents = ['a', 'b', 'c', 'd', 'e'];
  const indexedContents = { wnryubva: 'a', dmfufnen: 'b', muncroie: 'c', agtjrbtb: 'd', quixeowy: 'e' };

  describe('Inputs', () => {
    it.only('Can take two props, `cardContents` and `styles`', () => {
      set = shallow(
        <Cardset cardContents={indexedContents} styles={{}} />
      )
      expect(set).not.to.throw();
    });
    it('Requires only the `cardContents` prop', () => {
      const err = 'The Cardset component requires a cardContents prop';
      expect(shallow(<Cardset cardContents={indexedContents} />)).not.to.throw();
      expect(shallow(<Cardset styles={{}} />)).to.throw(err);
      expect(shallow(<Cardset />)).to.throw(err);
    });
    it('Requires the `cardContents` prop to be an array or object literal', () => {
      const err = `The Cardset component requires its cardContents prop
                  to be an array or object literal.`;
      expect(shallow(<Cardset cardContents={contents} />)).not.to.throw();
      expect(shallow(<Cardset cardContents={indexedContents} />)).not.to.throw();
      expect(shallow(<Cardset cardContents={function(){}} />)).to.throw(err);
      expect(shallow(<Cardset cardContents="string" />)).to.throw(err);
      expect(shallow(<Cardset cardContents={42} />)).to.throw(err);
    });
  });


  xdescribe('Outputs based on props', () => {
    beforeEach(() => {
      set = shallow(<Cardset cardContents={indexedContents} />);
    });
    describe('Outputs based on the `contents` prop', () => {
      it('Renders a `Card` component for each item in the `contents` prop');
      it('Utilizes object keys for keys in each React `Card` component');
      it('Defaults to indices for keys if an array passed in');
    });

    xdescribe('Outputs based on the size prop');
  });

});
