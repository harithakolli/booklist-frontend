import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const AddBook = () => {
  
    const navigate = useNavigate();
    const[title,setTitle] = useState("");
    const[isbn,setISBN] = useState("");
    const[author,setAuthor] = useState("");
    const[description,setDescription] = useState("");
    const[publish_date,setPublishDate] = useState("");
    const[publisher,setPublisher] = useState("");

    const token = (localStorage.getItem('AUTH_TOKEN')).toString()

    const postData = async () =>{
        const bookInfo={
            title : title,
            isbn: isbn,
            author: author,
            description: description,
            publish_date: publish_date,
            publisher : publisher

        }

        console.log("Book " ,bookInfo);

        const resp = await axios(
            {
                method: 'post',
                url: 'https://book-list-server.onrender.com/book',
                data: {... bookInfo},
                headers: {Authorization: 'test'+ ' ' + token}
            }      
            )
        
        console.log(resp);
       
        // navigate('/books')
    
    }
    function handleClick(){

    navigate('/books')
    }

    function handleCreate(){
        postData();
        navigate('/books')
        }
  return (
    <>
<div style={{marginTop: '2%', marginLeft : '5%'}}>
    <button type='submit' onClick={handleClick} > Show Book List</button>
</div>
<div style={{marginTop: '10%'}}><h4>AddBook</h4></div>
<div ><h5>Create New Book</h5></div>
<div style={{display: 'block'}}>
            <input type={'text'} placeholder={'Title of the Book'} value={title} onChange={(e)=>
            setTitle(e.target.value)}></input>
          
            </div>
            <div style={{display: 'block'}}>
           
             <input type={'text'} placeholder={'ISBN'} value={isbn} onChange={(e)=>
            setISBN(e.target.value)}></input>
            </div>


            <div style={{display: 'block'}}>
           <input type={'text'} placeholder={'Author'} value={author} onChange={(e)=>
          setAuthor(e.target.value)}></input>
          </div>

          <div style={{display: 'block'}}>
           
           <input type={'text'} placeholder={'Describe the Book'} value={description} onChange={(e)=>
          setDescription(e.target.value)}></input>
          </div>

          <div style={{display: 'block'}}>
           
           <input type={'text'} placeholder={'Published Date'} value={publish_date} onChange={(e)=>
          setPublishDate(e.target.value)}></input>
          </div>

          <div style={{display: 'block'}}>
           <input type={'text'} placeholder={'Publisher of the Book'} value={publisher} onChange={(e)=>
          setPublisher(e.target.value)}></input>
          </div>

            <div style={{display: 'block', marginTop:'1%'}}>
             <button type={'Submit'} onClick={handleCreate}>Submit</button>
            </div>
    </>
    
  )
}

export default AddBook