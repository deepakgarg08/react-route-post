//making functional componenet here
import React from 'react'
const Rainbow = (WrappedComponent) => {

    const colors = ['voilet', 'indigo' , 'blue' ,'green', 'yellow', 'orange', 'red']

    const randomColors =  colors[Math.floor(Math.random() * 7)];
    const className = randomColors + '-text'
    
    return(props) =>{
        return(
            <div className ={className}>
                <WrappedComponent  {...props}/>
            </div>
        )
    }
}

export default Rainbow