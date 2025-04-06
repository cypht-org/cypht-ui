$(document).ready(function () {
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

  const contacts = [
    { full_name: "Steven Ngesera", email: "steven.ngesera@demo.com" },
    { full_name: "Marc Laporte", email: "marclaporte@demo.com" },
    { full_name: "Yannick Nsenga", email: "yannick.nsenga@demo.com" },
    { full_name: "Josaphat Imani", email: "josaphat.imani@demo.com" },
    { full_name: "Jean Luck", email: "jeanluck.345@gmail.com" },
    { full_name: "Sophie Martin", email: "sophie.martin@example.com" },
    { full_name: "Alex Dupont", email: "alex.dupont@example.com" },
    { full_name: "Emma Laurent", email: "emma.laurent@example.com" },
    { full_name: "Lucas Bernard", email: "lucas.bernard@example.com" },
    { full_name: "Camille Lefevre", email: "camille.lefevre@example.com" },
    { full_name: "Thomas Moreau", email: "thomas.moreau@example.com" },
  ];

  let to_emails = [];

  function updateSuggestions() {
    const query = $("#to-input").val().toLowerCase().trim();
    const suggestions = contacts.filter(
      (c) =>
        c.full_name.toLowerCase().includes(query) ||
        c.email.toLowerCase().includes(query)
    );

    const emailList = $("#email_list");
    const noResult = $("#no-result");
    const suggestedEmail = $("#suggested-email");

    emailList.empty();

    if (query === "") {
      emailList.hide();
      noResult.hide();
      return;
    }

    if (suggestions.length > 0) {
      suggestions.forEach((contact) => {
        const initials = `${contact.full_name}`
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase();

        const firstLetter = initials[0] || "A"; // Par défaut "A" si le nom est vide
        const colors = colorMap[firstLetter] || { bg: "#000", text: "#fff" };

        emailList.append(
          `<div class="compo-email-item gap-2" data-email="${contact.email}">
             <div>
               <div class="avatar d-flex align-items-center justify-content-center rounded-circle" style="height: 38px; width: 38px; background-color: ${colors.bg}; color: ${colors.text};">
                 <i class='bx bx-user' style="font-size: 1.2rem"></i>
               </div>
             </div>

             <div class="d-flex flex-column">
              <span class="compo_name">${contact.full_name}</span>
              <span class="compo_email">${contact.email}</span>
             </div>
          </div>
          `
        );
      });
      emailList.show();
      noResult.hide();
    } else {
      emailList.hide();
      suggestedEmail.text(query);
      noResult.show();
    }
  }

  function updateContainerVisibility() {
    if (to_emails.length > 0) {
      $("#to-container").css("display", "flex");
    } else {
      $("#to-container").css("display", "none");
    }
  }

  function addEmail(email) {
    if (!to_emails.includes(email)) {
      to_emails.push(email);
      $("#to-container").append(
        `<span class="d-flex gap-1 align-items-center email-tag">
         <span class="">
         <i class="bx bx-user"></i></span> ${email} <span class="remove-email"><i class="bi bi-x close_icon"></i></span></span>
        `
      );
    }
    $("#to-input").val("");
    $("#email_list").hide();
    $("#no-result").hide();
    updateContainerVisibility();
  }

  // Filter the list while typing
  $("#to-input").on("input", updateSuggestions);

  // Add an email from the suggested list.
  $(document).on("click", ".compo-email-item", function () {
    addEmail($(this).data("email"));
  });

  // Add an email via the 'Add' div.
  $("#no-result").on("click", function () {
    addEmail($("#suggested-email").text());
  });

  // Add an email when the input is valid and the Enter key is pressed.
  $("#to-input").keypress(function (e) {
    if (e.which === 13) {
      let email = $(this).val().trim();
      if (email !== "") addEmail(email);
    }
  });

  // Remove email from list
  $(document).on("click", ".remove-email", function () {
    let email = $(this).parent().attr("data-email");

    // Delete an element from the array without knowing its position(index).
    to_emails = to_emails.filter((e) => e !== email);

    $(this).parent().remove();
    updateContainerVisibility();
  });

  // Hide the list if a click occurs outside of it
  $(document).click(function (e) {
    if (!$(e.target).closest(".email_list_container").length) {
      $("#email_list").hide();

      // Make sure #no-result exists before hiding it.
      if (!$("#no-result").length) {
        $("#no-result").hide();
      }

      if (to_emails.length < 1) $("#no-result").hide();
    }
  });

  // Hide the 'to-container' element when the page loads.
  updateContainerVisibility();
});

// #3

/* ------------------------------- Attachment ------------------------------- */

document
  .getElementById("attachment_btn")
  .addEventListener("click", function () {
    document.getElementById("file_input").click();
  });

// Determine file type and display the corresponding icon.
function getFileIcon(fileType) {
  if (fileType.includes("pdf")) return "bi bi-file-earmark-pdf-fill pdf_file";
  if (fileType.includes("image"))
    return "bi bi-file-earmark-richtext-fill image_file";
  if (fileType.includes("audio"))
    return "bi bi-file-earmark-music-fill audio_file";
  if (fileType.includes("video")) return "bi bi-file-earmark-play video_file";
  if (fileType.includes("zip") || fileType.includes("rar"))
    return "bi bi-file-earmark-zip-fill zip_file";
  if (fileType.includes("spreadsheet") || fileType.includes("excel"))
    return "bi bi-file-earmark-spreadsheet-fill table_file";
  if (fileType.includes("text") || fileType.includes("plain"))
    return "bi bi-file-earmark-text-fill text_file";
  return "bi bi-file-earmark-fill default_file";
}

// Display the selected files and refresh the count.
document
  .getElementById("file_input")
  .addEventListener("change", function (event) {
    const fileList = document.getElementById("file_list");
    const attachmentContainer = document.getElementById("attachment_container");
    const fileCount = document.getElementById("file_count");

    fileList.innerHTML = "";
    const files = event.target.files;

    if (files.length > 0) {
      attachmentContainer.style.display = "flex";
      attachmentContainer.classList.add("show_attachment"); // Add the 'show_attachment' class to the element.
      fileCount.textContent = files.length;

      for (const file of files) {
        const listItem = document.createElement("li");
        listItem.className = "d-flex gap-2 mb-1";

        const fileIcon = getFileIcon(file.type);
        const fileSize = (file.size / (1024 * 1024)).toFixed(2); // Convert into MB.

        listItem.innerHTML = `
                <div class="icon">
                    <i class="${fileIcon}"></i>
                </div>
                <div class="d-flex flex-column">
                    <span class="title fw-semibold">${file.name}</span>
                    <span class="size fw-semibold">${fileSize} Mo</span>
                </div>
            `;

        fileList.appendChild(listItem);
      }
    } else {
      attachmentContainer.style.display = "none";
      attachmentContainer.classList.remove("show_attachment"); //Remove the 'show_attachment' class from the element."
      fileCount.textContent = "0";
    }
  });
