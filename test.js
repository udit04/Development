var expect = require('chai').expect,
    assert = require('assert'),
    base_url = require("./script.js");

describe("hello unit test",function(){
	it("should return Hello World", function(done) {
		base_url.hello(function(reply){
			expect(reply).to.be.equal("Hello World test119");
			done();
		});
    });

})
   
