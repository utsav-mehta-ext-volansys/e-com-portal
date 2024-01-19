import { React, useEffect, useState } from 'react';
import './App.css';
import Category from './components/Category';
import { getCategories, getProducts } from './utils/apiRequest';
function App() {

  const [categories, setCategories] = useState({ errorMsg: '', data: [] });
  const [products, setProducts] = useState({ errorMsg: '', data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const response = await getCategories();
      setCategories(response)
    }
    fetchData()
  }, [])

  const handleCategoryClick = async (id) => {
    const response = await getProducts(id)
    setProducts(response)
  }
  const renderCategories = () => {
    return categories.data.map((category) => {
      return (
        <Category onCategoryClick={() => handleCategoryClick(category.id)} key={category.id} id={category.id} title={category.title} />
      )
    })
  }
  const renderProducts = () => {
    return products.data.map((product) => {
      return (
        <div key={product.id}>{product.title}</div>
      )
    })
  }
  return (
    <>
      <header>My Store</header>
      <section>
        <nav>
          {categories.errorMsg && <div>{categories.errorMsg}</div>}
          {categories.data && renderCategories()}
        </nav>
        <article>
          <h1>Products</h1>
          {products.errorMsg && <div>{products.errorMsg}</div>}
          {products.data && renderProducts()}
        </article>
      </section>
      <footer>footer</footer>
    </>
  );
}

export default App;
