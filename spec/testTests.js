(function() {
	describe('TestClass');
	
	function canBeInstantiated() {
		console.log("canBeInstantiated:")
		var testClass = new TestClass('Test');
		assert.isTrue(testClass !== undefined);
	}
	canBeInstantiated();


	function returnsAttribute() {
		console.log("returnsAttribute:")
		var testClass = new TestClass('Juicy');
		assert.isTrue(testClass.read() === 'Juicy');
	}
	returnsAttribute();
	})();