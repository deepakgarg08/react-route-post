//making functional componenet here
import React from 'react'
const Rainbow = (WrappedComponent) => {

    const colors = ['voilet', 'indigo' , 'blue' ,'green', 'yellow', 'orange', 'red']

    const randomColors =  colors[Math.floor(Math.random() * 7) + 1];
    console.log('randomColors', randomColors)
    const className = randomColors + '-text'
    console.log('className', className)
    
    return(props) =>{
    console.log('...props', {...props})

        return(
            <div className ={className}>
                <WrappedComponent  {...props}/>
            </div>
        )
    }
}

export default Rainbow