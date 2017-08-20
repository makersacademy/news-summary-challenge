(function(exports) {
	function ApiCall(api) {
		this.xml = new XMLHttpRequest();
		this.api = api
		this.response = ""
	}
	ApiCall.prototype.getContent = function() {
		this.xml.open("Get", this.api, false);
		this.xml.send();
		this.response = JSON.parse(this.xml.response)
	};
	exports.ApiCall = ApiCall;
})(this);
