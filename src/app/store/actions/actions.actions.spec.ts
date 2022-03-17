import * as fromActions from './actions.actions';

describe('loadActionss', () => {
  it('should return an action', () => {
    expect(fromActions.loadActionss().type).toBe('[Actions] Load Actionss');
  });
});
