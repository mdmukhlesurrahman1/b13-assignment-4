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
function count(){
allCount.innerText = allJobs.children.length;
interviewCount.innerText = interviewJobs.length;
rejectedCount.innerText = rejectedJobs.length;
}

count();
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
        
        count();

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

        rejectedRendering();
        count();

    }

})


// interview rendering machine

function interviewRendering() {
    interviewSection.innerHTML = '';

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
        interviewSection.appendChild(div);
    }
}


// rejected rendering machine

function rejectedRendering() {
    rejectedSection.innerHTML = '';

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
        
        `;
        rejectedSection.appendChild(div);
    }
}