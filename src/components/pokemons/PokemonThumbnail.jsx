import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/index.css';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function PokemonThumbnail({id, name, image, type}){
    const style = type = `thumb-container ${type}`
    return(
        <div className={style}>
            <Card>
                <CardBody>
                <CardTitle tag="h5">
                    <div className='detail-wrapper'>
                        <small class="font-semibold">#0{id}</small>
                        <h3 class="font-bold">{name}</h3>
                        
                    </div>
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    <small class="text-stone-800">{type}</small>
                </CardSubtitle>
                <img src={image} alt={name}></img>
                </CardBody>
            </Card>
        </div>
    )
}
export default PokemonThumbnail