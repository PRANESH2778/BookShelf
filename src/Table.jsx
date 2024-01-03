import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import React ,{useEffect, useState} from 'react'
function Table() {
    const [data,setData] = useState([])
    const [name,setName] = useState('')
    const [ISBN,setISBN] = useState('')
    const [category,setCategory] = useState('')
    const [Rowno,setRowno] = useState('')
    const [Count,setCount] = useState('')
    const [Cost,setCost] = useState('')
    const [Availability,setAvailability] = useState('')
    const [uname,usetName] = useState('')
    const [uISBN,usetISBN] = useState('')
    const [ucategory,usetCategory] = useState('')
    const [uRowno,usetRowno] = useState('')
    const [uCount,usetCount] = useState('')
    const [uCost,usetCost] = useState('')
    const [uAvailability,usetAvailability] = useState('')
    const [editId,SeteditId] = useState(-1)
    useEffect(()=>{
        axios.get('http://localhost:3000/Bookdetails')
        .then(res => setData(res.data))
        .catch(er=> console.log(er));
    },[])
    const ShowAddBooks=()=>{
        const ShowAdd = document.querySelector('.Addbooks')
        ShowAdd.style.display = "flex";
        const hidebutton = document.querySelector('.Buttons');
        hidebutton.style.display = "none";
        const showback1 = document.querySelector('.Back-Button');
        showback1.style.display = "block";

    }
    const ShowViewBooks=()=>{
        const ShowView = document.querySelector('.Bookshelf1');
        ShowView.style.display = "block";
        const hidebutton1 = document.querySelector('.Buttons');
        hidebutton1.style.display = "none";
        const showback = document.querySelector('.Back-Button');
        showback.style.display = "block";
    }
    const HandleAddbooks=(event)=>{
        event.preventDefault();
        const id = uuidv4();
        axios.post('http://localhost:3000/Bookdetails', { Bookname:name,BookISBNNo:ISBN,BookCategory:category,BookRowNo:Rowno,BookCount:Count,BookCost:Cost,BookAvailability:Availability,id:id})
        .then(res => {
            setData(prevData => [...prevData, res.data]);
            alert("Book Added")
            location.reload();
        })
        .catch(error => {
            console.error('Error adding book:', error);
        });
    }
    const handleEdit=(id)=>{
        axios.get('http://localhost:3000/Bookdetails/'+id)
        .then(res => {
            usetName(res.data.Bookname)
            usetISBN(res.data.BookISBNNo)
            usetCategory(res.data.BookCategory)
            usetRowno(res.data.BookRowNo)
            usetCount(res.data.BookCount)
            usetCost(res.data.BookCost)
            usetAvailability(res.data.BookAvailability)
        })
        .catch(er=> console.log(er));
        SeteditId(id)
        const moveleft = document.querySelector('.Bookshelf1');
        moveleft.style.marginLeft = "16px";
    }
    const handleUpdate=(e)=>{
        axios.put('http://localhost:3000/Bookdetails/'+editId,{
            Bookname:uname,BookISBNNo:uISBN,BookCategory:ucategory,BookRowNo:uRowno,BookCount:uCount,BookCost:uCost,BookAvailability:uAvailability,id:editId
        }).then(res=>{
            SeteditId(-1);
        }).catch(err=> console.log(err));
        const moveright = document.querySelector('.Bookshelf1');
        moveright.style.marginLeft = "315px";
        alert("Books Updated")
        location.reload();

    }
    const handleDelete=(id)=>{
        axios.delete('http://localhost:3000/Bookdetails/'+id)
        .then(res=>{
            alert("Book Deleted")
            location.reload();
        }).catch(err=> console.log(err));
    }
    const Back = ()=>{
        location.reload();
    }
    
  return (
    <div className='container'>
        <h1 className='Main-heading'>BOOKSHELF</h1>
        <div className='Back-Button'><button onClick={Back}>Back</button></div>
        <div className='Buttons'>
            <div className='Button-Add'><button onClick={ShowAddBooks}>Add Books</button></div>
            <div className='Button-View'><button onClick={ShowViewBooks}>View Books</button></div>
        </div>
        
        <form className='Addbooks'>
           <input className='elements' type='text' placeholder='Enter Book name' onChange={e=>setName(e.target.value)}/><br/>
            <input className='elements' type='number' placeholder='Enter Book ISBN No'onChange={e=>setISBN(e.target.value)}/><br/>
            <input className='elements' type='text' placeholder='Enter Book Category'onChange={e=>setCategory(e.target.value)}/><br/>
            <input className='elements' type='number' placeholder='Enter Book Row No'onChange={e=>setRowno(e.target.value)}/><br/>
            <input className='elements' type='number' placeholder='Enter Book Count'onChange={e=>setCount(e.target.value)}/><br/>
            <input className='elements' type='number' placeholder='Enter Book Cost'onChange={e=>setCost(e.target.value)}/><br/>
            <select className='elements' onChange={e=>setAvailability(e.target.value)}>
                            <option value="Available">Available</option>
                            <option value="Not Available">Not Available</option>
                            </select><br/>
            <button onClick={HandleAddbooks} className='Addbutton'>Add</button><br/>
        </form>
    <div className='Bookshelf1'>
        <div className='table-container'>
        <table>
            <thead className='Heading'>
                <tr>
                    <td>BookName</td>
                    <td>BookISBN No</td>
                    <td>Book Category</td>
                    <td>Book Row No</td>
                    <td>BookCount</td>
                    <td>BookCost</td>
                    <td>BookAvailability</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody className='Content'>
                {
                    data.map((user,index)=>(
                        user.id === editId ?
                        <tr>
                            <td><input type='text' className='UpdateElements' value={uname} onChange={e=>usetName(e.target.value)}/></td>
                            <td><input type='number' className='UpdateElements' value={uISBN}onChange={e=>usetISBN(e.target.value)}/></td>
                            <td><input type='text' className='UpdateElements'value={ucategory} onChange={e=>usetCategory(e.target.value)}/></td>
                            <td><input type='number'className='UpdateElements' value={uRowno}onChange={e=>usetRowno(e.target.value)}/></td>
                            <td><input type='number' className='UpdateElements'value={uCount}onChange={e=>usetCount(e.target.value)}/></td>
                            <td><input type='number' className='UpdateElements'value={uCost} onChange={e=>usetCost(e.target.value)}/></td>
                            <td><input type='text' className='UpdateElements' value={uAvailability} onChange={e=>usetAvailability(e.target.value)}/></td>
                            <button className='Update' onClick={handleUpdate}>Update</button>
                        </tr>
                        :
                        <tr key={index}>
                            <td>{user.Bookname}</td>
                            <td>{user.BookISBNNo}</td>
                            <td>{user.BookCategory}</td>
                            <td>{user.BookRowNo}</td>
                            <td>{user.BookCount}</td>
                            <td>{user.BookCost}</td>
                            <td>{user.BookAvailability}</td>
                            <td>
                                <button className='Edit' onClick={()=>handleEdit(user.id)} >Edit</button>
                                <button className='Delete'onClick={()=>handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                    )
                }
            </tbody>
        </table>
        </div>
    </div>
    </div>
  )
}

export default Table