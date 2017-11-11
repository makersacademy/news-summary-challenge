(function(exports) {

    function WebSpike (containerId) {
        this._container = document.getElementById(containerId);
        this._header = '<div class="spike-header"><h3>Spike <small>v0.1.0</small></h3></div><hr><div id="testOutput" class="test-output"></div>';
        this._container.insertAdjacentHTML('beforeend', this._header);
        this._outputWindow = document.getElementById('testOutput');
    }

    WebSpike.prototype = {
        webify: function(type, message, infoObj) {
            let webString = '';

            switch (type) {
                case 'describe-passed':
                    webString = '<div class="spike-describe passed"><p>' + message + '</p></div><hr>';
                    break;
                case 'describe-failed':
                    webString = '<div class="spike-describe failed"><p>' + message + '</p></div><hr>';
                    break;
                case 'it-passed':
                    webString = '<div class="spike-it passed"><p><h4>' + message + '</h4></p></div>';
                    break;
                case 'it-failed':
                    webString = '<div class="spike-it failed"><p><h4>' + message + '</h4></p></div>';
                    break;
                case 'passed':
                    webString = '<div class="spike-passed passed"><p><h4>' + message + '</h4></p></div>';
                    break;
                case 'failed':
                    webString = '<div class="spike-failed failed"><p><h4>' + message + '</h4></p></div>';
                    break
            }

            this._outputWindow.insertAdjacentHTML('beforeend', webString);
        },

    };
    exports.WebSpike = new WebSpike('testWindow');

})(this);