(function(exports) {
	function ApiCall(api) {
		this.xml = new XMLHttpRequest();
		this.api = api
		this.responseArray = ""
	}
	ApiCall.prototype.getContent = function() {
		this.xml.open("Get", this.api, false);
		this.xml.send();
		var response = JSON.parse(this.xml.response)
		this.responseArray = response.response.results
	};
	exports.ApiCall = ApiCall;
})(this);
