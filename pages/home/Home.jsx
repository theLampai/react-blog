import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'


export default function home() {
    return (
        <>
                <Header/>  
        <div className='Home'>
               <Posts />
               <Sidebar />       
        </div>
        </>
    )
}
