export async function getCategories() {
  const endPoint = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await endPoint.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endPoint = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const categories = await endPoint.json();
  return categories;
}
