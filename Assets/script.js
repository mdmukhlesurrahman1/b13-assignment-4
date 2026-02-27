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
        const clone = card.cloneNode(true);

        // Duplicate Check And Add
        let isDuplicate = false;
        for (let child of interviewSection.children) {
            if (child.innerHTML === clone.innerHTML) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            interviewSection.appendChild(clone);
        }

        // Is Available Rejected
        for (let child of rejectedSection.children) {
            if (child.querySelector(".company-name").innerText === card.querySelector(".company-name").innerText) {
                child.remove();
            }
        }

        // All Tabs Style Change
        for (let child of allJobsSection.children) {
            if (child.querySelector(".company-name").innerText === card.querySelector(".company-name").innerText) {
                child.className = ('job-post card bg-base-100 shadow-sm w-full my-4 border-l-4 border-success');
                child.querySelector(".badge").innerText = "INTERVIEWED";
                child.querySelector(".badge").className = ('badge badge-success my-1');
            }
        }

    }

    else if (clicked.classList.contains('job-rejected-btn')) {
        status.innerText = "REJECTED";
        status.className = ('badge badge-error my-1');
        card.className = ('job-post card bg-base-100 shadow-sm w-full my-4 border-l-4 border-error');
        const clone = card.cloneNode(true);

        // Duplicate Check And Add
        let isDuplicate = false;
        for (let child of rejectedSection.children) {
            if (child.innerHTML === clone.innerHTML) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            rejectedSection.appendChild(clone);
        }

        // Is Available Rejected
        for (let child of interviewSection.children) {
            if (child.querySelector(".company-name").innerText === card.querySelector(".company-name").innerText) {
                child.remove();
            }
        }

        // All Tabs Style Change
        for (let child of allJobsSection.children) {
            if (child.querySelector(".company-name").innerText === card.querySelector(".company-name").innerText) {
                child.className = ('job-post card bg-base-100 shadow-sm w-full my-4 border-l-4 border-error');
                child.querySelector(".badge").innerText = "REJECTED";
                child.querySelector(".badge").className = ('badge badge-error my-1');
            }
        }
    }

    else if (clicked.classList.contains('delete-btn')) {
        if (currentTab === "all-btn") {
            parent.removeChild(card);
            for (let child of interviewSection.children) {
                if (child.querySelector(".company-name").innerText === card.querySelector(".company-name").innerText) {
                    child.remove();
                }
            }
            for (let child of rejectedSection.children) {
                if (child.querySelector(".company-name").innerText === card.querySelector(".company-name").innerText) {
                    child.remove();
                }
            }
        }
        else {
            parent.removeChild(card);
            for (let child of allJobsSection.children) {
                if (child.querySelector(".company-name").innerText === card.querySelector(".company-name").innerText) {
                    child.remove();
                }
            }
        }
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
    if (currentTab === "all-btn") {
        jobCount.innerText = counts["all-btn"] + ' jobs';
    }
    else {
        jobCount.innerText = counts[currentTab] + ' of ' + counts["all-btn"] + ' jobs';
    }


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