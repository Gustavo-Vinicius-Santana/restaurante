/*IMPORTAÇÃO DE COMPONENTES*/
import CardBurguer from "./components/CardBurguer";

/*IMPORTAÇÃO DAS IMAGENS*/
import Image from "next/image";
import bg from "../app/imagens/bg.png"
import cheese from "../app/imagens/cheese_burguer.png"

import cheeseCatalogo from "../app/imagens/cheese_catalogo.png"
import smash from "../app/imagens/smash.png"
import cheese2 from "../app/imagens/cheese2.png"
import cheese3 from "../app/imagens/cheese3.png"
import cheeseBacon from "../app/imagens/cheese_bacon.png"
import pastel from "../app/imagens/pastel.png"

import cartWhite from "../app/imagens/cart_branco.png"


export default function Home() {
  return (
    <>
      <header className="flex relative items-center justify-center bg-[url('../app/imagens/bg.png')]">
        <div className=" conteiner-imagem-fundo">
          
          <div className="flex flex-col justify-center items-center z-1 absolute top-0 left-0 w-full h-96">
            <Image className="md:mt-32 max-sm:mb-0 " src={cheese}  width={185} height={185} alt="fundo da imagem" />

            <h1 className="mt-4  text-white font-Inter font-bold text-2xl">Red Burguer</h1>

            <p className="mt-4   text-white font-Roboto text-sm">Rua dev sucesso, 12, Campo Grande, MS</p>
            
            <p className="mt-4 p-2 rounded-lg text-white bg-green-500 text-base">Seg á dom - 18:00 as 22:00</p>
  
          </div>
        </div>


      </header>



      <main className="flex flex-col items-center">
        <h1 className="mt-8  mb-8  text-center font-bold text-3xl ">Conheça o nosso menu</h1>

        <div className="flex md:flex-row flex-col">
          <div className="lista-1">
            <CardBurguer nome="cheese burguer duplo" desc="pão levinho de fermentação natural da trigou, burger 160g, queijo prato e maionense da casa" preco="35,00" img={cheeseCatalogo} />

            <CardBurguer nome="Smash Burguer" desc="pão levinho de fermentação natural da trigou, burger 160g, queijo prato e maionense da casa" preco="35,00" img={smash} />

            <CardBurguer nome="Cheese burguer" desc="pão levinho de fermentação natural da trigou, burger 160g, queijo prato e maionense da casa" preco="35,00" img={cheese2} />

            <CardBurguer nome="Cheese burguer" desc="pão levinho de fermentação natural da trigou, burger 160g, queijo prato e maionense da casa" preco="35,00" img={cheeseCatalogo} />
          </div>

          <div className="lista-2">
          <CardBurguer nome="Cheese burguer" desc="pão levinho de fermentação natural da trigou, burger 160g, queijo prato e maionense da casa" preco="35,00" img={cheese3} />

          <CardBurguer nome="Cheese Bacon" desc="pão levinho de fermentação natural da trigou, burger 160g, queijo prato e maionense da casa" preco="35,00" img={cheeseBacon} />

          <CardBurguer nome="cheese burguer" desc="pão levinho de fermentação natural da trigou, burger 160g, queijo prato e maionense da casa" preco="35,00" img={cheeseCatalogo} />

          <CardBurguer nome="Pastel" desc="pão levinho de fermentação natural da trigou, burger 160g, queijo prato e maionense da casa" preco="35,00" img={pastel} />
          </div>
        </div>

        <div className="p-4   flex flex-row justify-center w-full bg-red-500">
          <p className="text-white text-center text-[14px]">( 1 )CONFIRA O SEU CARRINHO </p>
          <Image src={cartWhite}  width={25} height={25} alt="imagem cart" />
        </div>

      </main>
    </>

  );
}
