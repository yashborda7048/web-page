var fname = $("#fname");
var lname = $("#lname");
var uid = $("#uid");
var mob = $("#mob");
var email = $("#email");
var pass = $("#pass");
var submit = $("#submit");
$(document).ready(function () {
    $("#submit").click(function (e) {
        if (((fname.val()).trim() != 0) || ((lname.val()).trim() != 0) || ((uid.val()).trim() != 0) || ((mob.val()).trim() != 0) || ((email.val()).trim() != 0) || ((pass.val()).trim() != 0)) {
            var form = localStorage.getItem("form");
            var dataObj = (form == null) ? [] : JSON.parse(form);
            var formdetils = {
                fname: fname.val(),
                lname: lname.val(),
                uid: uid.val(),
                mob: mob.val(),
                email: email.val(),
                pass: pass.val(),
            };
            let isSame = false;
            for (let i = 0; i < dataObj.length; i++) {
                if ((formdetils.fname == dataObj[i].fname) && (formdetils.lname == dataObj[i].lname) && (formdetils.uid == dataObj[i].uid) && (formdetils.mob == dataObj[i].mob) && (formdetils.email == dataObj[i].email) && (formdetils.pass == dataObj[i].pass)) {
                    isSame = true;
                }
            }
            if (!(formdetils.fname).match('[A-Za-z]{3,20}')) {
                $("#fnamealt").html("** invalid.");
                isSame = true;
                return;
            } else {
                $("#fnamealt").hide();
            }
            if (!(formdetils.lname).match('[A-Za-z]{3,20}')) {
                $("#lnamealt").html("** invalid.");
                isSame = true;
                return;
            } else {
                $("#lnamealt").hide();
            }
            if ((formdetils.uid) == "") {
                $("#uidalt").html("** field user id.");
                isSame = true;
                return;
            } else {
                $("#uidalt").hide();
            }
            if (((formdetils.mob).length > 10) || ((formdetils.mob).length < 10) || /[A-Za-z]/.test(formdetils.mob)) {
                $("#mobalt").html("** only number are allowed.");
                isSame = true;
                return;
            } else {
                $("#mobalt").hide();
            }
            if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formdetils.email))) {
                $("#emailalt").html("**  Invalid email address.");
                isSame = true;
                return;
            } else {
                $("#emailalt").hide();
            }
            if (!(formdetils.pass).match(/(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}/)) {
                $("#passalt").html("Must contain at least one number and one uppercase and lowercase letter required.");
                isSame = true;
                return;
            } else {
                $("#passalt").hide();
            }
            if (!isSame) {
                dataObj.push(formdetils);
                localStorage.setItem("form", JSON.stringify(dataObj));
            };
            $("#fname").val("");
            $("#lname").val("");
            $("#uid").val("");
            $("#mob").val("");
            $("#email").val("");
            $("#pass").val("");
        }
    });
});