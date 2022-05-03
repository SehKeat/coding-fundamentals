function missingLetter(str) {
    var i = 0
    var j
    z = 122
    if (str) {
        j = str.charCodeAt(0) 
        while (j <= z && i < str.length){
            if (str.charCodeAt(i) !== j){
                console.log(String.fromCharCode(j))
                return String.fromCharCode(j)
            }
            i++
            j++
        }     
    }
    console.log("undefined")
    return undefined;
}

missingLetter("abce")
