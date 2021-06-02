var path = require('path');
const fs = require('fs')
var rootPath = path.resolve('./');

const isFile = fileName => {
    return fs.lstatSync(fileName).isFile()
}

let bars = "";

function recursion(dirPath) {
    var a = fs.readdirSync(dirPath);
    if (a.length != null) {
        for (let i = 0; i < a.length; i++) {
            var son = a[i];
            var filePath = path.join(dirPath, son);
            var stats = fs.statSync(filePath);
            if (stats.isDirectory() && !son.includes(".")) {
                recursion(filePath)
            } else if (stats.isFile() && son.includes(".md") && !son.includes("_sidebar.md")) {
                var relativeFilePath = filePath.substr(rootPath.length + 1);
                var urlstr = relativeFilePath.split(path.sep);
                var url = "- [**" + son + "**](/" + urlstr.join("/") + ")"
                bars += url + "\n";
            }
        }
    }
}

recursion(rootPath);
console.log(bars);

try {
    const data = fs.writeFileSync(rootPath+path.sep+"_sidebar.md", bars)
    //文件写入成功。
} catch (err) {
    console.error('===========文件写入失败===========')
    console.error(err)
}



