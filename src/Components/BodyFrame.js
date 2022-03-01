import '../App.css' ;
import ContenedorCartaTabla from './ContenedorCartaTabla';
import ComponentePaginacion from './ComponentePaginacion';

const BodyFrame = () => {
    return (
        <div>
            <ContenedorCartaTabla/>
            <ComponentePaginacion/>
        </div>
    );
}

export default BodyFrame;

//This component corresponds to the section below the headerContent
