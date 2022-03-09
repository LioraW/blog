import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import '../containers/App.css'

const buttonStyle = {
    marginRight: '10px',
    textDecoration: 'none',
   }
   
class NavBar extends React.Component {
    render () {
        return (
            <>
                <div style={this.props.style}>
                    <Link to='/'>
                        <Button style={buttonStyle} variant='contained' color='secondary' >
                            Home
                        </Button>
                    </Link>
        
                    <Link to='/aboutme'>
                        <Button style={buttonStyle} variant='contained' color='secondary'>
                            About Me
                        </Button>
                    </Link>
                </div>
            </>
        )
    }
}

export default NavBar