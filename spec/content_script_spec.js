describe("content_scripts", function(){
  beforeEach(function(){
    chrome = {
      extension: {
      	tab: 
        sendMessage: function(){}
      }
    }
    spyOn(chrome.extension, 'sendMessage');
  });

  describe("firepad_on_github_content_script", function(){
	  it("should add firepad to github edit page", function(){
	    runs(function(){
        require(['firepad_on_github_content_script']);
	    });

	    waits(100);

	    runs(function(){
	      expect(chrome.extension.sendMessage).toHaveBeenCalledWith('gist', jasmine.any(Function));
	    });
	  })
  })
});