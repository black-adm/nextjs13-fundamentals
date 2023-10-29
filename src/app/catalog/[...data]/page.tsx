'use client'

interface ShirtsProps {
    params: {
        data: string[]
    }
}

export default function Product({ params }: ShirtsProps) {
    const [shirtId, color, size] = params.data

    console.log(params)

    function addToCart() {
        alert(`Produto ${params.data} adicionado ao carrinho.`)
        console.log(`Você adicionou o produto ${params.data} ao carrinho!`)
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="pt-20 pb-8 space-y-4">
                <p className="text-xl font-bold text-black">
                    Camiseta -
                    <strong className="text-lg text-blue-500"> {shirtId} </strong>
                </p>

                <p className="text-xl font-bold text-black">
                    Cor -
                    <strong className="text-lg text-blue-500"> {color} </strong>
                </p>

                <p className="text-xl font-bold text-black">
                    Tamanho -
                    <strong className="text-lg text-blue-500"> {size} </strong>
                </p>
            </div>

            <button
                onClick={addToCart}
                className="bg-blue-500 px-6 py-2 rounded-md text-white"
            >
                Adicionar ao carrinho
            </button>
        </div>

    )
}
