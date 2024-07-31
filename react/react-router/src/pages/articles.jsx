import { useNavigate, useParams } from 'react-router-dom'
import {useFetch} from '../hook/useFetch'
import { useEffect } from 'react'
export default function Articles() {
  const {id} =  useParams()
  const url = `http://localhost:3000/article/` + id
  const {data: article, isLoading, error} = useFetch(url)
  const navigate = useNavigate()
  useEffect(()=>{
    if(error){
      setTimeout(() =>navigate("/"), 2500)
      
    }}, [error])
    return (
      <div>
        <h3>Articles - {id}</h3>
        {isLoading && <div>Loading...</div>} 
      {error && <div>{error}</div>}
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>by {article.author} </p>
          <p>{article.body}</p>
        </div>
      )
      }
      </div>
    )
  }
  