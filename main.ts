input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.pause(100)
    basic.showString("Tem" + input.temperature() + "C")
    if (input.temperature() == 15) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else if (input.temperature() == 30) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
basic.forever(function () {
	
})
