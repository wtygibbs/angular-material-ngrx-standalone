import { layoutReducer, initialState } from './layout.reducer';

describe('Layout Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = layoutReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
