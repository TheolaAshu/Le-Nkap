function Income() {
  return (
    <div>
      <h2 className="text-2xl font-medium mb-6 text-gray-700">Income</h2>
      <div className="flex pr-10">
        <input
          className="w-full p-4 py-3 text-[1rem] border"
          type="text"
          placeholder="New income"
        />
        <button className="text-[1rem] whitespace-nowrap bg-teal-500 p-4 py-3 text-white">
          Add Income
        </button>
      </div>
    </div>
  );
}

export default Income;
