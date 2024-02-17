function findWord(userInput, ...words) {
    let resWord;
    let resLen = 0;
    let len = 0;
    for (let word of words) {
        len = findSubseq(userInput, word);
        if (resLen < len) {
            resWord = word;
            resLen = len;
        }
    }
    return resWord;
}

function findSubseq(str1, str2) {
    const str1Len = str1.length;
    const str2Len = str2.length;
    const cell = new Array(str1Len).fill(new Array(str2Len));
    
    for (let i = 0; i < str1Len; i++) {
        for (let j = 0; j < str2Len; j++) {
            if (str1[i] === str2[j]) {
                cell[i][j] = i > 0 ? cell[i - 1][j] + 1 : 1;
            }
            else {
                cell[i][j] = Math.max(
                    i > 0 ? cell[i - 1][j] : 0, 
                    j > 0 ? cell[i][j - 1] : 0
                );
            }
        }
    }
    return cell[str1Len - 1][str2Len - 1];    
}

//user entered 'hish'. What he mean 'fish' or 'vista'?
console.log(findWord('hish', 'fish', 'vista'));

//user entered 'fosh'. What he mean 'fish' or 'fort'?
console.log(findWord('fosh', 'fish', 'fort'));
