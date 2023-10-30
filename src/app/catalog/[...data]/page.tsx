import { AddToCartButton } from "./add-to-cart-button"

interface ShirtsProps {
    params: {
        data: string[]
    }
}

export default async function Product({ params }: ShirtsProps) {
    const avatar = 'https://avatars.githubusercontent.com/u/68331373?v=4'
    const response = await fetch('https://api.github.com/users/black-adm')
    const user = await response.json()

    const [shirtId, color, size] = params.data
    console.log(params)

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="pt-20 space-y-4">
                <span className="flex justify-center py-4">
                    <img
                        className="rounded-full w-28"
                        src={avatar}
                        alt="Foto de perfil do github"
                    />
                </span>

                {user && (
                    <h1 className="text-lg font-normal text-black">
                        Interesses de <strong className="font-extrabold">{user.name}</strong>
                    </h1>
                )}

                <section className="flex flex-col items-center">
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
                </section>


                <AddToCartButton params={params} />
            </div>
        </div>

    )
}
