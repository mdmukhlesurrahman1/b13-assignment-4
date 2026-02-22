// toggle button

const allBtn = document.getElementById("allBtn");
const interviewBtn = document.getElementById("InterviewBtn");
const rejectedBtn = document.getElementById("rejectedBtn");
const allJobsSection = document.getElementById("all-jobs-section");
const interviewSection = document.getElementById("interview-section");
const rejectedSection = document.getElementById("rejected-section");


allBtn.addEventListener("click", function () {
    allBtn.classList.add("btn-active");
    interviewBtn.classList.remove("btn-active");
    rejectedBtn.classList.remove("btn-active");
    allJobsSection.classList.remove("hidden");
    interviewSection.classList.add("hidden");
    rejectedSection.classList.add("hidden");
})
interviewBtn.addEventListener("click", function () {
    allBtn.classList.remove("btn-active");
    interviewBtn.classList.add("btn-active");
    rejectedBtn.classList.remove("btn-active");
    allJobsSection.classList.add("hidden");
    interviewSection.classList.remove("hidden");
    rejectedSection.classList.add("hidden");
})
rejectedBtn.addEventListener("click", function () {
    allBtn.classList.remove("btn-active");
    interviewBtn.classList.remove("btn-active");
    rejectedBtn.classList.add("btn-active");
    allJobsSection.classList.add("hidden");
    interviewSection.classList.add("hidden");
    rejectedSection.classList.remove("hidden");
})


// count all jobs and set text

const getAllJobs = document.getElementsByClassName("jobPost");
const countAll = getAllJobs.length;

document.getElementById("total-count").innerText = countAll;
document.getElementById("job-count").innerText = `${countAll} jobs`;

