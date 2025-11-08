radio.set_group(69)
basic.show_icon(IconNames.YES)

def on_forever():
    radio.send_value("mgx", input.acceleration(Dimension.X))
    radio.send_value("mgy", input.acceleration(Dimension.Y))
basic.forever(on_forever)
