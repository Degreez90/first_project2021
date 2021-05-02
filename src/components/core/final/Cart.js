import React from 'react';
import fire from "../../../Fire";
import style from "./style";
import {Link} from "react-router-dom";

function Cart(){
    const [fireplace, setFireplace] = React.useState([]);
    const db = fire.firestore();
    const [submit, setSubmit] = React.useState(true)

    React.useEffect(()=>{
        let newItems=[];

        db.collection("Cart").get().then(function(snapshot){
            snapshot.forEach(function(doc){
                const obj = doc.data();

                let item = {
                    id: doc.id,
                    name:obj.name,
                    price: obj.price,
                    stock:obj.stock,
                    img:obj.img
                };

                console.log(obj);

                newItems.push(item);
            });

            setFireplace(newItems)
        });

        console.log()

    },[db, submit]);

    const handleDelete=(id)=>{
        db.collection("Cart").doc(id).delete().then(()=>{
            setSubmit(!submit);
        })
    }
    const buy=()=>{
        db.collection("Cart").get().then(function(snapshot){
            snapshot.forEach(function(doc){
                doc.ref.delete().then(()=>{
                    setSubmit(!submit);
                });
            });
        });
    }

    const fireplaceEles = fireplace.map((pdc, idx)=>
        <div key={idx} >
            <div><h1>{pdc.name}</h1>
                <h3>{pdc.price}</h3>
                <h3>{pdc.stock}</h3>
                <img style={style.Img} src = {pdc.img} alt = "items"/>
            </div>
            <button onClick={()=>handleDelete(pdc.id)}>Remove</button>
        </div>
    );

    return(
        <div><div style={style.Nav}>
            <Link to={"/"}><button style={style.Button}>Home</button></Link>
            <Link to={"/cart"}><button style={style.Button}>Cart</button></Link>
            <Link to={"/admin"}> <button style={style.Button}>Admin</button></Link>
        </div>
            <div><h1>Your Cart</h1>
                {fireplaceEles}
            </div>
            <button onClick={buy}>Buy</button>
        </div>
    )
}
export default Cart;