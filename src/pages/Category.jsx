const boxStyles = "flex items-center gap-10 justify-center border p-4 py-3";

function Category() {
  return (
    <div>
      <h2 className="text-2xl font-medium mb-6 text-gray-700">Category</h2>

      <div className="flex pr-10">
        <input
          className="w-full p-4 py-3 text-[1rem] border"
          type="text"
          placeholder="New category"
        />
        <button className="text-[1rem] whitespace-nowrap bg-teal-500 p-4 py-3 text-white">
          Create Category
        </button>
      </div>

      <div className="grid py-6 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
        <div className={boxStyles}>
          <span>Category 1</span>{" "}
          <button title="delete" className="text-xl text-red-300">
            x
          </button>
        </div>
      </div>
    </div>
  );
}

export default Category;
