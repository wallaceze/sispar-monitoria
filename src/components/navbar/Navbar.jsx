import styles from "./NavBar.module.scss";
import Historico from "../../assets/Header/Botao-Histórico.png";
import Home from "../../assets/Header/botão - Home.png";
import Pesquisa from "../../assets/Header/Botao-Pesquisa.png";
import Reembolso from "../../assets/Header/Botão - Reembolso.png";
import Sair from "../../assets/Header/Botão - Sair.png";
import Perfil from "../../assets/Header/image.png";
import Fechar from "../../assets/Header/imagem-fechar-header.png";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className={styles.navBarEstilo}>
      <button>
        <img src={Fechar} alt="imagem abrir e fechar" />
      </button>

      <section>
        <img src={Perfil} alt="imagem do perfil" />

        <div className={styles.boxButton}>
          <button
            onClick={() => {
              navigate("/reembolsos");
            }}
          >
            <img src={Home} alt="imagem Home" />
          </button>

          <button
            onClick={() => {
              navigate("/solicitacao");
            }}
          >
            <img src={Reembolso} alt="imagem Reembolso" />
          </button>

          <button
            onClick={() => {
              navigate("/reembolsos");
            }}
          >
            <img src={Pesquisa} alt="imagem Pesquisa" />
          </button>

          <button
            onClick={() => {
              navigate("/solicitacao");
            }}
          >
            <img src={Historico} alt="imagem Reembolso" />
          </button>
        </div>
      </section>

      <button
        className={styles.buttonSair}
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={Sair} alt="imagem sair" />
      </button>
    </nav>
  );
}
export default NavBar;