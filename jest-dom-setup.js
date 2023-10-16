import '@testing-library/jest-dom'
global.console = {
    log: jest.fn(),
    debug: console.debug,
    trace: console.trace,
  };