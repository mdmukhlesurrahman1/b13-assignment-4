// get document

let allCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");
let jobCount = document.getElementById("job-count");

let allJobs = document.getElementById("all-jobs-section");
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

// get section

let allJobSection = document.getElementById('all-jobs-section');
let interviewSection = document.getElementById('interview-section');
let rejectedSection = document.getElementById('rejected-section');

// toggle section

function sectionToggle(id) {
    allJobSection.classList.add('hidden');
    interviewSection.classList.add('hidden');
    rejectedSection.classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}