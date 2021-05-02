import React from 'react';
import style from "./style";
import {Link} from "react-router-dom";
import Box from "./Box";
import fire from "../../../Fire";
import data from "../../main/Data";

function Toy(props) {

    const [desc, setDesc] = React.useState();
    const [products, setProducts] = React.useState([]);
    const [name] = React.useState(props.match.params.details);


    const details = products.map((pdc,idx)=>
            <Box key={idx} pdc={pdc} />
    // <div key={idx} style={style.Box}>
    //     <img alt={""} style={style.Img} src={pdc.img}/>
    //     <div style={desc}>
    //         <ul>
    //             <li>Name: {pdc.name}</li>
    //             <li >Stock: {pdc.stock}</li>
    //             <li >Price: {pdc.price}</li>
    //         </ul>
    //     </div>
    // </div>
    );

    const db = fire.firestore();

    React.useEffect(()=> {
        let newItems = [];

        db.collection("products").get().then(function (snapshot) {
            snapshot.forEach(function (doc) {

                const obj = doc.data();

                let item = {
                    id: doc.id,
                    name: obj.name,
                    stock: obj.stock,
                    price: obj.price,
                    img: obj.img
                }

                    newItems.push(item);

            })
            const newData = newItems.filter(n => n.name === name )
            setProducts(newData);

        });


    },[db, products] );

console.log()

    return (
        <div>
            <div style={style.Nav}>
                <Link to={"/"}><button style={style.Button}>Home</button></Link>
            </div>
            <h1>Hot Toy Collectables</h1>
            <div style={style.Wrapper}>
                <div>{details}</div>
            </div>
        </div>
    )
}
export default Toy;