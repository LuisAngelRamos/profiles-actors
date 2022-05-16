
export const Galery = () => (
    <div className="galeria">
        <h2>Mis Fotos</h2>
        <div className="galeria__imagenes">
        <div className="galeria__foto-principal">
            <img src="./assets/img/galeria1.jpg" alt="foto principal"/>
        </div>
        <div className="galeria__fotos-adicionales">
            <img src="./assets/img/galeria2.jpg" width="160" alt="fotos adicionales" />
            <img src="./assets/img/galeria3.jpg" alt="fotos adicionales"/>
            <img src="./assets/img/galeria4.jpg" alt="fotos adicionales"/>
        </div>
        </div>
    </div>
)