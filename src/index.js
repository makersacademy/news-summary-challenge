import { Controller } from "./controller";

document.addEventListener('DOMContentLoader', function(){

    var guardianAPI = new GuardianAPI();
    guardianAPI.fetchGuardianData();

    setTimeout(function(){
        var guardianData = guardianAPI.returnGuardianData();
        var controller = new Controller(guardianData)

    }, 300);
});