import { FaCheck } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import '../../styles/TaskIcon.css'

//Aquí creamos una variable con varios objetos, para poder renderizarlos dependiendo del tipo, todo esto de manerá dinamica
const iconTypes = {
    "check" : (color) => <FaCheck className="Icon-svg" fill={color} />,
    "delete" : (color) => <FaX className="Icon-svg" fill={color} />,
}

function TaskIcon({ type, color, onClick }){
    return(
        <span
            //aquí es donde creamos las clases, pero creamos una clase dinamica, la cual la agregamos con ${} para agregar js y en donde le decimos que nuestra prop, es decir el type que recibimos, será el que complemento de esa clase
            className={`Icon-container Icon-container-${type}`}
            onClick={onClick}
        >
            {/* aquí lo que hacemos es que vamos a renderizar el objeto especifico que creamos en la variable de iconTypes, y lo hacemos de manerá dinamica, para que en [] reciba nuestra prop, y sepa que objeto tiene que renderizar */}
            { iconTypes[type] (color)}
        </span>
    )
}

export { TaskIcon }