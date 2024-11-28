import {roboto} from "@/app/ui/fonts";
import Link from "next/link";


export default async function page() {
    return (
        <>
            <main className={` flex h-full flex-col items-center justify-center gap-2`}>
                <h2 className={"text-black centered text-3xl full-w"}>Error 404</h2>
                <p className={`text-2xl `}>Invoice no encontrado</p>
                <Link href={'/dashboard/invoices'}
                      className={` ${roboto.className} mt-1 rounded-md bg-green-800 px-4 py-2 text-sm text-white  transition ease-in-out hover:bg-green-500 hover:scale-110 duration-400`}>Invoices</Link>
            </main>
        </>
    );
}