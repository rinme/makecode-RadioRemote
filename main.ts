let connect: boolean = false
let cnt: int32 = 0
let rgroup: int8 = 69

radio.setGroup(rgroup)
basic.showIcon(IconNames.No)

basic.forever(function () {
    if (connect = false) {

    } else {
        radio.sendValue("mgx", input.acceleration(Dimension.X))
        radio.sendValue("mgy", input.acceleration(Dimension.Y))
        radio.sendValue("count", cnt++)
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "handshake") {
        if (value = rgroup) {
            
        }
    }
})