const welcome_texts = [
    "Welcome back!",
    "Welcome!",
    "Hey there!"
];
$("#welcometext").text(welcome_texts[Math.random() * welcome_texts.length | 0]);


const backrounds = [
    "img/yenn-sea-1.jpg",
    "https://game-guide.fr/wp-content/uploads/2020/06/AmongTreesScreenshot5.jpg",
    "https://i.imgur.com/csou8q3.jpeg"
];
$("#background").css("background-image", `url(${backrounds[Math.random() * backrounds.length | 0]})`);


function showcredits() {
    $("html").addClass("is-clipped");
    $("#modal").addClass("is-active");
};
