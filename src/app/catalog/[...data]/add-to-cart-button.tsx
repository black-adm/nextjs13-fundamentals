'use client'

import { ReactNode, useState } from "react"

type ParamsProps = {
    params: {
        data: string[]
    }
}

export function AddToCartButton({ children }: { children: ReactNode }) {
    const [count, setCount] = useState(0)

    function addToCart() {
        setCount((state) => state + 1)
    }

    return (
        <div className="pt-6 flex flex-col justify-center">
            <button
                onClick={addToCart}
                className="bg-blue-500 px-6 py-2 rounded-md text-white"
            >
                Adicionar ao carrinho ({count})
            </button>
            {children}
        </div>
    )
}