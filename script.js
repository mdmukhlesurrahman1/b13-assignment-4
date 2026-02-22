// get count

let allCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");
let jobCount = document.getElementById("job-count");

// get section

let mainContainer = document.querySelector('main');
let allJobs = document.getElementById("all-jobs-section");
let interviewSection = document.getElementById('interview-section');
let rejectedSection = document.getElementById('rejected-section');

// declare empty array

let interviewJobs = [];
let rejectedJobs = [];

// set value

allCount.innerText = allJobs.children.length;
interviewCount.innerText = interviewJobs.length;
rejectedCount.innerText = rejectedJobs.length;
jobCount.innerText = `${allJobs.children.length} jobs`;

// toggle button

function toggleStyle(id) {
    document.getElementById('allBtn').classList.remove('btn-active');
    document.getElementById('interviewBtn').classList.remove('btn-active');
    document.getElementById('rejectedBtn').classList.remove('btn-active');
    document.getElementById(id).classList.add('btn-active');
}

// toggle section

function sectionToggle(id) {
    allJobs.classList.add('hidden');
    interviewSection.classList.add('hidden');
    rejectedSection.classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

// delegation

mainContainer.addEventListener('click', function(event){
    const parent = event.target.parentNode.parentNode;
    const companyName = parent.querySelector(".company-name").innerText;
    console.log(companyName);
})