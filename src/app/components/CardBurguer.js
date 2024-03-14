import Image from "next/image";
import Cart from "@/app/imagens/cart.png"

export default function CardBurguer({nome, desc, preco, img}) {

    return(
        <>
            <div className="m-4  flex flex-row w-[612px]">
                <Image src={img}  width={144} height={144} alt="imagem hamburguer" />
                <div className="m-2">
                    <p className="font-Roboto font-bold text-[18px]">{nome}</p>
                    <p className="font-Roboto text-[16px]">{desc}</p>
                    <div className="mt-2 flex flex-row justify-between">
                        <p className="font-bold text-[18px]">R${preco}</p>

                        <Image src={Cart}  width={45} height={25} alt="imagem cart" />
                    </div>
                </div>
            </div>


        </>
    )
}