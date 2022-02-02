import React, { Component } from 'react';

function List({people}) {
    
        return (
            <div>
            {people.map((person) => {
                const{id,name,age,image} = person;
                return(
                    <article className='person'>
                    <img src={image} alt="image"/>
                    <div>
                        <h4>{name}</h4>
                        <p>{age}</p>
                    </div>
                </article>
                );
           
            } )}
          

            </div>
        );
    
}

export default List;