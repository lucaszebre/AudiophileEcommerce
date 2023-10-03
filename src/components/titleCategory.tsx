import React from 'react'
import './TitleCategory.css'
const TitleCategory = (props:{title:string}) => {
    return (
            <div className='TitleCategoryContainer'>
                <div className="TitleCategoryWrapper">
                    <h1>
                            {props.title}
                    </h1>
                </div>
            </div>
    )
}

export default TitleCategory
