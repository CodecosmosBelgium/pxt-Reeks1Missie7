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
        player.execute(`scoreboard players set @a cartType ${typeOfCart}`)
        player.execute("function levels/nextCart")
    }

    //% block="detecteer minecart $type"
    export function detectCart(type:CartType) {
        return typeOfCart === type
    }

}
