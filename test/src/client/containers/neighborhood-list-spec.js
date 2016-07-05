import {renderComponent, expect} from '../../../test_helper';
import NeighborhoodList from '../../../../src/client/containers/neighborhood-list';

describe('NeighborhoodList', () => {
  let container;

  beforeEach(() => {
    container = renderComponent(NeighborhoodList);
  });

  it('has the correct class', () => {
    expect(container).to.have.class('NeighborhoodList');
  });

  it('displays header', () => {
    expect(container).to.have.class('NeighborhoodList');
  })

  it('shows the search and submit buttons', () => {
    expect(container).to.contain('Back to Prefs');
  });

  it('shows 9 neighborhoods', () => {
    expect(container).to.contain('Mission');
    expect(container).to.contain('Castro');
    expect(container).to.contain('Sunset');
    expect(container).to.contain('Richmond');
    expect(container).to.contain('Marina');
    expect(container).to.contain('North Beach');
    expect(container).to.contain('Haight');
    expect(container).to.contain('FiDi / Soma');
    expect(container).to.contain('Twin Peaks');
  });
});