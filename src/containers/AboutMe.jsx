import React from 'react'
import Paper from '@material-ui/core/Paper'
import { blueGrey } from '@material-ui/core/colors'

const AboutMe = () => {
    return (
    <>
        <Paper style={{background:blueGrey[500]}}>
            <h3 className='App-header-words'>
                About Me
            </h3>
        </Paper>
        <Paper style={{background:blueGrey[800]}}>
            <div className='App-content-words'>
                <p>
                    As you can see, I like to code, but design is not my strong suite. I'm a CS Major and Math Minor at UMSL. 
                </p>
                
            </div>
            
        </Paper>
    </>
    )
}

export default AboutMe