import { Component } from "react";
import'./Productos.css';

const list = [
    {
        id: 1,
        Nombre: 'Jarrón las Americas N. 5',
        precio:175000,
    },
    {
        id: 2,
        Nombre: 'Escultura Doble N. 3',
        precio:215000,
    },
    {
        id: 3,
        Nombre: 'Morral Quinchana N. 1',
        precio:275000,
    }
];

class Productos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list,
        };
        this.Eliminar =
        this.Eliminar.bind(this);
    }

    Eliminar(id) {
		const isNotId = item => item.id !== id;
		const listaActualizada = 
		this.state.list.filter(isNotId);
		this.setState({ list: listaActualizada });
	}
      render() {
        return(
          <div>
            <div className="main-title"><h2>Artesanias las Americas</h2>
            
            <div className="content-style">
             <table>  
            <tr>
                <th>Nombre</th>
               <th>Precio</th>
               <th>Acciones</th>
               </tr>
        {this.state.list.map(item => 
            <div key={item.id}>
                <tr>
                    <td>
                         {item.Nombre} 
                    </td>
                    <td>
                    {item.precio} 
                    </td>
                    <td>
                    <span>	
                    <button 
                        onClick={() => this.Eliminar(item.id)}
                        type="button"
                    >
                    Eliminar
                    </button> 
                </span>
                    </td>
                </tr>
            </div>
        )}
        </table>

             </div>

    </div>
    
    </div>
     ); 

    }
}
export default Productos;