// get count

let allCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");
let jobCount = document.getElementById("job-count");

// get section

let mainContainer = document.querySelector('main');
let allJobs = document.getElementById("all-jobs-section");
let filterSection = document.getElementById('filter-section');
let noJobSection = document.getElementById('no-job-section');

// declare empty array

let interviewJobs = [];
let rejectedJobs = [];
let currentStatus = "allBtn";

// set value
function count() {
    let all = allJobs.children.length;
    let interview = interviewJobs.length;
    let rejected = rejectedJobs.length;

    allCount.innerText = all;
    interviewCount.innerText = interview;
    rejectedCount.innerText = rejected;

    if (currentStatus == "allBtn") {
        jobCount.innerText = `${all} jobs`;
    }
    else if (currentStatus == "interviewBtn") {
        jobCount.innerText = `${interview} of ${all} jobs`;
    }
    else if (currentStatus == "rejectedBtn") {
        jobCount.innerText = `${rejected} of ${all} jobs`;
    }
}

count();

// toggle button

function toggleStyle(id) {
    document.getElementById('allBtn').classList.remove('btn-active');
    document.getElementById('interviewBtn').classList.remove('btn-active');
    document.getElementById('rejectedBtn').classList.remove('btn-active');
    document.getElementById(id).classList.add('btn-active');

    currentStatus = id;

    // console.log(currentStatus);


    if (id == 'allBtn') {
        filterSection.classList.add('hidden');
        allJobs.classList.remove('hidden');
        count();
        noJob();
    }
    else if (id == 'interviewBtn') {
        allJobs.classList.add('hidden');
        filterSection.classList.remove('hidden');
        noJobSection.classList.remove('hidden');
        interviewRendering();
        count();
        noJob();
    }
    else if (id == 'rejectedBtn') {
        allJobs.classList.add('hidden');
        filterSection.classList.remove('hidden');
        noJobSection.classList.remove('hidden');
        rejectedRendering();
        count();
        noJob();
    }
}

// no job show
function noJob() {
    if (currentStatus == "allBtn" && allJobs.children.length == 0) {
        noJobSection.classList.remove('hidden');
    }
    else if (currentStatus == "interviewBtn" && filterSection.children.length == 0) {
        noJobSection.classList.remove('hidden');
    }
    else if (currentStatus == "rejectedBtn" && filterSection.children.length == 0) {
        noJobSection.classList.remove('hidden');
    }
    else {
        noJobSection.classList.add('hidden');
    }
}

noJob();


// delegation

mainContainer.addEventListener('click', function (event) {

    if (event.target.classList.contains('job-interview')) {

        const parent = event.target.parentNode.parentNode;
        const companyName = parent.querySelector(".company-name").innerText;
        const position = parent.querySelector(".position").innerText;
        const salary = parent.querySelector(".salary").innerText;
        const details = parent.querySelector(".details").innerText;
        const badge = parent.querySelector(".badge").innerText = 'INTERVIEW';

        parent.querySelector(".badge").className = ('badge badge-success my-1');



        const jobInfo = {
            companyName,
            position,
            salary,
            details,
            badge
        }

        const jobExistInterview = interviewJobs.find(i => i.companyName == jobInfo.companyName);

        if (!jobExistInterview) {
            interviewJobs.push(jobInfo);
        }

        rejectedJobs = rejectedJobs.filter(item => item.companyName != jobInfo.companyName);

        if (currentStatus == 'rejectedBtn') {
            rejectedRendering();
        }

        count();
        noJob();

    }
    else if (event.target.classList.contains('job-rejected')) {

        const parent = event.target.parentNode.parentNode;
        const companyName = parent.querySelector(".company-name").innerText;
        const position = parent.querySelector(".position").innerText;
        const salary = parent.querySelector(".salary").innerText;
        const details = parent.querySelector(".details").innerText;
        const badge = parent.querySelector(".badge").innerText = 'REJECTED';

        parent.querySelector(".badge").className = ('badge badge-error my-1');



        const jobInfo = {
            companyName,
            position,
            salary,
            details,
            badge
        }

        const jobExistRejected = rejectedJobs.find(i => i.companyName == jobInfo.companyName);

        if (!jobExistRejected) {
            rejectedJobs.push(jobInfo);
        }

        interviewJobs = interviewJobs.filter(item => item.companyName != jobInfo.companyName);

        if (currentStatus == 'interviewBtn') {
            interviewRendering();
        }

        count();
        noJob();

    }
    else if (event.target.classList.contains('deleteBtn') || event.target.classList.contains('fa-trash-can')) {
        if (event.target.classList.contains('deleteBtn')) {
            const parent = event.target.parentNode.parentNode.parentNode;
            parent.remove();
        }
        else if (event.target.classList.contains('fa-trash-can')) {
            const parent = event.target.parentNode.parentNode.parentNode.parentNode;
            parent.remove();
        }
        count();
        noJob();

    }

})


// interview rendering machine

function interviewRendering() {

    filterSection.innerHTML = '';

    for (let job of interviewJobs) {
        let div = document.createElement('div');
        div.className = 'jobPost card bg-base-100 shadow-sm w-full my-4';
        div.innerHTML = `
            <div class="card-body p-4 md:p-6">
                <div class="flex justify-between items-center mb-1">
                    <div>
                        <h2 class="company-name text-xl font-bold text-info-content">${job.companyName}</h2>
                        <p class="position text-info-content/70 text-[16px]">${job.position}</p>
                    </div>
                    <button class="deleteBtn btn btn-outline btn-error rounded-full p-3">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
                <p class="salary text-info-content/70 text-[14px]">${job.salary}</p>
                <div class="badge badge-success my-1">${job.badge}</div>
                <p class="details text-info-content/70 text-[14px] mb-1">${job.details}</p>
                <div class="flex gap-2">
                    <button class="job-interview btn btn-outline btn-success">Interview</button>
                    <button class="job-rejected btn btn-outline btn-error">Rejected</button>
                </div>
            </div>
        
        `;
        filterSection.appendChild(div);
    }

}


// rejected rendering machine

function rejectedRendering() {

    filterSection.innerHTML = '';

    for (let job of rejectedJobs) {
        let div = document.createElement('div');
        div.className = 'jobPost card bg-base-100 shadow-sm w-full my-4';
        div.innerHTML = `
            <div class="card-body p-4 md:p-6">
                <div class="flex justify-between items-center mb-1">
                    <div>
                        <h2 class="company-name text-xl font-bold text-info-content">${job.companyName}</h2>
                        <p class="position text-info-content/70 text-[16px]">${job.position}</p>
                    </div>
                    <button class="deleteBtn btn btn-outline btn-error rounded-full p-3">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
                <p class="salary text-info-content/70 text-[14px]">${job.salary}</p>
                <div class="badge badge-error my-1">${job.badge}</div>
                <p class="details text-info-content/70 text-[14px] mb-1">${job.details}</p>
                <div class="flex gap-2">
                    <button class="job-interview btn btn-outline btn-success">Interview</button>
                    <button class="job-rejected btn btn-outline btn-error">Rejected</button>
                </div>
            </div>
        `
        filterSection.appendChild(div);
    }
}