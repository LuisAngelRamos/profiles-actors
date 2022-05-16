import { Galery } from "../Galery/Galery";
import { Static } from "../Statistic/Statistic";
import { Ubication } from "../Ubication/Ubication";

export const Profile = () => (
    <section className="perfil">
        <img className="perfil__avatar" src="./assets/img/avatar.jpg" alt="avatar" />
        <h2 className="perfil__nombre">John Wick</h2>
        <h3 className="perfil__titulo">Asesino Legendario</h3>
        <a className="perfil__boton" href="/">
          Seguir
        </a>
        <Static />
        <div className="perfil__minibio">
          <h2>Acerca de Mi</h2>
          <h3>Asesino a sueldo retirado y amante de perros</h3>
        </div>
        <Ubication />
        <Galery />
    </section>
)