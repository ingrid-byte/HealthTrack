const activeTabByContextAndClass = (context, classHide, classShow) => {
    $(context).addClass("active");
    $(classShow).show();
    $(classHide).hide();
}

$(document).ready(function () {
    activeTabByContextAndClass($(".login-header"), ".register", ".login");

    $(".register-header").click(function () {
        activeTabByContextAndClass(this, ".login", ".register");
        $(".login-header").removeClass("active");
    });

    $(".login-header").click(function () {
        activeTabByContextAndClass(this, ".register", ".login");
        $(".register-header").removeClass("active");
    });

});