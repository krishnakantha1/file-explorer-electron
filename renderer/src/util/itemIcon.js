import doc from "../assets/doc.png"
import folder from "../assets/folder.png"
import pdf from "../assets/pdf.png"
import webDoc from "../assets/chrome.png"
import img from "../assets/picture.png"


const getIcon = (defaultIcon, isDir, fileExt)=>{

    if(isDir){
        return folder
    }

    if(fileExt===".doc" || fileExt===".docm" || fileExt===".docx"){
        return doc
    }else if(fileExt===".pdf"){
        return pdf
    }else if(fileExt===".img" || fileExt===".png"){
        return img
    }else if(fileExt===".html" || fileExt===".url"){
        return webDoc
    }

    return defaultIcon
}

export default getIcon