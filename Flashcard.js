var subjects;
var termIdx = 0;
var subjIdx = 0;
function getSubjects() {
    fetch('Outlines1L.json')
        .then(response => response.json())
        .then(data => {
            subjects = data.subjects;
        });
}

function renderSidebar() {
    var html = '';
    subjects.forEach((item,idx) => {
        html += `<div class="w3-bar-item w3-button w3-text-grey w3-hover-black" onclick="closeNav(${idx})">${item.subject}</div>`
    });
    document.getElementById("sidenav").innerHTML = html;
}

function renderSubject(){
    var subject=subjects[subjIdx];
    document.getElementById("subjectdiv").innerHTML= `<h1 id="subject">${subject.subject}</h1>
            <hr class="w3-opacity">
            <h2>Mnemonic: </h2><span>${subject.mnemonic}</span>
            <h3 onclick="toggleMe(document.getElementById('subjectElements'))">Elements</h3>
            <div id="subjectElements"></div>`
    var html = '';
    subject.elements.forEach(item => {
        html += `<div>${item.element}</div>`
    });
    document.getElementById("subjectElements").innerHTML = html;
    

}

// Open and close sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "60%";
    document.getElementById("mySidebar").style.display = "block";
    renderSidebar();
  }
  
  function closeNav(inId) {
    document.getElementById("mySidebar").style.display = "none";
    subjIdx = inId;
    renderSubject();
  }
  

function toggleMe (inDoc){
    inDoc.hidden = !(inDoc.hidden)
}

getSubjects();
//renderSidebar();
//console.log("test");
//getSubjects();
//getTerms(subjIdx);
