import React from 'react';
import { Link } from 'react-router-dom';
const Advertising = ({posts}) => {
    return (
        <div className='advertising'>
            {posts.map(item => {
                return(
                <div>
                    <p>{item.title}</p>
                    <Link to={`/post/${item.id}`}><img src={item.Image} alt="asd"/></Link>
                </div>)
            })}
        </div>
    );
};

export default Advertising;