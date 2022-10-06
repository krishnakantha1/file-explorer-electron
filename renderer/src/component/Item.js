import React from "react";

import styles from "./CSS/Item.module.css"

import getIcon from "../util/itemIcon"

const Item = ({contentName, fileIcon, isDir, fileExt, insertToPath, index, next, curPath})=>{

    const handleItemClick = (e)=>{
        const name = e.target.getAttribute("data-item")
        
        if(isDir){
            insertToPath(name,index)
        }else{
            window.execAPI.openFile(`${curPath}/${contentName}`)
        }
    }

    return (
        <div className={`${styles.container} ${next===contentName?styles.selected:null}`} onClick={handleItemClick} data-item={contentName}>
            <img className={styles.icon} src={getIcon(fileIcon,isDir,fileExt)}></img>
            <p className={styles.itemName}>{contentName}</p>
        </div>
    )
}

export default Item