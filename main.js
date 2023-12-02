//from 是从哪里开始；
//括号里面第一个参数是，要绑定动画内容，这里是left  div；
//后面的数值，是动画持续时间，2就是2秒；
//宽度是0，这里解释下，咱们在css里面设置了宽度为30%；
//结合form就很好理解了，宽度从0开始，变化为页面的30%宽；
//持续时间是2s；
//ease，这个很好理解，就是动画的运动模式，进出快慢
TweenMax.from(".left", 2, {
    width: "0",
    ease: Expo.easeInOut
});

//delay 是延迟的意思，主要是为了让动画之间衔接顺滑
//很简单，第一个动画开始之后，1.5s，开始执行这个动画
//第一个动画持续2s，也是就第一个动画结束前0.5s，执行这个动画 
//opacity，很简单，就是透明度，从0到1，就是淡入的效果。
TweenMax.from(".right", 2, {
    delay: 1.5,
    width: "0",
    opacity: "0",
    ease: Expo.easeInOut
});
//其余部分我就复制过来了，都很容易理解，x是水平位置，y是处置位置， rotation就是旋转
//还有一些其他的具体的参数，大家想了解，可以加我联系方式，发给大家。
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
TweenMax.from(".menu", 2, {
    delay: 3.5,
    y: 20,
    opacity: 0,
    rotation: 90,
    ease: Expo.easeInOut
});