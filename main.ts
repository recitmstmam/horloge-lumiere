input.onButtonPressed(Button.A, function () {
    if (hours < 23) {
        hours += 1
    } else {
        hours = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    ampm = !(ampm)
})
input.onButtonPressed(Button.B, function () {
    if (minutes < 59) {
        minutes += 1
    } else {
        minutes = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    adjust = hours
    if (ampm) {
        if (hours > 12) {
            adjust = hours - 12
        } else {
            if (hours == 0) {
                adjust = 12
            }
        }
    }
    time = "" + adjust
    time = "" + time + ":"
    time = "" + time + Math.trunc(minutes / 10)
    time = "" + time + Math.trunc(minutes % 10)
    if (ampm) {
        if (hours > 11) {
            time = "" + time + "PM"
        } else {
            time = "" + time + "AM"
        }
    }
    basic.showString(time)
})
let hours = 0
let minutes = 0
let adjust = 0
let time = ""
let ampm = false
ampm = false
time = ""
adjust = 0
minutes = 0
hours = 0
basic.forever(function () {
    basic.pause(60000)
    if (minutes < 59) {
        minutes += 1
    } else {
        minutes = 0
        if (hours < 23) {
            hours += 1
        } else {
            hours = 0
        }
    }
})
basic.forever(function () {
    if (hours == 11 && minutes == 19) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    }
    if (hours == 15 && minutes == 11) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    }
})
