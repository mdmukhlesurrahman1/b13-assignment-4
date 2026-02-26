let currentTab = "all-btn";

// Get All Section
const interviewSection = document.getElementById("interview-section");
const rejectedSection = document.getElementById("rejected-section");
const allJobsSection = document.getElementById("all-jobs-section");
const noJobSection = document.getElementById("no-job-section");


// Switch Tab Create
function switchTab(tab) {
    const tabs = ["all-btn", "interview-btn", "rejected-btn"]

    // Button Style
    for (const t of tabs) {
        currentTab = t;
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
}

// Count Update
function count() {
    const totalCount = document.getElementById("total-count");
    const interviewCount = document.getElementById("interview-count");
    const rejectedCount = document.getElementById("rejected-count");
    const jobCount = document.getElementById("job-count");

    totalCount.innerText = allJobsSection.children.length;
    interviewCount.innerText = interviewSection.children.length;
    rejectedCount.innerText = rejectedSection.children.length;
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
        card.classList.add('border-l-4', 'border-success');
        interviewSection.appendChild(card);
    }
    else if (clicked.classList.contains('job-rejected-btn')) {
        status.innerText = "REJECTED";
        status.className = ('badge badge-error my-1');
        card.classList.add('border-l-4', 'border-error');
        rejectedSection.appendChild(card);
    }
    else if (clicked.classList.contains('delete-btn')) {
        parent.removeChild(card);
    }
    count();
})


// Body Function Call
switchTab(currentTab);
count();