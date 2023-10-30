'use client'

import { useState } from "react"

type ParamsProps = {
    params: {
        data: string[]
    }
}

export function AddToCartButton({ params }: ParamsProps) {
    const [count, setCount] = useState(0)
    const [message, setMessage] = useState("")

    function addToCart() {
        setCount((state) => state + 1)
        setMessage(`Produto ${params.data} adicionado ao carrinho.`)
    }

    return (
        <div className="pt-6 flex flex-col justify-center">
            <button
                onClick={addToCart}
                className="bg-blue-500 px-6 py-2 rounded-md text-white"
            >
                Adicionar ao carrinho ({count})
            </button>

            <small className="mt-3 tracking-wide text-xs font-medium text-black">
                {message}
            </small>
        </div>
    )
}