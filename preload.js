const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld(
    "fsAPI",
    {
        getFiles: async (path)=>{
            const data = await ipcRenderer.invoke("filesInPath",path)
            
            if(data){
                return data
            }
        }
    }
)

contextBridge.exposeInMainWorld(
    "execAPI",
    {
        openFile: async (path)=>{
            ipcRenderer.invoke("exec",path)
        }
    }
)