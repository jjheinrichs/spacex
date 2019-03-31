import * as launches from './launches.actions';
import {
  initialState,
  reducer
} from './launches.reducer';

describe('Launches reducer', () => {
  describe('initial state', () => {
    it('should return initial state', () => {
      const noopAction = { type: 'NOOP' } as any;
      const newState = reducer(undefined, noopAction);

      expect(newState).toEqual(initialState);
    });
  });

  describe('SetOrder', () => {
    it('should set order if valid string', () => {
      const order = 'desc';

      const noopAction = { type: 'NOOP' } as any;
      const setOrderAction = new launches.SetOrder(order);

      const originalState = reducer(undefined, noopAction);
      expect(originalState).toEqual(initialState);

      const nextState = reducer(originalState, setOrderAction);
      expect(nextState.params.order).toEqual(order);
    });

    it('should not set order if invalid string', () => {
      const order = 'descending';

      const noopAction = { type: 'NOOP' } as any;
      const setOrderAction = new launches.SetOrder(order);

      const originalState = reducer(undefined, noopAction);
      expect(originalState).toEqual(initialState);

      const nextState = reducer(originalState, setOrderAction);
      expect(nextState.params.order).not.toEqual(order);
      expect(nextState.params.order).toEqual(originalState.params.order);
    });
  });

  describe('SetOffset', () => {
    it('should set offset if valid number', () => {
      const offset = 10;

      const noopAction = { type: 'NOOP' } as any;
      const setStartAction = new launches.SetOffset(offset);

      const originalState = reducer(undefined, noopAction);
      expect(originalState).toEqual(initialState);

      const nextState = reducer(originalState, setStartAction);
      expect(nextState.params.offset).toEqual(offset);
    });

    it('should not set offset if invalid number', () => {
      const offset = '10';

      const noopAction = { type: 'NOOP' } as any;
      // @ts-ignore:
      const setStartAction = new launches.SetOffset(offset);

      const originalState = reducer(undefined, noopAction);
      expect(originalState).toEqual(initialState);

      const nextState = reducer(originalState, setStartAction);
      expect(nextState.params.offset).not.toEqual(offset);
      expect(nextState.params.offset).toEqual(originalState.params.offset);
    });
  });
});
