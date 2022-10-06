import React,{useState,useEffect} from "react";

import styles from "./CSS/File.module.css"

import Item from "./Item"

const File = ({explorerPath,index,insertToPath})=>{
    const [fileContent,setFileContent] = useState([])

    useEffect(()=>{
        const getF = async ()=>{

            const curPath = `c:/${explorerPath.slice(0,index+1).join("/")}/`
            
            const res = await  window.fsAPI.getFiles(curPath)

            if(res) {
                
                setFileContent(res)
            }
        }

        getF()
    },[])

    return (
        <div className={styles.container}>
            <div>
                {fileContent.length===0?<p>Empty</p>:null}
                {
                    fileContent.map((content,i)=>
                        <Item key={i} {...content} insertToPath={insertToPath} index={index} 
                            next={explorerPath.length-1===index?"":explorerPath[index+1]}
                            curPath={`c:/${explorerPath.slice(0,index+1).join("/")}`}/>
                    )
                }
            </div>
        </div>
    )
}

export default File;