import {renderComponent, expect} from '../../../test_helper';
import PrefList from '../../../../src/client/containers/pref-list';

describe('PrefList', () => {
  let container;

  beforeEach(() => {
    container = renderComponent(PrefList);
  });

  it('has the correct class', () => {
    expect(container).to.have.class('PrefList');
  });

  it('shows the search and submit buttons', () => {
    expect(container).to.contain('Choose Neighborhood');
    expect(container).to.contain('Find Cafes')
  });

  it('shows the 9 preference options', () => {
    expect(container).to.contain('Coffee');
    expect(container).to.contain('Ambiance');
    expect(container).to.contain('Rating');
    expect(container).to.contain('Seats');
    expect(container).to.contain('Outlets');
    expect(container).to.contain('Bathrooms');
    expect(container).to.contain('Line');
    expect(container).to.contain('Noise');
    expect(container).to.contain('Price');
  });
});