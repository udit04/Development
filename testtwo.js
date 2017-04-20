var expect = require('chai').expect,
    assert = require('assert'),
    base_url = require("./script.js");

describe("hello sample test",function(){	
	it("must return Hello World", function(done) {
		base_url.hello(function(reply){
			expect(reply).to.be.equal("Hello World test118");
			done();
		});
    });

})
   
