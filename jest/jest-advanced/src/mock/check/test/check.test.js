const check = require("../check");

describe("Check", () => {
  let onSuccess;
  let onFail;

  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it("predicate", () => {
    check(() => true, onSuccess, onFail);
    expect(onSuccess.mock.calls.length).toEqual(1);
  });

  it("predicate fail", () => {
    check(() => false, onSuccess, onFail);
    expect(onFail).toHaveBeenCalledTimes(1);
  });
});
