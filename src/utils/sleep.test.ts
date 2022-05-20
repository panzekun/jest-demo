import sleep from "utils/sleep";

describe('sleep', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  })

  it('可以睡眠 1000ms', async () => {

    const act = async (callback: () => void) => {
      await sleep(1000)
      callback();
    }

    const mockCallback = jest.fn();

    const promise = act(mockCallback);

    expect(mockCallback).not.toHaveBeenCalled();

    jest.runAllTimers();
     // 执行 callback 内容
     await promise;

    expect(mockCallback).toHaveBeenCalledTimes(1);
  })
})