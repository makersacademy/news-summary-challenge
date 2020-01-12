(function (exports) {

    function GuardianAPI() {

        var guardianData = [];


        GuardianAPI.prototype.fetchGuardianData = function (url, callback) {
            var xhr = new XMLHttpRequest();
            var url = 'https://content.guardianapis.com/search?from-date=2020-01-12&to-date=2020-01-12';

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var response = JSON.parse(xhr.response)
                    guardianData = callback(response);
                }
            }

            xhr.open('GET', url, true);
            xhr.send('');
        }

        GuardianAPI.prototype.returnGuardianData = function () {
            return guardianData;
        };

    }

    exports.GuardianAPI = GuardianAPI;
})(this);