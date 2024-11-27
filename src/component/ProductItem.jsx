import styles from "./ProductItem.module.css";

const ProductItem = (product) => {
  return (
    <div className={styles.productItem}>
      <span className={styles.productName}>{product.name}</span>
      <span>{product.price}</span>
      <span>{product.status ? "Instock" : "Out of Stock"}</span>
    </div>
  );
};

export default ProductItem;
