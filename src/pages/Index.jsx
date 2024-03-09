import { useState } from "react";

function Index() {
  const [income, setIncome] = useState(333000);
  const [expense, setExpense] = useState(76000);

  console.log("====================================");
  console.log({ setExpense, setIncome });
  console.log("====================================");

  return (
    <div>
      <h2 className="text-2xl font-medium mb-6 text-gray-700">Dashboard</h2>
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 pr-10">
        <div className="w-full flex gap-4 flex-col items-center justify-center rounded-lg bg-gray-200 p-4">
          <h2 className="font-medium text-2xl">Total Income</h2>
          <h3 className="font-semibold text-3xl text-gray-500">
            {income} FCFA
          </h3>
        </div>
        <div className="w-full flex gap-4 flex-col items-center justify-center rounded-lg bg-gray-200 p-4">
          <h2 className="font-medium text-2xl">Total Expenses</h2>
          <h3 className="font-semibold text-3xl text-gray-500">
            {expense} FCFA
          </h3>
        </div>
        <div className="w-full flex gap-4 flex-col items-center justify-center rounded-lg bg-gray-200 p-4">
          <h2 className="font-medium text-2xl">Account Status</h2>
          <div className="flex flex-col items-end">
            <h3
              className={`font-semibold text-3xl ${
                income - expense <= 0 ? "text-red-500" : "text-green-500"
              }`}
            >
              {income - expense > 0 ? "+" : ""}
              {income - expense} FCFA
            </h3>
            <span className="italic">
              {income - expense <= 0 ? "Negative" : "Gain 🎉"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
