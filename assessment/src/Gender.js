import { useState,useEffect } from "react";
import axios from "axios";
function Gender(){
    let [genderName,setGenderName]=useState([]);
    let [showName,setShowName]=useState([]);
    /* useEffect(function(){
        console.log("function is called on load");
        showGender();
    },[]); */
    function changeGenderName(e){
        setGenderName(e.target.value);
    }
    function showGender(name){
        let url="https://api.genderize.io/?name="+name;
        axios
        .get(url)
            .then(function (response){
                console.log(response.data);
                setGenderName(response.data);
            })
            .catch(function (error){
                console.log(error);
            });
    }
    return (
        <div>
            <input type="text" name="name" onChange={changeGenderName}/>
            <button onClick={function(){
                showGender(genderName);
            }}>Show Gender</button>
        </div>
    )
}

export default Gender;