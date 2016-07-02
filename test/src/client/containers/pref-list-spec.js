import { renderComponent, expect } from '../../../test_helper';
import PrefList from '../../../../src/client/containers/pref-list';

describe('PrefList', () => {
  let component;

  beforeEach(() => {
    const props = { comments: ['New Comment', 'Other New Comment'] };
    component = renderComponent(PrefList, null, props);
  });

  it('shows an LI for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('shows each comment that is provided', () => {
    expect(component).to.contain('New Comment');
    expect(component).to.contain('Other New Comment');
  });
});