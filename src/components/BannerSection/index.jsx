import Banner from "../../assets/banner.jpg"
import styles from "./style.module.css"

export const BannerSection = () => {
  return (
    <div className="container">
      <section className={styles.flexbox}>
          <img src={Banner} alt="imagem do Banner" />
          <div>
              <h1 className="title1">FashionStore</h1>
              <a className="btn">Confira as OFERTAS</a>
          </div>
      </section>
    </div>
  )
}
