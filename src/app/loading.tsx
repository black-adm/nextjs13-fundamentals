export default function Loading() {
    return (
        <div className="flex justify-center items-center h-screen w-full gap-x-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-spin text-blue-500 lucide lucide-loader-2"
            >
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>

            <h2 className="text-xl font-medium text-black">
                Carregando ...
            </h2>
        </div>
    )
}