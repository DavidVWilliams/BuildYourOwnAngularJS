'use strict';
var Scope = require('../src/scope');
// Describe is the name or description of the function.  
// In this case the function name is 'Scope' (Also referred to as a suite)
describe('Scope', function() {
	// Define a single spec. Should describe one or more expectations 
	// that test the state of the code.
	it('can be constructed and used as an object', function() {
		var scope = new Scope();
		scope.aProperty = 1;
		expect(scope.aProperty).toBe(1);
	});
	describe('digest', function() {
		var scope;
		beforeEach(function() {
			scope = new Scope();
		});
		it('calls the listener function of a watch on first $digest', function() {
			var watchFn = function() {return 'wat';};
			var listenerFn = jasmine.createSpy();
			scope.$watch(watchFn, listenerFn);
			scope.$digest();
			expect(listenerFn).toHaveBeenCalled();
		});
		it('calls the watch function with the scope as the argument', function() {
			var watchFn = jasmine.createSpy();
			var listenerFn = function() {};
			scope.$watch(watchFn, listenerFn);
			scope.$digest();
			expect(watchFn).toHaveBeenCalledWith(scope);
		});
	});
});