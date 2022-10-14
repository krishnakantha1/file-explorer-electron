import React from "react";

import styles from "./CSS/ExplorerBar.module.css"

const ExplorerBar = ({ explorerPath, dispatch })=>{
    return (
        <div className={styles.container}>
            <div className={styles.controls}>
                <button onClick={()=> dispatch({type:'pop'})}>🠔</button>
                <button onClick={() => dispatch({type:'push'})}>🠖</button>
            </div>
            <div className={styles.fullPath}>
                {
                    explorerPath.map((files,i)=>{
                        return (
                            <>
                                <p className={styles.temp} key={`${files}--${i}`}>{files}</p>
                                <span key={`${files}--${i}-s`}>/</span>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ExplorerBar