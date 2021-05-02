import React from 'react';
import fire from "../../../Fire";
import style from "./style";
import {Link} from "react-router-dom";

function Admin(){

    const [products, setProducts] = React.useState([]);
    const [error, setError] = React.useState([]);
    const [submit, setSubmit] = React.useState();
    const [form, setForm] = React.useState({
        img: "",
        name: "",
        stock:"",
        price:""
    })

    const db = fire.firestore();

    React.useEffect(()=>{
        let newItems=[];

        db.collection("products").get().then(function(snapshot){
            snapshot.forEach(function(doc){

                const obj =doc.data();

                let item = {
                    id: doc.id,
                    name: obj.name,
                    stock: obj.stock,
                    price: obj.price,
                    img: obj.img
                }

                newItems.push(item);

            })
            setProducts(newItems)
        });



    }, [db, submit]);

    const handleChange = prop => event =>{
        setForm({
            ...form,
            [prop]:event.target.value
        })
    }

    const handleSubmit= ()=>{
        let errorInput = "";

        if(form.name.length < 2 ){
            errorInput = "input not greater that 2 characters";
            setError(errorInput);
        }
        else {
            db.collection("products").add(form).then(() => {
                setForm({
                    img: "",
                    name: "",
                    stock:"",
                    price:""
                });
                setError("");
                setSubmit(!submit)
            });
        }

    }


    const handleDelete =(id)=>{
        db.collection("products").doc(id).delete().then(()=>{
            setSubmit(!submit);
        })
    }

    const details = products.map((pdc, idx)=>
        <div key={idx} pdc={pdc}>
            <div> <img style={style.Img} src={pdc.img}/> </div>
            <div>Name: {pdc.name}</div>
            <div>Stock: {pdc.stock}</div>
            <button onClick={()=>handleDelete(pdc.id)}> delete me </button>
        </div>
    );

    return(
        <div>
            <div style={style.Nav}>
                <Link to={"/"}><button style={style.Button}>Home</button></Link>
                <button style={style.Button}>Cart</button>
                <Link to={"/admin"}> <button style={style.Button}>Admin</button></Link>
            </div>
            <h1>Products</h1>
            {details}
            <input type="text" placeholder={"Image Link..."} onChange={handleChange("img")}/>
            <input type="text" placeholder={"Name..."} onChange={handleChange("name")}/>
            <input type="text" placeholder={"Stock..."} onChange={handleChange("stock")}/>
            <input type="text" placeholder={"Price..."} onChange={handleChange("price")}/>
            <h1>{error}</h1>
            <button onClick={handleSubmit}>Submit</button>
        </div>

    )
}
export default Admin;