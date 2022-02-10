import { useEffect, useState } from "react";
import Card from "./Componentes/Card";
import ContainCard from "./Componentes/ContainCard/ContainCard";

import Header from "./Componentes/Header/Header";
import Pagination from "./Componentes/Pagination/Pagination";




function App () {

  const url='https://rickandmortyapi.com/api/character'

  const [gif, setGif] = useState([]);
  const [info, setInfo] = useState({});
  const [text,setText]=useState('')
  let searchCharacters=[]

  const handleApi =async(url)=>{

    fetch(url)
      .then(resp=>resp.json())
      .then(data=>{
        setGif(data.results)
        setInfo(data.info)
      })
  }

  useEffect(() => {

    handleApi(url)
  
  }, []);
  
console.log(gif)

const onPrevius=()=>{
  handleApi(info.prev)
}

const onNext =()=>{

  handleApi(info.next)
}
 
if(gif.length>=1){
  searchCharacters=gif.filter((character)=>{
    const characterText =character.name.toLowerCase();
    const searchText=text.toLowerCase()
    return characterText.includes(searchText)
  })
}
else{
  searchCharacters=gif
}
  

  return (
    <>
    
      <Header
        text={text}
        setText={setText}
        />
    
      <Pagination 
        prev={info.prev}
        next={info.next}
        onPrevius={onPrevius}
        onNext={onNext}  />
      <ContainCard>
   
        {
          searchCharacters?.map((item,i)=>(
            <Card
              key={i}
              image={item.image}
              name={item.name}
              species={item.species}
            />
          ))
        }

      </ContainCard>
    </>
    

  )
}

export default App;
