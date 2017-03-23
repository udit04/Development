var expect = require('chai').expect,
    assert = require('assert'),
    base_url = require("./script.js");

describe("hello sample test",function(){
	it("must return Hello World", function(done) {
		base_url.hello(function(reply){
<<<<<<< HEAD
			expect(reply).to.be.equal("Hello World test111");
=======
			expect(reply).to.be.equal("Hello World test109");
>>>>>>> 83b72b307102459a1f323b753a66e1ff27a23ca9
			done();
		});
    });

})
   