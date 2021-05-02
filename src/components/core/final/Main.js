import React from 'react';
import fire from "../../../Fire";
import Box from "./Box";
import style from "../../main/style";
import {Link} from "react-router-dom";

function Main(){

    const [products, setProducts] = React.useState([]);
    const [submit, setSubmit] = React.useState();
    const [form, setForm] = React.useState({
        title:"",
        artist:"",
        year:""
    })

    const db = fire.firestore();

    React.useEffect(()=>{
        let newItems=[];

        db.collection("products").get().then(function(snapshot){
            snapshot.forEach(function(doc){

                const obj =doc.data();

                let item = {
                    id: doc.id,
                    name:obj.name,
                    stock: obj.stock,
                    price: obj.price,
                    img: obj.img
                }

                newItems.push(item);

            })
            setProducts(newItems)
        });



    }, [db, submit]);

    //
    // const handleChange = prop => event =>{
    //     setForm({
    //         ...form,
    //         [prop]:event.target.value
    //     })
    // }

    const handleSubmit= ()=>{
        db.collection("albums").add(form).then(() =>{
            setForm({
                title: "",
                artist:"",
                year:""
            });

            setSubmit(!submit)
        });
    }
    const handleDelete =(id)=>{
        db.collection("albums").doc(id).delete().then(()=>{
            setSubmit(!submit);
        })
    }

    const productDisp= products.map((pdc, idx)=>
            <Box key={idx} pdc={pdc}/>
    );

    return(
        <div>
            <div style={style.Nav}>
                <button style={style.Button}>Home</button>
                <Link to={"/cart"}><button style={style.Button}>Cart</button></Link>
                <Link to={"/admin"}> <button style={style.Button}>Admin</button></Link>
            </div>
            <h1>Hot Toy Collectables</h1>
            <div style={style.Wrapper}>
            {productDisp}
            </div>
        </div>

    )
}
export default Main;