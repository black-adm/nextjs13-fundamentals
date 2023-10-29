interface ShirtsProps {
    params: {
        data: string[]
    }
}

export default function Product({ params }: ShirtsProps) {
    const [ shirtId, size, color ] = params.data

    return (
        <div>
            <p> Shirt : {shirtId} </p>
            <p> Size :  {size} </p>
            <p> Color : {color} </p>
        </div>

    )
}
