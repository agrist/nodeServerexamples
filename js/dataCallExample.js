$( document ).ready(function() {
console.log("document is ready");
});

/*

var JSONTest = function() {
//$("button").click(function(){

//event.preventDefault(); //does not send the forms data via normal call as a form
//prepare sending data from existing form fields
var $form = $(this),
username = $form.find('input[name=username]').val,
password = $form.find('input[name=password]').val,
url = "http://127.0.0.1:8090/seetext" ;//$form.attr("action")"";

//actually sending the request as (url, json)
var posted = $.post(url, {username:username, password:password});

posted.done(function(data){
  $.find('endResult').text(data);
});

});
*/

var JSONTest = function() {

    var resultDiv = $("#endResult");
    var $form = $(this),
    username = $form.find('input[name=username]').val,
    password = $form.find('input[name=password]').val;
    $.ajax({
        url: "http://127.0.0.1:8090/seeSecuretext",
        type: "POST",
        data: { username: username, password: password },
        dataType: "json",
        success: function (result) {
            switch (result) {
                case true:
                    processResponse(result);
                    break;
                default:
                    resultDiv.html(result);
                    console.log(result);
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
        }
    });
};
