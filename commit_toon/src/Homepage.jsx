import React from 'react'
import Navbar from './components/navbar/Navbart'
import './Home.css'
import List from './components/list/list'
import ListTop from './components/list/list_top'
import './App'
import './Home.css'
const Homepage = () => {
    // const [posts , setPosts] = useState([])
    // const [loading, setLoading] = useState(false)
    // const [currentPage, setCurrentPage] =useState(1)
    // const [postsPage] =useState(20)
    // const indexLastPost = currentPage * postsPage 
    // const indexFirstPost = indexLastPost - postsPage 
    // const currentPost = posts.slice(indexFirstPost, indexLastPost)

    // const paginat = pageNumber => setCurrentPage(pageNumber)
  return (
    <div className='App'>
         <div className="body-bg">    
            <div className="nav-b-t"><Navbar/></div>  
               {/* <List className='list-box-item' /> */}
             <ListTop />
         <div className='container'>
            <table className='harder-h'>นิยายลิขสิทธิ์</table>
             <List className='list-box-item' />
            <table className='harder-h'>นิยายแต่ง</table>
             <List className='list-box-item' />
         </div>  
        </div>

    </div>
  )
}

export default Homepage