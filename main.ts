input.onGesture(Gesture.LogoUp, function () {
    timer = 10
})
input.onGesture(Gesture.LogoDown, function () {
    timer = 10
})
let timer = 0
timer = 0
basic.forever(function () {
    if (timer > 0) {
        basic.showNumber(timer)
        basic.pause(1000)
        timer += -1
    } else {
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.SmallSquare)
    }
})
