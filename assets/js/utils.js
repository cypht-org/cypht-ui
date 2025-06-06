/* --------------------------------- SideBar -------------------------------- */

document.querySelectorAll("#sidebar-menu .menu-link").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    // Icons reinitilization
    document.querySelectorAll("#sidebar-menu .menu-link i").forEach((icon) => {
      icon.classList.replace("bi-grid-fill", "bi-grid");
      icon.classList.replace("bi-folder-fill", "bi-folder");
      icon.classList.replace("bi-people-fill", "bi-people");
      icon.classList.replace(
        "bi-exclamation-diamond-fill",
        "bi-exclamation-diamond"
      );
      icon.classList.replace("bi-gear-fill", "bi-gear");

      icon.classList.replace("bi-diagram-2-fill", "bi-diagram-2");
      icon.classList.replace("bxs-card", "bx-card");
    });

    // Add the 'active' class to the clicked link and update the icon.
    document.querySelectorAll("#sidebar-menu .menu-link").forEach((item) => {
      item.classList.remove("sidebar__active");
    });
    this.classList.add("sidebar__active");

    let icon = this.querySelector("i");

    // Swap the icon depending on the page.
    if (icon.classList.contains("bi-grid"))
      icon.classList.replace("bi-grid", "bi-grid-fill");
    if (icon.classList.contains("bi-folder"))
      icon.classList.replace("bi-folder", "bi-folder-fill");
    if (icon.classList.contains("bi-people"))
      icon.classList.replace("bi-people", "bi-people-fill");
    if (icon.classList.contains("bi-exclamation-diamond"))
      icon.classList.replace(
        "bi-exclamation-diamond",
        "bi-exclamation-diamond-fill"
      );
    if (icon.classList.contains("bi-gear"))
      icon.classList.replace("bi-gear", "bi-gear-fill");

    if (icon.classList.contains("bi-diagram-2"))
      icon.classList.replace("bi-diagram-2", "bi-diagram-2-fill");
    if (icon.classList.contains("bx-card"))
      icon.classList.replace("bx-card", "bxs-card");

    // Redirect to the page.
    window.location.href = this.getAttribute("href");
  });
});

$(document).on("click", "#setting-btn", function (event) {
  event.stopPropagation();
  $("#setting-menu").toggleClass("show__setting");
});

/* ------------------------------- CLOSE MODEL ------------------------------ */
$(document).on("click", function () {
  $(".drop_down_list").removeClass("active__drop__menu");
  $(".limit_list").removeClass("active__drop__menu");
  $("#setting-menu").removeClass("show__setting");
});

/* --------------------------------- OTHERS --------------------------------- */

$(document).on("click", "#drop-down-btn", function (event) {
  event.stopPropagation();
  $(".drop_down_list").toggleClass("active__drop__menu");
});

$(document).on("click", ".drop_down_list ul li", function () {
  $(".drop_down_list").removeClass("active__drop__menu");

  const selected = document.querySelector("#menu_selected");
  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
    });
  });
});

$(document).on("click", "#limit-popup", function (event) {
  event.stopPropagation();
  $(".limit_list").toggleClass("active__drop__menu");
});

$(document).on("click", ".limit_list ul li", function () {
  $(".limit_list").removeClass("active__drop__menu");

  const selected = document.querySelector("#limit_selected");
  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
    });
  });
});

//
//
$(document).ready(function () {
  // Clicking the 'Open' button adds only the display class.
  $(".compose-btn").click(function () {
    $("#compose-mail").addClass("show__compose_modal");
  });

  // Clicking the 'Close' button removes the display class.
  $("#close_modal_btn").click(function () {
    $("#compose-mail").removeClass("show__compose_modal");
  });

  $(".btn_show_cc").click(function (e) {
    e.preventDefault();
    if ($(".container_cc").hasClass("d-none")) {
      $(".container_cc").removeClass("d-none");
    } else {
      $(".container_cc").addClass("d-none");
    }
  });
  $(".btn_show_bcc").click(function (e) {
    e.preventDefault();
    if ($(".container_bcc").hasClass("d-none")) {
      $(".container_bcc").removeClass("d-none");
    } else {
      $(".container_bcc").addClass("d-none");
    }
  });

  $(".to_email__address_close").click(function (e) {
    e.preventDefault();
    // let closestEmailListItem = $(this).parent();
    let closestEmailListItem = $(this).closest(".email__item");
    closestEmailListItem.addClass("d-none");
  });
});

//
$(document).ready(function () {
    // Open the file manager programmatically.
    // Trigger file manager to open.
  $("#attachment_btn").click(function () {
    $("#fileInput").click();
  });

  $("#fileInput").change(function () {
    //Get the selected files.
    let files = this.files;
    if (files.length > 0) {
      $("#fileName").html("");
      $("#fileName").addClass("file__input");
      for (let file of files) {
        let fileItem = $(`
                  <div class="file-item d-flex align-items-center">
                      <p class="m-0 flex-grow-1"> ${file.name}</p>
                      <button class="remove-file delete__btn btn btn-sm btn-light border-0">
                          <i class="bx bx-x text-danger"></i>
                      </button>
                  </div>
              `);

        $("#fileName").append(fileItem);
      }
    } else {
      $("#fileName").removeClass("file__input");
    }
  });
  $(".remove-file").click(function () {
    $(this).parent().remove();
  });
});

/* ---------------------------------- Popup --------------------------------- */

/* ------------------------------ Compose Email ----------------------------- */
$(document).ready(function () {
  function addEmail(inputField, container) {
    let email = $(inputField).val().trim();
    if (email !== "" && validateEmail(email)) {
      $(container).append(
        `<span class="email-tag">${email} <span class="remove-email">&times;</span></span>`
      );
      $(inputField).val("");
    }
  }

  // E-mail validation function
  function validateEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Managing emails for the 'To' field.
  $("#to-input").keypress(function (e) {
    if (e.which === 13) {
      addEmail("#to-input", "#to-container");
    }
  });

  // Managing emails for the 'CC' field.
  $("#cc-input").keypress(function (e) {
    if (e.which === 13) {
      addEmail("#cc-input", "#cc-emails");
    }
  });

  // Managing emails for the 'CCI' field.
  $("#cci-input").keypress(function (e) {
    if (e.which === 13) {
      addEmail("#cci-input", "#cci-emails");
    }
  });

  // Supprimer un email
  $(document).on("click", ".remove-email", function () {
    $(this).parent().remove();
  });

  // Toggle CC and BCC fields.
  $("#toggle-cc").click(() => $("#cc-container").toggleClass("d-none"));
  $("#toggle-cci").click(() => $("#cci-container").toggleClass("d-none"));
});

/* -------------------------------- Show Mail ------------------------------- */
$(document).ready(function () {
  $("#btn_dropdown").on("click", function (e) {
    e.stopPropagation();
    $(".header_detail").toggleClass("show_header_detail");
  });

  // Hide the menu when clicking outside of it
  $(document).on("click", function () {
    $(".header_detail").removeClass("show_header_detail");
    $(".bar_more_menu").addClass("d-none");
    $(".update-sm-modal").removeClass("show__setting");
  });

  // Block closing if clicked inside.
  $(".header_detail").on("click", function (e) {
    e.stopPropagation();
  });
});

// More Menu
$(document).ready(function () {
  $("#bar_more_btn").on("click", function (e) {
    e.stopPropagation();
    if ($(".bar_more_menu").hasClass("d-none")) {
        $(".bar_more_menu").removeClass("d-none");
    } else {
        $(".bar_more_menu").addClass("d-none");
    }
  });

  // Hide the menu if clicked outside
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".position-relative").length) {
      $(".bar_more_menu").addClass("d-none");
    }
  });
});

// Mobile dialog

$(document).on("click", ".modal-btn", function (event) {
  event.stopPropagation();
  $(".update-sm-modal").toggleClass("show__setting");
});

/* ---------------------------------- TAGS ---------------------------------- */

$(document).ready(function () {
  // Tags's table elements
  let tags = [
    { id: 1, designation: "Tag 1", parent_id: null },
    { id: 2, designation: "Tag 2", parent_id: 1 },
    { id: 3, designation: "Tag 3", parent_id: 1 },
    { id: 4, designation: "Tag 4", parent_id: 2 },
  ];

  const $dropdownMenu = $(".dropdown-menu-custom");
  const $dropdownText = $(".dropdown-origin span");
  const $tagsList = $(".tags-list"); // Element used to show tags.
  let selectedTag = null;

  // Function to render tags inside the dropdown menu.
  function populateTagsDropdown() {
    $dropdownMenu.empty();
    tags.forEach((tag) => {
      $dropdownMenu.append(
        `<a href="#" data-id="${tag.id}" class="dropdown-item">${tag.designation}</a>`
      );
    });
  }

  // Function to show the tags in list format.
  function buildTagTree(tags, parentId = null) {
    let children = tags.filter((tag) => tag.parent_id === parentId);
    if (!children.length) return "";

    // For the root level (parentId = null), skip adding the 'collapsed' class.
    let ul = `<ul class='${parentId !== null ? 'collapsed' : ''}'>`;
    children.forEach((tag) => {
        const hasChildren = tags.some(t => t.parent_id === tag.id);
        const chevronClass = hasChildren ? "bi-chevron-down rotated" : "";
        
        ul += `<li class="mb-2">
                <div class="d-flex align-items-center gap-2 tag-item" data-tag-id="${tag.id}">
                    ${hasChildren ? `<i class="bi ${chevronClass}"></i>` : ''}
                    <i class="bi bi-tags"></i>
                    <span class="tag-node">${tag.designation}</span>
                </div>
                ${buildTagTree(tags, tag.id)}
               </li>`;
    });
    ul += "</ul>";
    return ul;
}

function displayTags() {
    // First, remove any existing event handlers.
    $(document).off('click', '.tag-item');
    $tagsList.html(buildTagTree(tags));    
    $(document).on('click', '.tag-item', function(e) {
        e.stopPropagation();
        const $this = $(this);
        const $chevron = $this.find('.bi-chevron-down');
        const $childrenList = $this.parent().find('> ul');
        
        if ($childrenList.length) {
            $childrenList.toggleClass('collapsed');
            $chevron.toggleClass('rotated');
        }
    });
}

  // Toggle(Open or close) the dropdown menu.
  $(".dropdown-origin").click(function () {
    $(".dropdown-menu-custom").toggleClass("show");
    $(".icon").toggleClass("rotate-icon");
  });

  // Select an option and refresh the display.
  $(document).on("click", ".dropdown-menu-custom a", function (e) {
    e.preventDefault();
    let tagId = $(this).data("id");
    let tagText = $(this).text();
    selectedTag = tags.find((tag) => tag.id === tagId);

    // Refresh the display
    $dropdownText.text(tagText);
    $(".dropdown-menu-custom").removeClass("show");
  });

  // Close the menu when clicking outside.
  $(document).click(function (e) {
    if (!$(e.target).closest(".dropdown-container").length) {
      $(".dropdown-menu-custom").removeClass("show");
      $(".icon").removeClass("rotate-icon");
    }
  });

  function initTagForm() {
    $("#tag_designation").val('');
    selectedTag = null;
    $(".dropdown-origin span").text("Select Parent");
    $("#new-tag-modal").modal('hide');
  }

  $("#tag-save-btn").click(function () {
    let designation = $("#tag_designation").val().trim();
    let parentId = selectedTag ? selectedTag.id : null;

    if (designation) {
      let newTag = {
        id: tags.length + 1,
        designation: designation,
        parent_id: parentId,
      };

      tags.push(newTag);
      populateTagsDropdown();
      displayTags();
      initTagForm();
    } else {
      alert("Veuillez entrer une désignation !");
    }
  });

  populateTagsDropdown();
  displayTags();
});

$(document).on("click", ".tag-node", function () {
  let $subList = $(this).siblings("ul");
  let $parentLi = $(this).parent();

  if ($subList.length) {
    $subList.toggle();
    $parentLi.toggleClass("expanded");
  }
});

// Account Menu Toggle
$(document).ready(function() {
    $(".account_btn").on("click", function(e) {
        e.stopPropagation();
        $("#acounts").addClass("show-block");
    });

    // Close menu when clicking outside
    $(document).on("click", function(e) {
        if (!$(e.target).closest("#acounts").length) {
            $("#acounts").removeClass("show");
        }
    });

    // Prevent menu from closing when clicking inside
    $("#acounts").on("click", function(e) {
        e.stopPropagation();
    });

    $("#close_account_list").on("click", function(e) {
        $("#acounts").removeClass("show-block");
    });
});

/* ------------------------------- Serve List ------------------------------- */
function selectOption(selected) {
  document.querySelectorAll('.option-card').forEach(el => {
      el.classList.remove('active');
      el.querySelector('.radio-circle').classList.remove('active');
  });

  selected.classList.add('active');
  selected.querySelector('.radio-circle').classList.add('active');
}





// 
function updateScrollIndicators() {
  const $scrollBox = $('#pills-tab');
  const scrollLeft = $scrollBox.scrollLeft();
  const scrollWidth = $scrollBox[0].scrollWidth;
  const clientWidth = $scrollBox[0].clientWidth;

  if (scrollLeft > 5) {
    $('.scroll-left-indicator').removeClass('d-none');
  } else {
    $('.scroll-left-indicator').addClass('d-none');
  }

  if (scrollLeft + clientWidth < scrollWidth - 5) {
    $('.scroll-right-indicator').removeClass('d-none');
  } else {
    $('.scroll-right-indicator').addClass('d-none');
  }
}

$('#pills-tab').on('scroll', updateScrollIndicators);
$(window).on('resize', updateScrollIndicators);
$(document).ready(updateScrollIndicators);