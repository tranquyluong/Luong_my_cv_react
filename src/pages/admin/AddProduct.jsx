import axios from 'axios';
import React, { useEffect } from 'react'
import { Router } from 'react-router-dom';


const AddProduct = () => {
    useEffect(() => {
        const form = document.querySelector(".from-add");
        const Name = document.querySelector("#Product-name");
        const price = document.querySelector("#Product-price");
        const Description = document.querySelector("#Product-Description");
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const Newproduct = {
                Name: Name.value,
                price: price.value,
                Description: Description.value
            }
            axios.post("http://localhost:3000/Product", Newproduct).then(() => {
                // Router.navigate('listProduct');

            })
        })
    }, [])

    return (
        <div>
            <form action="" className='from-add '>
                <label htmlFor=""> name</label>
                <input type="text" id='Product-name' placeholder='name' className="form-control" />
                <br />
                <label htmlFor="">price</label>
                <input type="text" id='Product-price' placeholder='price' className="form-control" />
                <br />
                <label htmlFor="">Description</label>

                <textarea name="" id='Product-Description' placeholder='Description' className="form-control" cols="30" rows="10"></textarea>
                <br />
                <button className='btn btn-primary' >them</button>
            </form>
        </div>
    )
}

export default AddProduct