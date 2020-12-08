input.onButtonPressed(Button.A, function () {
    adjust = heure
    time = "" + adjust
    time = "" + time + ":"
    time = "" + time + Math.trunc(minutes / 10)
    time = "" + time + Math.trunc(minutes % 10)
    basic.showString(time)
})
let minutes = 0
let heure = 0
let adjust = 0
let time = ""
time = ""
adjust = 0
heure = 15
minutes = 58
let strip = neopixel.create(DigitalPin.P0, 40, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.forever(function () {
    basic.pause(60000)
    if (minutes < 59) {
        minutes += 1
    } else {
        minutes = 0
        if (heure < 23) {
            heure += 1
        } else {
            heure = 0
        }
    }
})
basic.forever(function () {
    if (heure == 15 && minutes == 59) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (heure == 16 && minutes == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
