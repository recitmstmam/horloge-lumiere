input.onButtonPressed(Button.A, function () {
    adjust = heure
    time = "" + adjust
    time = "" + time + ":"
    time = "" + time + Math.trunc(minutes / 10)
    time = "" + time + Math.trunc(minutes % 10)
    basic.showString(time)
})
let range2: neopixel.Strip = null
let range: neopixel.Strip = null
let minutes = 0
let heure = 0
let adjust = 0
let time = ""
time = ""
adjust = 0
heure = 15
minutes = 58
let strip = neopixel.create(DigitalPin.P12, 40, NeoPixelMode.RGB)
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
    strip.setBrightness(255)
    if (heure == 17 && minutes == 0) {
        range = strip.range(0, 20)
        range2 = strip.range(20, 20)
        range.showColor(neopixel.colors(NeoPixelColors.Blue))
        range2.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    if (heure == 7 && minutes == 30) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
