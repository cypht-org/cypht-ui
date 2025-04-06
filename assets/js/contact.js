/* ---------------------------------- Popup --------------------------------- */
$(document).on("click", "#btn_popup", function (event) {
  event.stopPropagation();
  $(".popup__card").toggleClass("show__popup");
  $(".icon").toggleClass("rotate-icon");
});

$(document).on("click", function () {
  $(".popup__card").removeClass("show__popup");
  $(".icon").removeClass("rotate-icon");
});

// Block closing when clicking inside .header__detail.
$(document).on("click", ".show__popup", function (event) {
  event.stopPropagation();
});

//
document.addEventListener("DOMContentLoaded", function () {
  const popupBody = document.querySelector(".popup__body");
  const checkboxes = popupBody.querySelectorAll(".form-check-input");
  const filterValue = document.getElementById("filter_value");

  const popupCard = document.querySelector(".popup__card");
  const icon = document.querySelector(".icon");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      checkboxes.forEach((cb) => {
        if (cb !== checkbox) cb.checked = false;
      });

      filterValue.textContent = checkbox.checked
        ? checkbox.nextElementSibling.textContent
        : "Filter by";

      popupCard.classList.remove("show__popup");
      icon.classList.remove("rotate-icon");
    });
  });
});

/* -------------------------------- Contacts -------------------------------- */
$(document).ready(function () {
  /* --------------------------------- Colors --------------------------------- */
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

  /* ------------------------------- Data Contacts ------------------------------- */
  const contacts = [
    {
      id: 1,
      name: "Gal",
      last_name: "Shir",
      emails: ["gal.shir@example.com", "gal.work@example.com"],
      phones: ["+1 123 456 7890", "+1 123 000 7890"],
      address: ["123 Main St, Cityville, CA"],
      enterprise: {
        name: "Company A",
        post: "Product Manager",
        service: "Development",
        location: "USA",
      },
      others: {
        partner: "Company B",
        birth_day: new Date("1990-05-01"),
        celebration: new Date("2023-12-25"),
        web_site: "https://www.galshir.com",
      },
      notes: "Important client, follow up on project next week.",
    },
    {
      id: 2,
      name: "Kenny",
      last_name: "Coil",
      emails: ["kenny.coil@example.com", "kenny.personal@example.com"],
      phones: ["+1 987 654 3210"],
      address: ["456 Elm St, Townsville, NY"],
      enterprise: {
        name: "Company X",
        post: "Software Engineer",
        service: "Engineering",
        location: "UK",
      },
      others: {
        partner: "Company Y",
        birth_day: new Date("1985-08-15"),
        celebration: new Date("2023-11-30"),
        web_site: "https://www.kennycoil.com",
      },
      notes: "Needs to be contacted about the new software release.",
    },
    {
      id: 3,
      name: "Zhenya",
      last_name: "Rynzhuk",
      emails: ["zhenya.rynzhuk@example.com"],
      phones: ["+1 555 666 7777", "+1 555 999 7777"],
      address: ["789 Oak St, Villagetown, TX"],
      enterprise: {
        name: "Tech Innovators",
        post: "UX Designer",
        service: "Design",
        location: "Canada",
      },
      others: {
        partner: "Creative Labs",
        birth_day: new Date("1992-02-20"),
        celebration: new Date("2023-10-10"),
        web_site: "https://www.zhenyad.com",
      },
      notes: "Check the design feedback from the last project.",
    },
    {
      id: 4,
      name: "Laura",
      last_name: "Green",
      emails: ["laura.green@example.com"],
      phones: ["+1 333 444 5555"],
      address: ["1010 Maple Ave, Springfield, IL"],
      enterprise: {
        name: "DesignWorks",
        post: "Creative Director",
        service: "Creative",
        location: "USA",
      },
      others: {
        partner: "BrandTech",
        birth_day: new Date("1988-07-22"),
        celebration: new Date("2023-09-14"),
        web_site: "https://www.lauragreen.com",
      },
      notes: "Follow up on creative designs for next campaign.",
    },
    {
      id: 5,
      name: "John",
      last_name: "Doe",
      emails: ["john.doe@example.com", "john.doe.work@example.com"],
      phones: ["+1 666 777 8888"],
      address: ["2020 Birch Rd, Metropolis, NY"],
      enterprise: {
        name: "TechCorp",
        post: "CTO",
        service: "Technology",
        location: "Germany",
      },
      others: {
        partner: "InnoLabs",
        birth_day: new Date("1980-03-12"),
        celebration: new Date("2023-06-15"),
        web_site: "https://www.johndoe.com",
      },
      notes: "Schedule meeting to discuss upcoming technology roadmap.",
    },
    {
      id: 6,
      name: "Maya",
      last_name: "Klein",
      emails: ["maya.klein@example.com"],
      phones: ["+1 111 222 3333"],
      address: ["3030 Pine St, Oakwood, CA"],
      enterprise: {
        name: "MediTech",
        post: "Product Designer",
        service: "Product",
        location: "Australia",
      },
      others: {
        partner: "HealthPartners",
        birth_day: new Date("1995-11-08"),
        celebration: new Date("2023-05-01"),
        web_site: "https://www.mayaklein.com",
      },
      notes: "Check on upcoming product features.",
    },
    {
      id: 7,
      name: "Tom",
      last_name: "Sullivan",
      emails: ["tom.sullivan@example.com"],
      phones: ["+1 444 555 6666"],
      address: ["4040 Cedar Blvd, Rivertown, TX"],
      enterprise: {
        name: "GlobalTech",
        post: "Business Analyst",
        service: "Strategy",
        location: "India",
      },
      others: {
        partner: "Consulting Partners",
        birth_day: new Date("1993-09-17"),
        celebration: new Date("2023-07-04"),
        web_site: "https://www.tomsullivan.com",
      },
      notes: "Review business strategies for Q3.",
    },
    {
      id: 8,
      name: "Sophia",
      last_name: "Johnson",
      emails: ["sophia.johnson@example.com", "sophia.work@example.com"],
      phones: ["+1 777 888 9999"],
      address: ["5050 Redwood St, Lakeside, FL"],
      enterprise: {
        name: "Innovative Solutions",
        function: "Marketing Lead",
        service: "Marketing",
        location: "UK",
      },
      others: {
        partner: "MarketTech",
        birth_day: new Date("1990-04-25"),
        celebration: new Date("2023-08-20"),
        web_site: "https://www.sophiajohnson.com",
      },
      notes: "Meeting scheduled for campaign planning.",
    },
    {
      id: 9,
      name: "Alice",
      last_name: "Johnson",
      emails: ["alice.johnson@example.com"],
      phones: ["+1 987 654 3210"],
      address: ["456 Elm St, Townsville, TX"],
      enterprise: {
        name: "Company C",
        post: "Marketing Director",
        service: "Sales",
        location: "Canada",
      },
      others: {
        partner: "Company D",
        birth_day: new Date("1985-08-15"),
        celebration: new Date("2023-08-15"),
        web_site: "https://www.alicejohnson.com",
      },
      notes: "Focus on increasing sales in the second quarter.",
    },
    {
      id: 10,
      name: "Bob",
      last_name: "Brown",
      emails: ["bob.brown@example.com"],
      phones: ["+1 321 987 6543"],
      address: ["789 Oak St, Hilltop, NY"],
      enterprise: {
        name: "Company E",
        post: "CTO",
        service: "IT",
        location: "UK",
      },
      others: {
        partner: "Company F",
        birth_day: new Date("1978-10-10"),
        celebration: new Date("2023-10-10"),
        web_site: "https://www.bobbrown.com",
      },
      notes: "Oversee IT department and cloud infrastructure.",
    },
  ];

  /* ------------------------------- Show Emails. ------------------------------- */
  function show_contacts() {
    $("#contact-list").empty();
    contacts.forEach((contact) => {
      const initials = `${contact.name} ${contact.last_name}`
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();

      const firstLetter = initials[0] || "A"; // Default to 'A' if the name is empty.
      const colors = colorMap[firstLetter] || { bg: "#000", text: "#fff" };

      const contact_item = `
    <div class="contact__card contact__card__hover p-0 py-2" data-id="${
      contact.id
    }">
        <div class="d-flex flex-column justify-content-between item__left">
            <!-- Initiale du contact (Avatar) -->
           

            <div class="contact-avatar-wrapper">
                <!-- Avatar (Visible par défaut) -->
                <div class="contact-avatar d-flex align-items-center justify-content-center rounded-circle fw-semibold contact_profile"
                    style=" background-color: ${colors.bg}; color: ${
        colors.text
      };">
                    <i class='bx bx-user' style="font-size: 1.2rem"></i>
                </div>
                <!-- Checkbox (Cachée par défaut) -->
                <div class="contact-checkbox align-items-center justify-content-center rounded-circle fw-semibold">
                    <input type="checkbox" class="form-check-input cursor-pointer">
                </div>
            </div>


        </div>
        <div class="item__right">
            <span class="full__name">${contact.name} ${contact.last_name}</span>
            <span class="__email">${contact?.emails[0] || ""}</span>
        </div>
    </div>
`;

      $("#contact-list").append(contact_item);
    });
  }

  /* ----------------------------- Handling the click event. ----------------------------- */

  $(document).on("click", ".contact__card", function () {
    $(".contact__card").removeClass("contact__card__active");
    $(".contact__card").addClass("contact__card__hover");

    $(this).removeClass("contact__card__hover");
    $(this).addClass("contact__card__active");
  });

  /* ---------------------------- On Select Contact --------------------------- */
  let item_selected = [];

  $(document).on(
    "change",
    ".contact-checkbox input[type='checkbox']",
    function () {
      const contactCard = $(this).closest(".contact__card");
      const contactId = contactCard.data("id");

      if ($(this).prop("checked")) {
        if (!item_selected.includes(contactId)) {
          item_selected.push(contactId);
          contactCard.addClass("select__card");
          // contactCard.removeClass("contact__card__active");
          // contactCard.removeClass("contact__card__hover");
        }

        contactCard.addClass("active");
      } else {
        item_selected = item_selected.filter((id) => id !== contactId);

        contactCard.removeClass("active");
        contactCard.removeClass("select__card");
        // contactCard.addClass("contact__card__hover");
      }

      console.log(item_selected);
    }
  );

  /* ------------------------------ Initialisation ------------------------------ */
  show_contacts();
  $("#contact-total").text(contacts.length);
});

//
function open_offcanvas() {
  let selected_type = document.querySelector(
    'input[name="type_contact"]:checked'
  ).value;

  if (selected_type === "ldap") {
    $("#ldap-contact").offcanvas("show");
  } else if (selected_type === "local") {
    $("#local-contact").offcanvas("show");
  }
}

$("#address-list").click(function () {
  $(".dropdown-menu-custom").toggleClass("show");
  $(".icon").toggleClass("rotate-icon");
});

$(document).click(function (e) {
  if (!$(e.target).closest(".dropdown-container").length) {
    $(".dropdown-menu-custom").removeClass("show");
    $(".icon").removeClass("rotate-icon");
  }
});

/* ------------------------------ Contact Menu ------------------------------ */
document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".contact__menu a");

  menuItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();

      menuItems.forEach((el) => el.classList.remove("contact__menu__active"));

      this.classList.add("contact__menu__active");
    });
  });
});
