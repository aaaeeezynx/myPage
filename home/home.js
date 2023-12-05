TweenMax.from(".left", 2, {
    width: "0",
    ease: Expo.easeInOut
});

TweenMax.from(".right", 2, {
    delay: 1.5,
    width: "0",
    opacity: "0",
    ease: Expo.easeInOut
});

TweenMax.from(".info", 2, {
    delay: 3,
    width: "0",
    opacity: "1",
    x: -20,

    ease: Expo.easeInOut
});

TweenMax.from(".pic", 2, {
    delay: 3,
    width: "0",
    x: -20,
    ease: Expo.easeInOut
});
TweenMax.from(".logo", 2, {
    delay: 1.5,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
});
TweenMax.from(".brand", 2, {
    delay: 1.5,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
});
