const asyncSleep = async (time: number, fn: () => void): Promise<void> => {
    setTimeout(() => {
      console.log(1)
      Promise.resolve().then(() => {
        console.log(2)
        fn();
      });
    }, time);
  };
  describe("examples for fakeTimers", () => {
    beforeAll(() => {
      jest.useFakeTimers();
    });
    test("a test for a setTimeout with async function", async () => {
      const fn = jest.fn();
      asyncSleep(6000, fn);
      jest.runOnlyPendingTimers();
      await Promise.resolve();
      expect(fn).toBeCalled();
    });
  });