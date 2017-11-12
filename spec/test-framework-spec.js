describe('test-framework-spec',
  assert("assert passes for true assertion",
    ("PASSED: 0 === 0" === assert("0 === 0", 0 === 0))
  ),
  assert("assert fails for false assertion",
    ("FAILED: 0 === 1" === assert("0 === 1", 0 === 1))
  )
);
