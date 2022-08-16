var subjects;
var terms;
var termIdx = 0;
var subjIdx = 0;
function getSubjects() {
    fetch('Clanceys1L.json')
        .then(response => response.json())
        .then(data => {
            subjects = data.subjects;
        });
}

function renderSubjects() {
    getSubjects();
    let html = '';
    subjects.forEach(function (subj, idx) {
        html += `<button type="button" onclick="getTerms(${idx})" id="subjBtn${idx}">${subj.subject}</button>`;

    });
    document.getElementById("maindiv").innerHTML = html;
}
function getTerms(subjIdx) {
    //let subjects = getSubjects();
    subjIdx = subjIdx;
    termIdx = 0;
    terms = subjects[subjIdx].terms;
    initTerms();
}

function initTerms() {
    document.getElementById("termdiv").hidden = false;
    document.getElementById("term").innerHTML = terms[termIdx].term;
    document.getElementById("definition").hidden = true;
    if (terms[termIdx].definition) {
        document.getElementById("definition").innerHTML = terms[termIdx].definition;
        //document.getElementById("definition").hidden = false;
        document.getElementById("defBtn").disabled = false;
    } else {
        document.getElementById("defBtn").disabled = true;
    }
    document.getElementById("keywords").hidden = true;
    if (terms[termIdx].keywords) {
        html = '<br>';
        terms[termIdx].keywords.forEach(item => {
            html += item + "<br>";
        });
        document.getElementById("keyBtn").disabled = false;
        document.getElementById("keywords").innerHTML = html;
    } else {
        document.getElementById("keyBtn").disabled = true;
    }

}

function nextBtnClick() {
    if (termIdx < terms.length - 1) {
        termIdx += 1;
        initTerms();
    } else {

    }
}

function prevBtnClick() {
    if (termIdx > 0) {
        termIdx -= 1;
        initTerms();
    } else {

    }
}

function showDef() {
    document.getElementById("definition").hidden = false;
}

function showKey() {
    document.getElementById("keywords").hidden = false;
}



//renderSubjects();
//console.log("test");
//renderSubjects();
//getTerms(subjIdx);
