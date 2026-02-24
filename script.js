function filterCards(type) {

    const buttons = document.querySelectorAll(".button");
    buttons.forEach(btn => btn.classList.remove("active"));
    document.getElementById(type).classList.add("active");

    const cards = document.querySelectorAll(".job-card");
    let visibleCount = 0;

    cards.forEach(card => {

        if (type === "all") {
            card.classList.remove("hidden");
            visibleCount++;
        } else {
            if (card.dataset.status === type) {
                card.classList.remove("hidden");
                visibleCount++;
            } else {
                card.classList.add("hidden");
            }
        }
    });

    toggleNoJobsMessage(visibleCount);
}

// updatee counter seection
function updateCounters() {

    const total = document.querySelectorAll(".job-card").length;
    const interviews = document.querySelectorAll('[data-status="interview"]').length;
    const rejected = document.querySelectorAll('[data-status="rejected"]').length;

    document.querySelectorAll(".totalcount").forEach(el => el.textContent = total);
    document.getElementById("interviewcount").textContent = interviews;
    document.getElementById("rejectedcount").textContent = rejected;
}


// no job available interface
function toggleNoJobsMessage(visibleCount) {

    const message = document.getElementById("noJobsMessage");

    if (visibleCount === 0) {
        message.classList.remove("hidden");
    } else {
        message.classList.add("hidden");
    }
}

// interview btn
document.querySelectorAll(".interview-btn").forEach(btn => {
    btn.addEventListener("click", function () {

        const card = this.closest(".job-card");
        card.dataset.status = "interview";

        const statusEl = card.querySelector(".status-btn");
        statusEl.className = "status-btn bg-green-50 text-green-700 px-4 py-1 inline-block rounded";
        statusEl.textContent = "Interview";

        updateCounters();
        filterCards("all");
    });
});


// reject btn 
document.querySelectorAll(".reject-btn").forEach(btn => {
    btn.addEventListener("click", function () {

        const card = this.closest(".job-card");
        card.dataset.status = "rejected";

        const statusEl = card.querySelector(".status-btn");
        statusEl.className = "status-btn bg-red-50 text-red-700 px-4 py-1 inline-block rounded";
        statusEl.textContent = "Rejected";

        updateCounters();
        filterCards("all");
    });
});


updateCounters();
filterCards("all");





//  deleting card process

function deleteJob(button) {

    // take the main id from the button
    const card = button.parentElement;

    // 
    // take the status from the card
    const status = card.querySelector('.status-btn').innerText;

    //  Decrease the main count
    const totalTags = document.querySelectorAll('.totalcount');
    totalTags.forEach(tag => {
        tag.innerText = parseInt(tag.innerText) - 1;
    });

    //  // if status is Interview then decrease Interview count
    if (status === "Interview") {
        const interviewTag = document.getElementById('interviewcount');
        interviewTag.innerText = parseInt(interviewTag.innerText) - 1;
    }

    
    // if status is rejected then decrease reject count
    if (status === "Rejected") {
        const rejectedTag = document.getElementById('rejectedcount');
        rejectedTag.innerText = parseInt(rejectedTag.innerText) - 1;
    }

    // at last delete the card from the display
    card.remove();
}