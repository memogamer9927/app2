import '../App.css' ;
import ContenedorCartaTabla from './ContenedorCartaTabla';
import ComponentePaginacion from './ComponentePaginacion';
import ComponentePaginacion from './TituloBusqueda';


const BodyFrame = () => {
    return (
        <div>
            <TituloBusqueda/>
            <ContenedorCartaTabla/>
            <ComponentePaginacion/>
        </div>
    );
}

export default BodyFrame;

//This component corresponds to the section below the headerContent
