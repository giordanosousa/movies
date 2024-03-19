import Footer from "../../components/Footer";
import Header from "../../components/Header";
import erro404 from "./erro404.png";
import styles from "./PageNotFound.module.css";

function PageNotFound(){
    return(
        <>
            <Header />
            <section className={styles.container}>
                <h2>Ops! Conteudo não localizada!</h2>
                <img src={erro404} alt="logo da pagina nao localizada"></img>
            </section>
            <Footer />
        </>
    );
}

export default PageNotFound;