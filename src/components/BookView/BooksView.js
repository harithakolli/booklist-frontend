import React, {useState, useEffect} from 'react'
import {useNavigate, useLocation, URLSearchParamsInit} from 'react-router-dom';
import axios from 'axios';


const BooksView = () => {

     const navigate = useNavigate();
     const location = useLocation();
     const params = new URLSearchParams(window.location.pathname);
     console.log(params.get("id"));
    //  console.log(location.state.id);
     const token = (localStorage.getItem('AUTH_TOKEN')).toString()
     console.log(token);
     const [booksListId, setBooksID] = useState();
    //  const fetchData = async () =>{
    //     const resp = await axios(
    //         {
    //             method: 'get',
    //             url: 'http://localhost:4000/book',
    //             headers: {Authorization: 'test'+ ' ' + token}
    //         }      
    //         )
    //         // console.log(JSON.stringify(resp));

    //         if(resp){
    //            //return resp;
    //             setBooksList(resp.data.book);
    //         }
          

    //        // setBooksList(resp.data.book);
    // }

    
    // useEffect(()=>{
    //  fetchData();
    //  console.log(booksList);
      
    
    // }, []);


  return (
    <div>BooksView</div>
  )
}

export default BooksView