import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import './Books.css'

const Books = () => {

 // 
    const navigate= useNavigate();
    const token = (localStorage.getItem('AUTH_TOKEN')).toString()
    console.log(token);
   const [booksList, setBooksList] = useState([]);
   const [bookID, setBookID] = useState([]);
    const fetchData = async () =>{
        const resp = await axios(
            {
                method: 'get',
                url: 'https://book-list-server.onrender.com/book',
                headers: {Authorization: 'test'+ ' ' + token}
            }      
            )
            // console.log(JSON.stringify(resp));

            if(resp){
               //return resp;
                setBooksList(resp.data.book);
            }
          

           // setBooksList(resp.data.book);
    }

    
    useEffect(()=>{
     fetchData();
     console.log(booksList);
      
    
    }, []);

    function handleClick(){
    navigate('/add');
    }


    function handledivClick({data}){
        console.log(data._id);
        // navigate('/view',
        // {state: {id: bookID}}
        // )
    }
    return (
        <>
    <div><h3>Books List</h3></div>
<div style={{marginLeft: '40px'}}>
    <button type='submit' onClick={handleClick} > + Add New Book</button>
</div>

    <div style={{display:'flex', flexDirection: 'row', justifyContent:'space-evenly',marginLeft:'5%', flexWrap:'wrap'}}>
    {booksList.map((data,i)=> (
        
      <div style={{flexDirection: 'column'}} >
       <div style={{color:'blue'}}><Link to="/view" params = {{id : data._id}}>{data.title}</Link></div>
        <div style={{color:'gray'}}>{data.author}</div>
        <div style={{color: 'white'}}>{data.publisher}</div>
      </div>
     
    ))}
    </div>
  
    </>
  )
}

export default Books