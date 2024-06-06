import styles from "./style.module.css"

export const CategoryCard = ({title, image, price}) => {

    const priceFormated = price.toLocaleString('pt-BR', {style:"currency", currency:"BRL"});

return (
    <div className={styles.productCard}>
        <img src={image} alt={`Produto ${title}`} />
        <h3 className="title3">{title}</h3>
        {<p className="paragraphy">{priceFormated}</p>}
        {/* {<p className="paragraphy">R${price.toFixed(2).replace(".", ",")}</p>} */}
    </div>
  
    )
}