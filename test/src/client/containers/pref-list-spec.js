import {renderComponent, expect} from '../../../test_helper';
import PrefList from '../../../../src/client/containers/pref-list';

describe('PrefList', () => {
  let component;

  beforeEach(() => {
    //const props = { comments: ['New Comment', 'Other New Comment'] };
    component = renderComponent(PrefList);
  });

  it('has the correct class', () => {
    expect(component).to.have.class('PrefList');
  });

  it('shows the search and submit buttons', () => {
    expect(component).to.contain('Choose Neighborhood');
    expect(component).to.contain('Find Cafes')
  });

  it('shows the 9 preference options', () => {
    expect(component).to.contain('Coffee');
    expect(component).to.contain('Ambiance');
    expect(component).to.contain('Rating');
    expect(component).to.contain('Seats');
    expect(component).to.contain('Outlets');
    expect(component).to.contain('Bathrooms');
    expect(component).to.contain('Line');
    expect(component).to.contain('Noise');
    expect(component).to.contain('Price');
  });
});