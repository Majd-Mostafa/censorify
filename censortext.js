var censoredWords=["sad","bad","mad"];
var customCensoredWords=[];
function censor(inStr){
    for(idx in censoredWords){
        inStr=inStr.replace(censoredWords[idx],"****");
        }
    for(idx in customCensoredWords){
        inStr=inStr.replace(custonCensoredWords[idx],"***");
    }
    return inStr;
};
function addCensoredWords(newStr){
    customCensoredWords.push(newStr);

}
function getCensoredWords(){

    return censoredWords.concat(customCensoredWords);
}
exports.censor=censor;
exports.addCensoredWords=addCensoredWords;
exports.getCensoredWords=getCensoredWords;
