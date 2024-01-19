import { React, useEffect, useState } from 'react';
import './App.css';
import Category from './components/Category';
import { fetcher } from './utils/apiRequest';
function App() {

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetcher('categories')
      setCategories(data)
    }
    fetchData()
  }, [])

  const handleCategoryClick = async (id) => {
    const data = await fetcher(`products?cat_id=${id}`)
    setProducts(data)
  }
  const renderCategories = () => {
    return categories.map((category) => {
      return (
        <Category onCategoryClick={() => handleCategoryClick(category.id)} key={category.id} id={category.id} title={category.title} />
      )
    })
  }
  const renderProducts = () => {
    return products.map((product) => {
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
          {categories && renderCategories()}
        </nav>
        <article>
          <h1>Products</h1>
          {products && renderProducts()}
        </article>
      </section>
      <footer>footer</footer>
    </>
  );
}

export default App;
