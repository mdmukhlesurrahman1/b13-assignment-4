let currentTab = "all-btn";

// Get All Section
const interviewSection = document.getElementById("interview-section");
const rejectedSection = document.getElementById("rejected-section");
const allJobsSection = document.getElementById("all-jobs-section");
const noJobSection = document.getElementById("no-job-section");


// Switch Tab Create
function switchTab(tab) {
    const tabs = ["all-btn", "interview-btn", "rejected-btn"]
    currentTab = tab;

    // Button Style
    for (const t of tabs) {
        const tabName = document.getElementById(t);
        if (t === tab) {
            tabName.classList.add('btn-active');
        }
        else {
            tabName.classList.remove('btn-active');
        }
    }

    // Section Switch
    const Sections = [interviewSection, rejectedSection, allJobsSection];
    for (const section of Sections) {
        section.classList.add('hidden');
    }

    if (tab === "interview-btn") {
        interviewSection.classList.remove('hidden');
    } else if (tab === "rejected-btn") {
        rejectedSection.classList.remove('hidden');
    } else {
        allJobsSection.classList.remove('hidden');
    }
    count();
}

// Main Part Function
document.getElementById("jobs").addEventListener('click', function (event) {
    const clicked = event.target;
    const card = clicked.closest(".job-post");
    const parent = card.parentNode;
    const status = card.querySelector(".badge");

    if (clicked.classList.contains('job-interview-btn')) {
        status.innerText = "INTERVIEWED";
        status.className = ('badge badge-success my-1');
        card.className = ('job-post card bg-base-100 shadow-sm w-full my-4 border-l-4 border-success');
        interviewSection.appendChild(card);
    }
    else if (clicked.classList.contains('job-rejected-btn')) {
        status.innerText = "REJECTED";
        status.className = ('badge badge-error my-1');
        card.className = ('job-post card bg-base-100 shadow-sm w-full my-4 border-l-4 border-error');
        rejectedSection.appendChild(card);
    }
    else if (clicked.classList.contains('delete-btn')) {
        parent.removeChild(card);
    }
    count();
})

// Get All Count Display
const totalCount = document.getElementById("total-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");
const jobCount = document.getElementById("job-count");

// Count Update
function count() {
    const counts = {
        "all-btn": allJobsSection.children.length,
        "interview-btn": interviewSection.children.length,
        "rejected-btn": rejectedSection.children.length,
    };

    totalCount.innerText = counts["all-btn"];
    interviewCount.innerText = counts["interview-btn"];
    rejectedCount.innerText = counts["rejected-btn"];
    jobCount.innerText = counts[currentTab] + ' jobs';

    // NO Job Show Hide Function
    if (counts[currentTab] < 1) {
        noJobSection.classList.remove("hidden");
    }
    else {
        noJobSection.classList.add("hidden");
    }
}

switchTab(currentTab);
count();