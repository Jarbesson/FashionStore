import { CategoryCard } from "./CategoryCard";
import { products } from "../../data/prodcuts";
import styles from "./style.module.css"

export const ProductsCategory = () => {
  return (
    <div className="container">
      <section className={styles.productsSection}>
        <h2 className="title2">PRODUTOS EM DESATQUE</h2>
        <div>
          <ul className={styles.productList}>
            {products.map((product) => {
              const { id, name, price, img } = product;

              return (
                <li key={id}>
                  <CategoryCard title={name} image={img} price={price} />
                </li>
              );
            })}
          </ul>
          <div>
            <a className="btn">saiba mais</a>
          </div>
        </div>
      </section>
    </div>
  );
};
