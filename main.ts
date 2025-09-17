input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    radio.sendString("sass")
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Heart)
})
basic.forever(function () {
	
})
