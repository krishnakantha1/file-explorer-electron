import React, { useEffect, useRef, useState } from "react";

import styles from "./App.module.css"

import File from "../component/File"
import ExplorerBar from "../component/ExplorerBar";

const App = ()=>{
    const [explorerPath,setExplorerPath] = useState(["Users","Krishna","Desktop"])
    const dd = useRef()

    useEffect(()=>{
        dd.current.scrollLeft = 10000;
    },[explorerPath])

    const insertToPath = (dirName,index)=>{
        if(index===0){
            return
        }
        
        let temp = [...explorerPath]

        if(index<explorerPath.length-1){
            temp = temp.slice(0,index+1)
        }

        temp.push(dirName)

        console.log(temp)

        setExplorerPath((_)=>[...temp])

        
    }

   return (
    <div className={styles.container}>
        <div className={styles.overview}>
            <ExplorerBar explorerPath={explorerPath}/>
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