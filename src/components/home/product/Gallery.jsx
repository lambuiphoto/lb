import React, { useState } from 'react';
import { gallery } from '../../assets/data/data';
import Heading from '../../common/Heading';
import PhotoCell from './PhotoCell';
import { Masonry } from 'masonic';


function Gallery(props) {
    const [data, setData] = useState(gallery)

    return (
        <>
            <section className="gallery" id='gallery'>
                <div className="container">
                    <Heading title='Gallery' desc='Some more for you take a look.' />
                    <Masonry className="photos"
                        items={data}
                        columnGutter={8}
                        columnWidth={150}
                        columnCount={3}
                        overscanBy={32}
                        render={PhotoCell}
                    />
                </div>
            </section>
        </>
    );
}

export default Gallery;