import React from 'react';
import fire from "../../Fire";

function CoolPerson(){

    const [albums, setAlbums] = React.useState([]);
    const [error, setError] = React.useState([]);
    const [submit, setSubmit] = React.useState();
    const [form, setForm] = React.useState({
        name:"",
        number:""
    })

    const db = fire.firestore();

    React.useEffect(()=>{
        let newItems=[];

        db.collection("objects").get().then(function(snapshot){
            snapshot.forEach(function(doc){

                const obj =doc.data();

                let item = {
                    id: doc.id,
                    name: obj.name,
                    number: obj.number
                }

                newItems.push(item);

            })
            setAlbums(newItems)
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
            db.collection("objects").add(form).then(() => {
                setForm({
                    name: "",
                    number: ""
                });
                setError("");
                setSubmit(!submit)
            });
        }

    }


    const handleDelete =(id)=>{
        db.collection("objects").doc(id).delete().then(()=>{
            setSubmit(!submit);
        })
    }

    const albumEles= albums.map((obj, idx)=>
        <div key={idx}>
            <div><span style={{fontSize: obj.number}}>{obj.name}</span><button onClick={()=>handleDelete(obj.id)}> delete me </button></div>
            <div><span style={{fontSize: obj.number}}>{obj.number}</span></div>
        </div>
    );

    return(
        <div>
            <h1>Objects</h1>
            {albumEles}
            <input type="text" placeholder={"Name..."} onChange={handleChange("name")}/>
            <input type="text" placeholder={"Number..."} onChange={handleChange("number")}/>
            <h1>{error}</h1>
            <button onClick={handleSubmit}>Submit</button>
        </div>

    )
}
export default CoolPerson;