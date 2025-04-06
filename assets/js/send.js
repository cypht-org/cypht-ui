$(document).ready(function () {
  /* ---------------------------------- color --------------------------------- */

  const colorMap = {
    A: { bg: "#FF5733", text: "#fff" },
    B: { bg: "#33FF57", text: "#000" },
    C: { bg: "#3357FF", text: "#fff" },
    D: { bg: "#FF33A8", text: "#fff" },
    E: { bg: "#FF8C33", text: "#000" },
    F: { bg: "#FFD700", text: "#000" },
    G: { bg: "#1E90FF", text: "#fff" },
    H: { bg: "#32CD32", text: "#000" },
    I: { bg: "#FF4500", text: "#fff" },
    J: { bg: "#8A2BE2", text: "#fff" },
    K: { bg: "#D2691E", text: "#fff" },
    L: { bg: "#DC143C", text: "#fff" },
    M: { bg: "#008B8B", text: "#fff" },
    N: { bg: "#B8860B", text: "#fff" },
    O: { bg: "#9932CC", text: "#fff" },
    P: { bg: "#FF1493", text: "#fff" },
    Q: { bg: "#00BFFF", text: "#fff" },
    R: { bg: "#4B0082", text: "#fff" },
    S: { bg: "#6A5ACD", text: "#fff" },
    T: { bg: "#48D1CC", text: "#000" },
    U: { bg: "#C71585", text: "#fff" },
    V: { bg: "#DAA520", text: "#000" },
    W: { bg: "#ADFF2F", text: "#000" },
    X: { bg: "#40E0D0", text: "#000" },
    Y: { bg: "#9ACD32", text: "#000" },
    Z: { bg: "#FF6347", text: "#fff" },
  };

  /* ------------------------------- Data Emails ------------------------------- */
  const emails = [
    {
      id: 1,
      name: "Alice Johnson",
      subject: "UI/UX Consultation",
      message:
        "Hey, I’d love to discuss the user experience of our new app. Are you available this week?",
      time: "15 min ago",
      files: [{ name: "design-specs.pdf", size: "2MB" }],
    },
    {
      id: 2,
      name: "Bob Smith",
      subject: "Web Design Proposal",
      message:
        "We need a complete redesign of our website. Can you share your portfolio?",
      time: "30 min ago",
      files: [],
    },
    {
      id: 3,
      name: "Carla Gomez",
      subject: "New Project Inquiry",
      message: "I'm interested in your services for a new branding project.",
      time: "1 hour ago",
      files: [
        { name: "brand-brief.docx", size: "1.5MB" },
        { name: "logo.png", size: "500KB" },
      ],
    },
    {
      id: 4,
      name: "David Lee",
      subject: "Invoice for March",
      message:
        "Attached is the invoice for our last project. Let me know if you have any questions.",
      time: "2 hours ago",
      files: [{ name: "invoice-march.pdf", size: "400KB" }],
    },
    {
      id: 5,
      name: "Elena Brown",
      subject: "Meeting Notes",
      message:
        "I've summarized our last call. Let me know if you need any changes.",
      time: "Yesterday",
      files: [],
    },
    {
      id: 6,
      name: "Frank Wilson",
      subject: "Marketing Strategy",
      message:
        "Here's the latest marketing strategy document. Looking forward to your feedback.",
      time: "Yesterday",
      files: [{ name: "strategy.pdf", size: "3MB" }],
    },
    {
      id: 7,
      name: "Grace Miller",
      subject: "Job Application",
      message:
        "I've attached my resume and cover letter. Please let me know if you need more information.",
      time: "2 days ago",
      files: [
        { name: "resume.pdf", size: "1MB" },
        { name: "cover-letter.docx", size: "500KB" },
      ],
    },
    {
      id: 8,
      name: "Henry Clark",
      subject: "Partnership Proposal",
      message:
        "We’re looking to partner with your company. Let’s discuss the details.",
      time: "2 days ago",
      files: [],
    },
    {
      id: 9,
      name: "Isabelle Martin",
      subject: "Software Update",
      message:
        "A new update is available for your software. Please check the release notes.",
      time: "3 days ago",
      files: [{ name: "update-notes.pdf", size: "600KB" }],
    },
    {
      id: 10,
      name: "Jack Turner",
      subject: "Client Feedback",
      message:
        "Here’s some feedback from our recent project. Let me know your thoughts.",
      time: "4 days ago",
      files: [],
    },
    {
      id: 11,
      name: "Katherine Lopez",
      subject: "Product Launch",
      message:
        "Exciting news! We’re launching our new product next month. Stay tuned!",
      time: "5 days ago",
      files: [{ name: "launch-plan.pdf", size: "2MB" }],
    },
    {
      id: 12,
      name: "Leo Baker",
      subject: "Contract Agreement",
      message:
        "Please review the attached contract and let us know if any modifications are needed.",
      time: "6 days ago",
      files: [{ name: "contract.pdf", size: "5MB" }],
    },
    {
      id: 13,
      name: "Mia Edwards",
      subject: "Social Media Campaign",
      message:
        "We’ve prepared a new campaign for social media. Let me know what you think.",
      time: "1 week ago",
      files: [],
    },
    {
      id: 14,
      name: "Nathan Scott",
      subject: "Security Alert",
      message:
        "Your account has been accessed from a new device. If this wasn’t you, reset your password.",
      time: "1 week ago",
      files: [],
    },
    {
      id: 15,
      name: "Olivia Davis",
      subject: "Photography Contract",
      message:
        "Here is the contract for the upcoming photoshoot. Please sign and return it.",
      time: "2 weeks ago",
      files: [{ name: "photography-contract.pdf", size: "1.2MB" }],
    },
    {
      id: 16,
      name: "Peter Parker",
      subject: "Website Bug Report",
      message:
        "I found some bugs on your website. Please check the attached report.",
      time: "2 weeks ago",
      files: [{ name: "bug-report.pdf", size: "800KB" }],
    },
    {
      id: 17,
      name: "Quinn Foster",
      subject: "Service Request",
      message:
        "I need assistance with integrating your API into our system. Can we schedule a call?",
      time: "3 weeks ago",
      files: [],
    },
    {
      id: 18,
      name: "Rachel Adams",
      subject: "Event Invitation",
      message:
        "We’d love for you to join our upcoming tech event. Let us know if you’re interested!",
      time: "3 weeks ago",
      files: [{ name: "event-details.pdf", size: "1MB" }],
    },
    {
      id: 19,
      name: "Samuel Green",
      subject: "HR Policy Update",
      message:
        "Please review the new HR policies attached. Let me know if you have any questions.",
      time: "1 month ago",
      files: [{ name: "hr-policy.pdf", size: "2MB" }],
    },
    {
      id: 20,
      name: "Tina White",
      subject: "Freelance Opportunity",
      message:
        "We’re looking for a freelancer for a short-term project. Are you available?",
      time: "1 month ago",
      files: [],
    },
    {
      id: 21,
      name: "Umar Johnson",
      subject: "Tech Conference Details",
      message:
        "Here are the details for the upcoming tech conference. Let me know if you’ll attend.",
      time: "1 month ago",
      files: [{ name: "conference-agenda.pdf", size: "3MB" }],
    },
    {
      id: 22,
      name: "Victor Hall",
      subject: "App Feature Request",
      message:
        "We’d love to see a dark mode feature in your app. Any plans for that?",
      time: "5 weeks ago",
      files: [],
    },
    {
      id: 23,
      name: "Wendy Clark",
      subject: "Collaboration Inquiry",
      message:
        "We’d love to collaborate with your team on a new project. Can we chat?",
      time: "5 weeks ago",
      files: [],
    },
    {
      id: 24,
      name: "Xavier Martinez",
      subject: "Legal Compliance Document",
      message:
        "Please review the attached legal compliance document and provide feedback.",
      time: "6 weeks ago",
      files: [{ name: "compliance.pdf", size: "4MB" }],
    },
    {
      id: 25,
      name: "Yasmine Reed",
      subject: "Customer Feedback Survey",
      message:
        "We value your opinion! Please take a moment to complete our feedback survey.",
      time: "6 weeks ago",
      files: [{ name: "survey-link.txt", size: "1KB" }],
    },
    {
      id: 26,
      name: "Zane Thompson",
      subject: "Payment Confirmation",
      message:
        "Your payment has been received successfully. Please find the receipt attached.",
      time: "7 weeks ago",
      files: [{ name: "receipt.pdf", size: "200KB" }],
    },
    {
      id: 27,
      name: "Abigail Turner",
      subject: "Newsletter Subscription",
      message:
        "You’ve been subscribed to our monthly newsletter. Stay tuned for updates!",
      time: "7 weeks ago",
      files: [],
    },
    {
      id: 28,
      name: "Benjamin Carter",
      subject: "Internship Application",
      message:
        "I’ve submitted my application for the internship. Looking forward to your response.",
      time: "8 weeks ago",
      files: [{ name: "resume.pdf", size: "1MB" }],
    },
    {
      id: 29,
      name: "Charlotte Brooks",
      subject: "Product Feedback",
      message:
        "I recently purchased your product and have some feedback. Hope you find it useful!",
      time: "8 weeks ago",
      files: [],
    },
    {
      id: 30,
      name: "Daniel Evans",
      subject: "Training Session Reminder",
      message:
        "Reminder: Your training session is scheduled for next week. See attached schedule.",
      time: "2 months ago",
      files: [{ name: "training-schedule.pdf", size: "500KB" }],
    },
    {
      id: 31,
      name: "Emily Watson",
      subject: "Part-Time Job Inquiry",
      message:
        "Are there any part-time opportunities available at your company?",
      time: "2 months ago",
      files: [],
    },
    {
      id: 32,
      name: "Felix Martin",
      subject: "Investment Proposal",
      message:
        "I’d love to discuss a potential investment opportunity. Let me know when you’re free.",
      time: "2 months ago",
      files: [{ name: "proposal.pdf", size: "3MB" }],
    },
    {
      id: 33,
      name: "Gabriella Adams",
      subject: "Refund Request",
      message:
        "I’d like to request a refund for my recent purchase. Please see attached details.",
      time: "2 months ago",
      files: [{ name: "refund-request.pdf", size: "700KB" }],
    },
    {
      id: 34,
      name: "Harrison Lee",
      subject: "Networking Event Invitation",
      message:
        "Join us for an exclusive networking event this month. Details attached.",
      time: "2 months ago",
      files: [{ name: "event-invite.pdf", size: "1MB" }],
    },
    {
      id: 35,
      name: "Ivy Nelson",
      subject: "Bug Fix Confirmation",
      message:
        "The reported bug has been fixed. Let us know if you experience any issues.",
      time: "3 months ago",
      files: [],
    },
    {
      id: 36,
      name: "James Foster",
      subject: "Contract Renewal",
      message:
        "Your contract is due for renewal. Please review the terms and confirm.",
      time: "3 months ago",
      files: [{ name: "renewal-contract.pdf", size: "2MB" }],
    },
    {
      id: 37,
      name: "Kylie Bennett",
      subject: "Webinar Registration",
      message:
        "Thank you for registering for our upcoming webinar. See details attached.",
      time: "3 months ago",
      files: [{ name: "webinar-details.pdf", size: "1.5MB" }],
    },
    {
      id: 38,
      name: "Liam Walker",
      subject: "Supplier Agreement",
      message:
        "Please find the updated supplier agreement attached. Let us know your feedback.",
      time: "3 months ago",
      files: [{ name: "supplier-agreement.pdf", size: "2.5MB" }],
    },
    {
      id: 39,
      name: "Megan Diaz",
      subject: "Conference Call Notes",
      message:
        "Here are the notes from our last conference call. Let me know if anything needs updating.",
      time: "3 months ago",
      files: [{ name: "call-notes.pdf", size: "800KB" }],
    },
    {
      id: 40,
      name: "Noah Richardson",
      subject: "Job Offer",
      message:
        "Congratulations! We’re pleased to offer you the position. Please see attached details.",
      time: "4 months ago",
      files: [{ name: "job-offer.pdf", size: "1.2MB" }],
    },
  ];

  //get emails

  let emailsPerPage = 15; // Number of emails shown per page.
  let currentPage = 1;
  let filteredEmails = [...emails]; // Filtered email list.

  /* ------------- Function to display emails with pagination. ------------ */
  function showMails() {
    $(".email-send-list").empty();
    let start = (currentPage - 1) * emailsPerPage;
    let paginatedEmails = filteredEmails.slice(start, start + emailsPerPage);

    paginatedEmails.forEach((email) => {
      const name = email.name || "";
      const initials = name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();
      const hasFiles = email.files.length > 0;
      const firstLetter = initials[0] || "A";
      const colors = colorMap[firstLetter] || { bg: "#000", text: "#fff" };

      const emailItem = `
            <div class="border-0 shadow-none email-item d-flex align-items-center gap-1 d-lg-none py-3 px-md-4" data-id="${
              email.id
            }" >
                            <div class="d-flex flex-column gap-4 align-items-center">
                                <input type="checkbox" class="form-check-input me-2">
                                <i class="bx bx-star me-2" style="color: #aaa; font-size: 18px;"></i>
                            </div>

                            <div class="d-flex flex-column gap-1 flex-1">
                                <div class="d-flex">
                                    <div class="d-flex align-items-center flex-1">
                                        <div class="d-flex align-items-center justify-content-center rounded-circle"
                                            style="height: 36px; width: 36px; background-color: ${
                                              colors.bg
                                            }; color: ${colors.text};">
                                            <span class="email-initial">${initials}</span>
                                        </div>

                                        <span class="email__name mb-0 ms-2  text-truncate"
                                            style="color: var(--foreground)">${
                                              email.name
                                            }</span>

                                    </div>

                                    <div class="">
                                        <small class="email__time">10:34 AM</small>
                                    </div>

                                </div>
                                <div class="email-content flex-grow-1">
                                    <p class="email-subject mb-1">${
                                      email.subject
                                    }</p>
                                    <small class="email-message text-muted text-truncate mb-0">${
                                      email.message
                                    }</small>
                                </div>
                            </div>

                        </div>
                        
          <div class="  d-none  email-item d-lg-flex align-items-center p-2 border-bottom" data-id="${
            email.id
          }">
                <div class="d-flex align-items-center me-3">
                    <input type="checkbox" class="form-check-input me-2">
                    <i class="bx bx-star me-2" style="color: #aaa; font-size: 18px;"></i>
                </div>
                <div class="d-flex align-items-center me-3 email__user">
                    <div class="d-flex align-items-center justify-content-center rounded-circle"
                        style="height: 36px; width: 36px; background-color: ${
                          colors.bg
                        }; color: ${colors.text}; font-weight: bold;">
                        <span class="email-initial">${initials}</span>
                    </div>
                    <span class="email__name mb-0 ms-2" style="color: var(--foreground)">${
                      email.name
                    }</span>
                </div>
                <div class="email-content flex-grow-1 d-flex flex-row justify-content-between gap-2">
                  <div class="">
                    <p class="email-subject mb-1">${email.subject}</p>
                    <p class="email-message text-truncate mb-0">${
                      email.message
                    }</p>
                  </div>
                  ${
                    hasFiles
                      ? `<i class='bx bx-paperclip bx-rotate-90 me-3' style="color: #aaa;"></i>`
                      : ""
                  }
                <div class="email-actions align-items-center column-gap-2">
                    <button class="border-0 bg-transparent"><i class='bx bx-box'></i></button>
                    <button class="border-0 bg-transparent"><i class='bx bx-trash'></i></button>
                </div>

                </div>
              
            </div>
            `;
      $(".email-send-list").append(emailItem);
      // </a>
    });

    updatePaginationButtons();
  }

  // attachment
  function getFilePreview(file) {
    const fileExtension = file.name.split(".").pop().toLowerCase();

    if (["jpg", "jpeg", "png", "gif"].includes(fileExtension)) {
      return `<img src="/path/to/uploads/${file.name}" alt="${file.name}" class="preview-img">`;
    } else if (fileExtension === "pdf") {
      return `<div class="pdf-preview">
                <img src="/assets/images/pdf_image.png" alt="PDF">
              </div>`;
    } else {
      return `<div class="file-preview">
                <img src="/assets/images/doc_image.png" alt="DOC">
              </div>`;
    }
  }

  //Pagination
  function updatePaginationButtons() {
    $("#pagination-info").text(
      ` ${currentPage} / ${Math.ceil(filteredEmails.length / emailsPerPage)}`
    );
    $("#current-page").text(` ${currentPage}`);
  }

  /* ----------------- Modify the number of emails displayed per page. ----------------- */
  $("#emails-per-page").on("change", function () {
    emailsPerPage = parseInt($(this).val());
    currentPage = 1;
    showMails();
  });

  /* -------------------------------- Search bar ------------------------------- */

  $("#search-email").on("input", function () {
    const query = $(this).val().toLowerCase();

    if ($(this).val().trim() !== "") {
      //   clearSearchBtn.show();
      clearSearchBtn.css({
        display: "flex",
        "align-items": "center",
      });
      // Reveal the button.
    } else {
      clearSearchBtn.hide(); // Conceal the button.
    }

    filteredEmails = emails.filter(
      (email) =>
        email.name.toLowerCase().includes(query) ||
        email.subject.toLowerCase().includes(query)
    );

    currentPage = 1;
    showMails();
  });

  /* ------------------------------ clear search ------------------------------ */
  const clearSearchBtn = $("#clear-search-btn");

  clearSearchBtn.on("click", function () {
    $("#search-email").val("");
    clearSearchBtn.hide();
    $("#search-email").trigger("input"); // Trigger the input event to update the search.
  });

  /* ----------------- Filter emails that have attachments. ----------------- */
  $("#filter-attachments").on("change", function () {
    if ($(this).is(":checked")) {
      filteredEmails = emails.filter((email) => email.files.length > 0);
    } else {
      filteredEmails = [...emails];
    }
    currentPage = 1;
    showMails();
  });

  /* -------------------------- Pagination Boutons ------------------------- */
  $("#prev-page").on("click", function () {
    if (currentPage > 1) {
      currentPage--;
      showMails();
    }
  });

  $("#next-page").on("click", function () {
    if (currentPage < Math.ceil(filteredEmails.length / emailsPerPage)) {
      currentPage++;
      showMails();
    }
  });

  /* ----------------------------- On email Click event ----------------------------- */

  $(document).on("click", ".email-item", function () {
    const emailId = $(this).data("id");

    // Redirect to message.html, passing a parameter to identify the email.
    window.location.href = `/message.html?emailId=${emailId}`;
  });


  /* -------------------------- Initializing the emails. -------------------------- */
  showMails();
});

/* ------------------------------ Top Bar menu ------------------------------ */


// Show more menus
$(document).on("click", "#bar__more__btn", function (event) {
  event.stopPropagation();
  $(".header__detail").removeClass("show__header__detail");
  $(".bar__more__menu").toggleClass("show__more__menu");
});

$(document).on("click", function () {
  $(".bar__more__menu").removeClass("show__more__menu");
});

// Prevent closing when clicking inside .header__detail.
$(document).on("click", ".bar__more__menu", function (event) {
  event.stopPropagation();
});
