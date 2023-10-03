import React from 'react'
import './Features.css'
const Features = (props) => {
    return (
        <div className="FeaturesContainer">
            <div className="FeaturesWrapper">
                <div className="FeaturesContent">
                    <h1 className='FeaturesTitle'>FEATURES</h1>
                    <div className='FeaturesText1'>{props.text1}</div>
                    <div className='FeaturesText2'>{props.text2}</div>
                </div>
                <div className="IntheBox">
                    <h1 className='IntheBoxTitle'>IN THE BOX</h1>
                    <div className="InBoxBlock">
                        <div className="IntheBoxCols">
                            <span>
                                1x
                            </span>
                            <div className="IntheboxText">
                                {props.text3}
                            </div>
                        </div><div className="IntheBoxCols">
                            <span>
                                2x
                            </span>
                            <div className="IntheboxText">
                                {props.text4}
                            </div>
                        </div><div className="IntheBoxCols">
                            <span>
                                1x
                            </span>
                            <div className="IntheboxText">
                                {props.text5}
                            </div>
                        </div>
                        {props.text6 &&
                        <div className="IntheBoxCols">
                            <span>
                                1x
                            </span>
                            <div className="IntheboxText">
                                {props.text6}
                            </div>
                        </div>
                        }   
                        <div className="IntheBoxCols">
                            <span>
                                1x
                            </span>
                            <div className="IntheboxText">
                                {props.text7}
                            </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
