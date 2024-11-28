'use client'


export default function Error({reset}: {
    reset: () => void
}) {
    return (
        <main className="flex h-full flex-col items-center justify-center">
            <h2 className="text-2xl text-center">Ocurio un problema</h2>
            <label>Comunicate con un dev</label>
            <button
                className="mt-2 rounded-md bg-green-800 px-4 py-2 text-sm text-white transition hover:scale-110 hover:bg-green-500 "
                onClick={() => reset()}>
                volver
            </button>
        </main>
    );
}