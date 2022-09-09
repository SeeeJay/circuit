// 0 is OFF
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
})
// 1 is ON
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
})
basic.showIcon(IconNames.Pitchfork)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(1000)
})
