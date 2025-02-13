import styles from "./Login.module.scss"
import Logo from "../../assets/Tela Login/logo.png"

function Login (){
    return(
        <main>
        <section className={styles.containernavio}>

        <p>reservado para o navio</p>

        </section>
        
<section className={styles.containerformulario}>
    <img src="" alt="" />
    <h1></h1>
    <p></p>


    <form action="">
        <input type="email" name="email" placeholder="Email"/>
        <input type="password" name="senha" placeholder="Senha" />
        
        <a href="">esqueci minha senha</a>

        <div>

         <button>Entrar</button>
        <button>Ciar Conta</button>

        </div>

    </form>
</section>


        </main>
    );
}
export default Login