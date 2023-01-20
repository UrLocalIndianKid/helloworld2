input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    music.playMelody("C D E F G A B C5 ", 226)
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    music.ringTone(10000)
    music.setVolume(25599)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
})
music.setVolume(255)
music.playMelody("C D E F G A B C5 ", 2554)
