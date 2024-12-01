
$(function () {
	inituser();
});


function inituser(){
	var u = new newuser();
	$("#userid").html(u.username);
	$("#gexingqianming").html(u.usersign);
	$("#headpic").html('<img src="'+u.headpic+'" width="100%" height="100%">');
	$("#headimg").html('<img src="'+u.headglass+'" width="100%" height="100%">');
}