import React from "react";

import styles from "./CSS/ExplorerBar.module.css"

const ExplorerBar = ({ explorerPath })=>{
    return (
        <div className={styles.container}>
            {
                explorerPath.map((files,i)=>{
                    return <p className={styles.temp} key={`${files}--${i}`}>{files}</p>
                })
            }
        </div>
    )
}

export default ExplorerBar