import React, { useState } from 'react';

export default function List(props) {
    let [totalCheck, setTotalCheck] = useState(0);
    const handleClick = (value) => {
        if(value){
            setTotalCheck(totalCheck + 1);
        } else {
            setTotalCheck(totalCheck - 1);
        }
    }

    return (
        <nav className="panel">
            <p className="panel-heading">
                Keeping in Track
            </p>
            <div className="checklist" >
                {props.list.map((item,i) => (
                    <div className="panel-block" href="#" key={i} >
                        <label className="checkbox">
                            <input id={`item-${i}`} type="checkbox" onClick={(e) => { handleClick(e.target.checked)}} />
                                {item}
                        </label>
                    </div>
                ))}
            </div>
            {
                props.list.length > 0 &&
                <div className="panel-block total">
                    <span className="is-outlined is-fullwidth">
                        Completed:
                    </span>
                    <span id="total">
                        {totalCheck}
                    </span>
                    <span>
                        {`/${props.list.length}`}
                    </span>
                </div>
            }
        </nav>
    )
}