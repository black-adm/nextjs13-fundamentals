export async function Example() {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return (
        <small className="mt-3 tracking-wide text-xs font-light text-black">
            Exemplo de um server-component em um client-component
        </small>
    )
}