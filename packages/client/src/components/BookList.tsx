import * as React from 'react';
import thumbnail from '../assets/image-placeholder.png';

interface Props {
    title: string;
    id: string;
    donor: string;
    image?: string;
    pdf?: string;
}

export const BookList = ({id, title, donor, image, pdf}: Props) => {
    return (
        <div id={id} className="item">
              <div className="img-holder">
                <img src={image ?? thumbnail} alt={title}/>
              </div>
              <div>
                <p>Name: {title}</p>
                <p>Donated by: {donor}</p>
              </div>
            </div>
    );
}