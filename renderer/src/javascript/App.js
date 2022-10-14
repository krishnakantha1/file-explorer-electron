import React, { useEffect, useRef, useState } from "react";

import styles from "./App.module.css"

import File from "../component/File"
import ExplorerBar from "../component/ExplorerBar";

import { useUrlPath } from "../util/useUrlPath"

const App = ()=>{
    const [explorerPath,dispatch] = useUrlPath(["Users","Krishna","Desktop"])

    const dd = useRef()

    useEffect(()=>{
        dd.current.scrollLeft = 10000;
    },[explorerPath])

    const insertToPath = (dirName,index)=>{
        dispatch({type:'insertToIndex', dirName:dirName, index:index})
    }

   return (
    <div className={styles.container}>
        <div className={styles.overview}>
            <ExplorerBar explorerPath={explorerPath} dispatch={dispatch}/>
        </div>
        <div className={styles.mainBody} ref={dd}>
            {
                explorerPath.map((dirName,i)=>{
                    return <File key={`${i}--${dirName}`} explorerPath={explorerPath} index={i} insertToPath={insertToPath}/>
                })
            }
        </div>
        
    </div>
   )
}

export default App