var date = new Date();
var currentDateTime = ""
    + date.getFullYear()
    + (date.getMonth() + 1)
    + date.getDate()
    + "_"
    + date.getHours()
    + date.getMinutes()
    + date.getSeconds();

var extend = (app.activeDocument.name).match(/[^.]+$/);
var fileName = (app.activeDocument.name).replace("." + extend, "");

folderName = ((app.activeDocument.path) + "/" + fileName);
folder = new Folder(folderName);
folder.create();

var filePath = (app.activeDocument.path) + "/"　+ fileName + "/" + currentDateTime;

pngOpt = new PNGSaveOptions();
pngOpt.interlaced = false;
pngOpt.compression = 0;
activeDocument.saveAs(new File(filePath), pngOpt, true, Extension.LOWERCASE);