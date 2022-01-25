export default function categoryController(category) {
  const allowedCategories = ["children", "novel", "self help"];
  return new Promise((resolve, reject) => {
    if (allowedCategories.includes(category?.toLowerCase())) {
      resolve(true);
    } else {
      reject(new Error("Category is not valid."));
    }
  });
}
