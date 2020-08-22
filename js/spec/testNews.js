const { isMainThread } = require("worker_threads");

(function(exports) {

    dillscribe('This is a test description', function() {
        it('This is an it block', function() {
            assert.isTrue(1 === 1)
            assert.isFalse(1 !== 1)
        })
    })

})(this);