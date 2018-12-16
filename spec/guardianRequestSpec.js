describe('GuardianRequest', function() {
  var guardianRequest;
  describe('".getContent"', function() {
    it('contains "webTitle:"', function() {
      expect(guardianRequest.getRawOutput()).includes("webTitle:");
    });
  });
});
