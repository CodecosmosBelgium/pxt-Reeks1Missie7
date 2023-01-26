enum Cart {
    //% block="Lege minecart"
    EmptyCart,
    //% block="Redstone minecart"
    RedstoneCart,
}

enum Lever {
    //% block="1"
    Lever1,
    //% block="2"
    Lever2,
    //% block="3"
    Lever3,
    //% block="4"
    Lever4,
}

enum LeverStatus {
    //% block="aan"
    On,
    //% block="uit"
    Off,
}

//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {
    //% block="volgend karretje"
    //% block.loc.nl="volgend karretje nederlands"
    export function nextCart() {
        typeOfCart = randint(0,3)
        player.execute(`scoreboard players set @a cartType ${typeOfCart}`)
        player.execute("function levels/nextCart")
    }

    //% block="detecteer minecart $type"
    export function detectCart(type:Cart) {
        return typeOfCart === type
    }

    //% block="zet schakelaar $lever $status"
    export function setLever(lever:Lever, status:LeverStatus) {
        const detectPositions = [world(166, 44, 350), world(165, 44, 350), world(164, 44, 350), world(163, 44, 350)]
        player.say(`lever: ${lever}; status: ${status}`)


        if(blocks.testForBlock(Block.GreenWool, detectPositions[lever]) !== !!(status === LeverStatus.On)) {
            blocks.place(status === LeverStatus.On ? Block.GreenWool : Block.RedConcrete, detectPositions[lever])
            if(lever === Lever.Lever1) {
                agent.teleport(world(173,44,327),CompassDirection.West)
                agent.interact(FourDirection.Forward)
                return;
            }
            if (lever === Lever.Lever2) {
                agent.teleport(world(161, 44, 327), CompassDirection.East)
                agent.interact(FourDirection.Forward)
                return;
            }
            if (lever === Lever.Lever3) {
                agent.teleport(world(173, 44, 323), CompassDirection.West)
                agent.interact(FourDirection.Forward)
                return;
            }
            if (lever === Lever.Lever4) {
                agent.teleport(world(161, 44, 323), CompassDirection.East)
                agent.interact(FourDirection.Forward)
                return;
            }
        }
        
    }

}
