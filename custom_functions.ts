enum Cart {
    //% block="lege mijnkar"
    EmptyCart,
    //% block="tnt mijnkar"
    RedstoneCart,
    //% block="kist mijnkar"
    ChestCart,
    //% block="trechter mijnkar"
    FurnaceCart,
}

enum Lever {
    //% block="1"
    Lever1,
    //% block="2"
    Lever2,
    //% block="3"
    Lever3,
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
    //% block.loc.nl="volgend NL karretje"
    export function nextCart() {
        player.execute("execute @a[tag=!cartInGame] ~ ~ ~ function levels/nextCart")
    }

    //% block="detecteer $typeOfCart"
    export function detectCart(typeOfCart:Cart) {
        const detectPosition = world(166, 44, 349)
        const statusBlocks = [Block.DiamondBlock,Block.GreenWool, Block.RedConcrete, Block.GoldBlock]
        
        return blocks.testForBlock(statusBlocks[typeOfCart], detectPosition)
    }

    //% block="zet schakelaar $lever $status"
    export function setLever(lever:Lever, status:LeverStatus) {
        const detectPositions = [world(166, 44, 350), world(165, 44, 350), world(164, 44, 350), world(163, 44, 350)]


        if(blocks.testForBlock(Block.GreenWool, detectPositions[lever]) !== !!(status === LeverStatus.On)) {
            blocks.place(status === LeverStatus.On ? Block.GreenWool : Block.RedConcrete, detectPositions[lever])
            if(lever === Lever.Lever1) {
                agent.teleport(world(169,44,326),CompassDirection.East)
                agent.interact(FourDirection.Forward)
                return;
            }
            if (lever === Lever.Lever2) {
                agent.teleport(world(169, 44, 324), CompassDirection.East)
                agent.interact(FourDirection.Forward)
                return;
            }
            if (lever === Lever.Lever3) {
                agent.teleport(world(165, 44, 324), CompassDirection.West)
                agent.interact(FourDirection.Forward)
                return;
            }
        }
        
    }

}
