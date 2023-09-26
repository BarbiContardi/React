import Button from "./Button";

export default function MultiButton(){
    function handleImprName(event){
        console.log(event.target.name)
    }
   return (  
   <div>
   <Button onClick={handleImprName} label={"Uno"} name= {"uno"}/>
   <Button onClick={handleImprName} label={"Dos"} name= {"dos"}/>
   <Button onClick={handleImprName} label={"Tres"} name= {"tres"}/>
   </div>
   )
}