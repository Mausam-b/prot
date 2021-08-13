import React from 'react';
import { Link } from 'react-router-dom';

class PageNotFound extends React.Component{
    render(){
        return(
            <div className="404">
                <p style={{textAlign:"center"}}>
                    <Link to="/">Go Back to Home</Link>
                </p>
            </div>
        ); 
    }
}
export default PageNotFound;