import './Header.css'
import bg1 from '../../assetss/blogbg1.jpg'

export default function Header() {
    return (
        <div className='header'>
           <div className="headerTitles">
                 <span className='headerTitleSm'>Алиески</span> 
                 <span className='headerTitleLg'>БЛОГ</span> 
            </div>
            
            <img className='headerImg' src={bg1} alt="" />
     
   </div>  
       
        
       
    )
}
