const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { exec } = require("child_process")
const fs = require("fs")

ipcMain.handle("filesInPath",  async (_,dirPath)=>{
    const content = fs.readdirSync(dirPath)
    const data = []
    for(let i=0;i<content.length;i++){
        const bundle = {}

        bundle.contentName = content[i]
        bundle.path = `${dirPath}/${content[i]}`
        bundle.isDir = fs.lstatSync(bundle.path).isDirectory()
        bundle.fileExt = path.extname(bundle.path).toLowerCase()

        const fileIcon = await app.getFileIcon(bundle.path)
        if(fileIcon){
            bundle.fileIcon = fileIcon.toDataURL()
            data.push(bundle)
        }

    }


    return data
})

ipcMain.handle("exec", async (_,filePath)=>{
    exec(`"${filePath}"`)
})

function createMainWindow(){
    const mainWindow = new BrowserWindow({
        title : "file explorer",
        width:1000,
        height:600,
        webPreferences : {
            preload : path.join(__dirname, "preload.js")
        },
    })

    

    mainWindow.webContents.openDevTools()

    mainWindow.loadFile(path.join(__dirname,"./renderer/index.html"))
    
}

app.whenReady().then(()=>{
    createMainWindow()

    app.on("activate", ()=>{
        if(BrowserWindow.getAllWindows().length===0){
            createMainWindow()
        }
    })
})