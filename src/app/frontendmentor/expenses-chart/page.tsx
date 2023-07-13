/* eslint-disable @next/next/no-img-element */
import { ChartItem } from './ChartColumn'
import data from './data.json'
import './style.css'

export default function ExpensesChart() {
  return (
    <div className="grid min-h-screen content-center justify-center p-2">
      <main className="max-w-3xl space-y-4">
        <div className="flex rounded-2xl bg-[--soft-red] p-5 text-[--very-pale-orange]">
          <div className="flex flex-col gap-2">
            My balance
            <span className="text-2xl font-bold">$921.48</span>
          </div>

          <img
            src="/logo-expenses.svg"
            className="ml-auto self-center"
            alt="Logo"
          />
        </div>

        <div className="space-y-10 rounded-2xl bg-[--very-pale-orange] p-5">
          <h1 className="text-xl font-bold text-[--dark-brown] sm:mb-20 sm:text-2xl">
            Spending - Last 7 days
          </h1>

          <ChartItem.Chart>
            {data.map((item, key) => {
              return (
                <ChartItem.Column
                  amount={item.amount}
                  name={item.day}
                  key={key}
                />
              )
            })}
          </ChartItem.Chart>

          <div className="flex gap-12 border-t-2 border-t-[--cream] pt-8 sm:gap-36">
            <div className="flex flex-col self-end">
              Total this month
              <span className="text-3xl font-bold text-[--dark-brown] sm:text-4xl">
                $478.33
              </span>
            </div>
            <div className="ml-auto flex flex-col self-end">
              <span className="text-end font-bold text-[--dark-brown]">
                +2.4%
              </span>{' '}
              from last month
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
