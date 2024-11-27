import ProductItem from "./ProductItem";
import styles from "./ProductCategory.module.css";

const ProductCategory = (props) => {
  return (
    <div>
      <span className={styles.categoryLabel}>{props.category}</span>

      {props.products.map((product, index) => (
        <ProductItem key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductCategory;
