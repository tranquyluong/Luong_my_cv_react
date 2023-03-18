import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';

const EditProduct = () => {
    const { id } = useParams()
    console.log(id);

    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:3000/Product/` + id).then(({ data }) => setProduct(data))
    }, [])
    useEffect(() => {
        const form = document.querySelector(".from-edit");
        const Name = document.querySelector("#Product-name");
        const price = document.querySelector("#Product-price");
        const Description = document.querySelector("#Product-Description");
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const Newproduct = {
                "Name": Name.value,
                "price": price.value,
                "Description": Description.value
            }
            axios.put(`http://localhost:3000/Product/` + id, Newproduct).then(() => {

            })
        })
    })

    return (
        <div>
            <form action="" className='from-edit '>
                <label htmlFor=""> name</label>
                <input id='Product-name' placeholder='name' className="form-control" defaultValue={product?.Name} />
                <br />
                <label htmlFor="">price</label>
                <input type="text" id='Product-price' placeholder='price' className="form-control" defaultValue={product?.price} />
                <br />
                <label htmlFor="">Description</label>

                <textarea name="" id='Product-Description' className="form-control" cols="30" defaultValue={product?.Description} rows="10"></textarea>
                <br />
                <button className='btn btn-primary' >Update</button>
            </form>
        </div>
    )
}

export default EditProduct