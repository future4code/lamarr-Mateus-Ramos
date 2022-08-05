import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
  return(
  <div className='MainContainer'>

           {<Post
            
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
        
          />}
                     {<Post
            nomeUsuario={'Nícolas'}
            fotoUsuario={'https://picsum.photos/45/50'}
            fotoPost={'https://picsum.photos/250/300'}
           />}
                    
                     {<Post
            nomeUsuario={'André'}
            fotoUsuario={'https://picsum.photos/39/50'}
            fotoPost={'https://picsum.photos/200/300'}
           />}

  </div>
)
}


export default App;
