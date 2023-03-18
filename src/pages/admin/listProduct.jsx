import axios from 'axios'
import { useEffect, useState } from 'react'



const ListProduct = ({ props }) => {
    const [data, setdata] = useState([]);
    useEffect(() => {
        setdata(props)
    }, [props])

    const remove = (id) => {
        axios.delete(`http://localhost:3000/Product/` + id).then(() => {
            const NewProduct = data.filter((product) => product.id != +id)
            setdata(NewProduct);
        })
    }
    return (

        <table className='table'>
            <thead>
                <tr>
                    <td>#</td>
                    <td>name</td>
                    <td>price</td>
                    <td>Desciption</td>
                </tr>
            </thead>
            <tbody>
                {data.map((product) => {
                    return (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.Name}</td>
                            <td>{product.price}</td>
                            <td>{product.Description}</td>
                            <td><button className="btn btn-warning" onClick={() => remove(product.id)} >xoa</button>
                                <a href={"/admin/edit/" + product.id} className="btn btn-warning">sua</a>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>

    )
}

export default ListProduct
