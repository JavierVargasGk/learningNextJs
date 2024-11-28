import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";

export default function page(){
    return (
        <div className="w-full">
            <Breadcrumbs breadcrumbs={
                [
                    {label: 'Dashboard', href: "/dashboard"},
                    {label: "Customers", href: "/dashboard/Customers", active: true}
                ]
            }/>
        </div>
    );
}