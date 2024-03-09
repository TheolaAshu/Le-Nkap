function Expense() {
  return (
    <div>
      <h2 className="text-2xl font-medium mb-6 text-gray-700">Expenses</h2>
      <div className="flex flex-col gap-2 pr-10">
      <select className="text-black p-4 py-3 border" name= "categories" id= "categories">
  <option value="">--Please choose an option a category--</option>
  <option value="dog">Feeding</option>
  <option value="cat">Transportation</option>
  <option value="hamster">Pet</option>
  <option value="parrot">Clothing</option>
  <option value="spider">Rents</option>
  <option value="goldfish">Housing</option>
        </select>
        <input
          className="w-full p-4 py-3 text-[1rem] border"
          type="text"
          placeholder="New expense"
        />
        <button className=" w-fit text-[1rem] whitespace-nowrap bg-teal-500 p-4 py-3 text-white">
          Create Expense
        </button>
        
      </div>
    </div>
  );
}

export default Expense;
