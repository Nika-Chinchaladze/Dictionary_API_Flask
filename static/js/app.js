// Functionality For Font Styles:
$(".fontButton").click(function() {
    $("body").css("font-family", this.textContent);
})

// Functionality For Theme Color:
$("#toggleButton").click(function(){
    var bodyColor = $("body").css("background-color");
    themeChange(bodyColor);
})

function themeChange(bodyColor){
    switch(bodyColor) {
        case "rgb(255, 251, 245)":
            $("body").css("background-color", "rgb(5, 5, 5)");
            $("body").css("color", "rgb(250, 250, 250)");
            $(".example").css("color", "rgb(160, 160, 160)");
            break;
        
        case "rgb(5, 5, 5)":
            $("body").css("background-color", "rgb(255, 251, 245)");
            $("body").css("color", "rgb(5, 5, 5)");
            $(".example").css("color", "rgb(90, 90, 90)");
            break;
    }
}

// Functionality For Sound Effects:
$(".playButton").click(function() {
    var audioName = $("#sound").val();
    if (audioName.length > 0) {
        var audio = new Audio(audioName);
        audio.play();
    }
})