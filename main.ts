input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    music.playMelody("C D E F G A B C5 ", 999)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("GET ANNYOYED")
    for (let index = 0; index < 1e+38; index++) {
        music.playMelody("C5 C C5 C C5 C C5 C ", 999)
        music.playMelody("C5 C C5 C C5 C C5 C ", 999)
        music.playMelody("C5 C5 B B A A G G ", 999)
        music.playMelody("C5 C5 B B A A G G ", 999)
        music.playMelody("C5 C5 B B A A G G ", 999)
        music.playMelody("C5 C5 B B A A G G ", 999)
        music.playMelody("C5 C5 B B A A G G ", 999)
    }
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C5 B A G F E D C ", 998)
    basic.showString("PRESS A + B")
})
input.onGesture(Gesture.Shake, function () {
    music.ringTone(10000)
    music.setVolume(25599)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.InBackground)
})
music.setVolume(100000000000000000000)
music.playMelody("C D E F G A B C5 ", 2554)
basic.showString("PRESS A")
