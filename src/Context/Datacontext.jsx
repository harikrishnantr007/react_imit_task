import { createContext,useState,useEffect } from "react";
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import api from '../api/posts';


const Datacontext=createContext({});

export const DataProvider=({children})=>{
    const[posts,setpost]=useState([])
const[postTiltle,setPostTitle]=useState('');
const[postImage,setPostImage]=useState('');
const[postuser,setPostuser]=useState('')
 const[search,setSearch]=useState('');

const[searchresult,setSearchresult]=useState([])
const navigate = useNavigate();

useEffect(()=>{
const fetchpost= async()=>{
    const response=await api.get('/posts');
    setpost(response.data)
}
fetchpost();
},[])


            useEffect(()=>{
              const filtrededResults=posts.filter((post)=>
              ((post.title).toLocaleLowerCase()).includes(search.toLocaleLowerCase())||
              (post.user).toLocaleLowerCase().includes(search.toLocaleLowerCase()))
              setSearchresult(filtrededResults.reverse());
            },[posts,search])


          const handlesubmit= async(e)=>{
            e.preventDefault();
            const id=Date.now();
            const datetime=format(new Date(),'MMM dd,yyyy pp')
            const newpost={id,title:postTiltle,datetime,image:postImage,user:postuser,};
const response=await api.post('/posts',newpost);
            const allpost=[...posts,response.data]
            setpost(allpost)
            navigate('/')
          }
    return(
        <Datacontext.Provider value={{
            search,setSearch,searchresult,handlesubmit,postTiltle,setPostTitle,postImage,setPostImage,
        }}>
            {children}
            </Datacontext.Provider>
    )
}
export default Datacontext;