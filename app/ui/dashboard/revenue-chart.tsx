import { generateYAxis } from '@/app/lib/utils';
import { lusitana } from '@/app/ui/fonts';

import {fetchRevenue} from "@/app/lib/data";


// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default async function RevenueChart()
{
  const revenue = await fetchRevenue();
  const chartHeight = 330;

  const { yAxisLabels, topLabel } = generateYAxis(revenue);

  if (!revenue || revenue.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-2 text-xl md:text-2xl text-black`}>
        Recent Revenue
      </h2>
      {<div className="rounded-xl bg-gray-200 p-5">
        <div className="sm:grid-cols-13 mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 md:gap-4">
          <div
            className="mb-6 hidden flex-col justify-between text-sm text-black sm:flex"
            style={{ height: `${chartHeight}px` }}
          >
            {yAxisLabels.map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>

          {revenue.map((month) => (
            <div key={month.month} className="flex flex-col items-center gap-2">
              <div
                className="w-full rounded-md bg-green-800"
                style={{
                  height: `${(chartHeight / topLabel) * month.revenue}px`,
                }}
              ></div>
              <p className="-rotate-90 text-sm text-black sm:rotate-0">
                {month.month}
              </p>
            </div>
          ))}
        </div>

      </div> }
    </div>
  );
}
