import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import {fetchRevenue} from "@/app/lib/data";

export default async function page(){
    const revenue = await fetchRevenue();
    return (
        <>
            <h1>Revenue Page</h1>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
            <RevenueChart revenue={revenue} />
            </div>
        </>
    );
}