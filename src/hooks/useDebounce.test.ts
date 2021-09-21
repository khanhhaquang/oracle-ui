import { renderHook, act } from '@testing-library/react-hooks';
import useDebounce from './useDebounce';

describe('useDebounce', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should be defined', () => {
    expect(useDebounce).toBeDefined();
  });

  it('should return one debounced value', () => {
    const hook = renderHook(() => useDebounce<string>('foo', 1000));
    expect(hook.result.current).toBe('foo');
    expect(typeof hook.result.current).toBe('string');
  });

  it('should update value after a delay', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce<string>(value, delay),
      {
        initialProps: { value: '', delay: 5 },
      },
    );

    expect(result.current).toBe('');
    act(() => jest.advanceTimersByTime(3));
    expect(result.current).toBe('');

    rerender({ value: 'Foo', delay: 5 });

    expect(result.current).toBe('');
    act(() => jest.advanceTimersByTime(3));
    expect(result.current).toBe('');
    act(() => jest.advanceTimersByTime(3));
    expect(result.current).toBe('Foo');
  });
});
