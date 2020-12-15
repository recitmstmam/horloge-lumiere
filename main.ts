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
// Ajuster l'heure lorsque vous démarrerez le micro:bit
heure = 15
// Ajuster les minutes lorsque vous démarrerez le micro:bit
minutes = 58
let strip = neopixel.create(DigitalPin.P12, 40, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
// Ne pas toucher à cette partie du programme car elle gère votre horloge.
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
    // Permet d'ajuster l'intensité lumineuse des DEL
    strip.setBrightness(255)
    // Ajuster l'heure à laquelle vous désirez ouvrir les lumières.
    if (heure == 17 && minutes == 0) {
        // Permet de sélectionner des couleurs d'éclairage.  Ici les DEL 0 à 19 sont bleues et les DEL 20 à 40 sont rouges.  Si on veut ajouter d'autres couleurs, il faut créer un nouvelle variable (ex : range3).SI on veut une seule couleur, on retire les blocs en lien avec "range2".
        range = strip.range(0, 20)
        range2 = strip.range(20, 20)
        range.showColor(neopixel.colors(NeoPixelColors.Blue))
        range2.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    // Ajuster l'heure à laquelle vous désirez fermer les lumières.
    if (heure == 7 && minutes == 30) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
