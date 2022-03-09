import React from 'react'
import Paper from '@material-ui/core/Paper'
import './App.css'
import { blueGrey } from '@material-ui/core/colors'

const Home = () => {
    return (
        <>
            <Paper style={{background:blueGrey[500]}}>
                <h3 className='App-header-words'>
                    Home Page
                </h3>
            </Paper>

            <Paper style={{background:blueGrey[800]}}>
                <div className='App-content-words'>
                    <p>
                        If I actually had a blog, here is where I would put some thoughts.
                    </p>
                </div>
            </Paper>
        </>
    )
}

export default Home