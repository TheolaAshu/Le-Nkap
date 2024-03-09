import axios from "axios";
import { useEffect, useState } from "react";

const boxStyles = "flex items-center gap-10 justify-center border p-4 py-3";

function Category() {
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleAddCategory = async (e) => {
    e.preventDefault();

    setLoading(true);

    await axios
      .post(
        "https://le-nkap-v1.onrender.com/categories",
        {
          name: category,
          type: "expense",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        console.log(response);

        fetchCategories();

        alert("Category created!");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert("Error creaating category!");
        return;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const fetchCategories = async () => {
    axios
      .get("https://le-nkap-v1.onrender.com/categories", {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);

        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Error fetching category!");
        return;
      });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <form onSubmit={handleAddCategory}>
      <h2 className="text-2xl font-medium mb-6 text-gray-700">Category</h2>

      <div className="flex pr-10">
        <input
          className="w-full p-4 py-3 text-[1rem] border"
          type="text"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          placeholder="New category"
        />
        <button
          className="text-[1rem] whitespace-nowrap bg-teal-500 p-4 py-3 text-white"
          type="submit"
        >
          {loading ? "Loading..." : "Create Category"}
        </button>
      </div>

      <div className="grid py-6 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
        {categories &&
          categories.length > 0 &&
          categories.map((category, index) => {
            return (
              <div key={index} className={boxStyles}>
                <span>{category?.name}</span>{" "}
                <button title="delete" className="text-xl text-red-300">
                  x
                </button>
              </div>
            );
          })}
      </div>
    </form>
  );
}

export default Category;
