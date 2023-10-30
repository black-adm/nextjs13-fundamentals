export async function LongWaitComponent() {
    await new Promise((resolve) => setTimeout(resolve, 5000))

    return (
        <strong>⏰ Componente carregado!</strong>
    )
}