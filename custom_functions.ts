enum CartType {
    //% block="Lege minecart"
    EmptyCart,
    //% block="Redstone minecart"
    RedstoneCart,
}

//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {

    //% block="volgend karretje"
    export function nextCart() {
        typeOfCart = randint(0,3)
        player.execute(`scoreboard players set @a ${typeOfCart}`)
        player.execute("function levels/nextCart")
    }

    //% block="detecteer minecart $type"
    export function detectCart(type:CartType) {
        const detectPosition = world(0,0,0)

        if(blocks.testForBlock(GLASS, detectPosition) && typeOfCart === type) {
            return true
        }

        if (blocks.testForBlock(DIAMOND_BLOCK, detectPosition) && typeOfCart === type) {
            return true
        }

        if (blocks.testForBlock(GOLD_BLOCK, detectPosition) && typeOfCart === type) {
            return true
        }

        if (blocks.testForBlock(REDSTONE_BLOCK, detectPosition) && typeOfCart === type) {
            return true
        }

        return false
    }

}
