const accounts = [
  //Generate Array of  id:number, name:string, email: exemple@gmail.com,
  {
    id: "1",
    designation: "Compte A",
    email: "compte_a@example.com",
  },
  {
    id: "2",
    designation: "Compte B",
    email: "compte_b@example.com",
  },
];

const folders = [
  {
    id: "10",
    type: "folder",
    designation: "Documents",
    parent_id: null,
    account_id: "1",
  },
  {
    id: "11",
    type: "folder",
    designation: "Projets",
    parent_id: "10",
    account_id: "1",
  },
  {
    id: "12",
    type: "folder",
    designation: "Rapports",
    parent_id: "10",
    account_id: "1",
  },
  {
    id: "13",
    type: "folder",
    designation: "Images",
    parent_id: null,
    account_id: "1",
  },
  {
    id: "14",
    type: "folder",
    designation: "Photos de Vacances",
    parent_id: "13",
    account_id: "1",
  },
  {
    id: "15",
    type: "folder",
    designation: "Archives",
    parent_id: "11",
    account_id: "1",
  },
  {
    id: "16",
    type: "folder",
    designation: "Projets 2025",
    parent_id: "11",
    account_id: "1",
  },
  {
    id: "17",
    type: "folder",
    designation: "Musique",
    parent_id: null,
    account_id: "2",
  },
  {
    id: "18",
    type: "folder",
    designation: "Jazz",
    parent_id: "17",
    account_id: "2",
  },
  {
    id: "19",
    type: "folder",
    designation: "Rock",
    parent_id: "17",
    account_id: "2",
  },
  {
    id: "20",
    type: "folder",
    designation: "Musique Classique",
    parent_id: "17",
    account_id: "2",
  },
  {
    id: "21",
    type: "folder",
    designation: "Cours",
    parent_id: null,
    account_id: "2",
  },
  {
    id: "22",
    type: "folder",
    designation: "Mathématiques",
    parent_id: "21",
    account_id: "2",
  },
  {
    id: "23",
    type: "folder",
    designation: "Physique",
    parent_id: "21",
    account_id: "2",
  },
  {
    id: "24",
    type: "folder",
    designation: "Informatique",
    parent_id: "21",
    account_id: "2",
  },
  {
    id: "25",
    type: "folder",
    designation: "Finance",
    parent_id: null,
    account_id: "1",
  },
  {
    id: "26",
    type: "folder",
    designation: "Comptabilité",
    parent_id: "25",
    account_id: "1",
  },
  {
    id: "27",
    type: "folder",
    designation: "Banque",
    parent_id: "25",
    account_id: "1",
  },
  {
    id: "28",
    type: "folder",
    designation: "Investissements",
    parent_id: "25",
    account_id: "1",
  },
  {
    id: "29",
    type: "folder",
    designation: "Recherche",
    parent_id: null,
    account_id: "2",
  },
  {
    id: "30",
    type: "folder",
    designation: "Technologies Emergentes",
    parent_id: "29",
    account_id: "2",
  },
  {
    id: "31",
    type: "folder",
    designation: "Intelligence Artificielle",
    parent_id: "29",
    account_id: "2",
  },
  {
    id: "32",
    type: "folder",
    designation: "Blockchain",
    parent_id: "29",
    account_id: "2",
  },
  {
    id: "33",
    type: "folder",
    designation: "Biotechnologie",
    parent_id: "29",
    account_id: "2",
  },
  {
    id: "34",
    type: "folder",
    designation: "Littérature",
    parent_id: null,
    account_id: "3",
  },
  {
    id: "35",
    type: "folder",
    designation: "Romans",
    parent_id: "34",
    account_id: "3",
  },
  {
    id: "36",
    type: "folder",
    designation: "Poésie",
    parent_id: "34",
    account_id: "3",
  },
  {
    id: "37",
    type: "folder",
    designation: "Philosophie",
    parent_id: "34",
    account_id: "3",
  },
  {
    id: "38",
    type: "folder",
    designation: "Science",
    parent_id: null,
    account_id: "3",
  },
  {
    id: "39",
    type: "folder",
    designation: "Astronomie",
    parent_id: "38",
    account_id: "3",
  },
  {
    id: "40",
    type: "folder",
    designation: "Chimie",
    parent_id: "38",
    account_id: "3",
  },
  {
    id: "41",
    type: "folder",
    designation: "Biologie",
    parent_id: "38",
    account_id: "3",
  },
  {
    id: "42",
    type: "folder",
    designation: "Médecine",
    parent_id: "38",
    account_id: "3",
  },
  {
    id: "43",
    type: "folder",
    designation: "Voyages",
    parent_id: null,
    account_id: "4",
  },
  {
    id: "44",
    type: "folder",
    designation: "Europe",
    parent_id: "43",
    account_id: "4",
  },
  {
    id: "45",
    type: "folder",
    designation: "Asie",
    parent_id: "43",
    account_id: "4",
  },
  {
    id: "46",
    type: "folder",
    designation: "Afrique",
    parent_id: "43",
    account_id: "4",
  },
  {
    id: "48",
    type: "folder",
    designation: "Amérique",
    parent_id: "43",
    account_id: "4",
  },
  {
    id: "49",
    type: "folder",
    designation: "Jeans",
    parent_id: "43",
    account_id: "4",
  },
  {
    id: "50",
    type: "folder",
    designation: "Jeans 1",
    parent_id: "43",
    account_id: "4",
  },
  {
    id: "51",
    type: "folder",
    designation: "Jeans 2",
    parent_id: "43",
    account_id: "4",
  },
];

$(document).ready(function () {
  // update folder
  $(".update__btn").click(function () {
    $("#update-container").toggleClass("d-none");
    $("#delete-container").addClass("d-none");
  });

  $("#btn-cancel-update").click(function () {
    $("#update-container").addClass("d-none");
  });

  // delete folder
  $(".delete__btn").click(function () {
    $("#delete-container").toggleClass("d-none");
    $("#update-container").addClass("d-none");
  });

  $("#btn-cancel-delete").click(function () {
    $("#delete-container").addClass("d-none");
  });

  // Reset to the initial state when the modal is closed.
  $("#offcanvasRight").on("hidden.bs.offcanvas", function () {
    $("#delete-container").addClass("d-none");
    $("#update-container").addClass("d-none");
  });
});

function buildFolderTree(folders, parentId = null) {
  const filteredFolders = folders.filter(
    (folder) => folder.parent_id === parentId && folder.type === "folder"
  );
  let html = "";

  filteredFolders.forEach((folder) => {
    html += `
      <div class="folder">
        <span class="mb-1 folder__title"><i class='bx bx-folder-open' ></i>${
          folder.designation
        }</span>
        <div>${buildFolderTree(folders, folder.id)}</div>
      </div>
    `;
  });

  return html;
}

document.getElementById("folder-list").innerHTML = buildFolderTree(folders);
