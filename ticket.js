const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const filmSelect = document.getElementById("film");
const ticketsInput = document.getElementById("tickets");
const previewPrice = document.getElementById("previewPrice");

function updateTotal() {
  const selectedOption = filmSelect.options[filmSelect.selectedIndex];
  const price = parseInt(selectedOption.getAttribute("data-price")) || 0;
  const tickets = parseInt(ticketsInput.value) || 0;
  const total = price * tickets;
  previewPrice.textContent = `Total Price: Rp ${total.toLocaleString("id-ID")}`;
}

// Update price when film or ticket number changes
filmSelect.addEventListener("change", updateTotal);
ticketsInput.addEventListener("input", updateTotal);

function validateForm() {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const film = filmSelect.value;
  const tickets = parseInt(ticketsInput.value);

  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
  let valid = true;

  if (name === "") {
    document.getElementById("nameError").textContent = "Nama tidak boleh kosong.";
    valid = false;
  }

  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
  document.getElementById("emailError").textContent = "Format email tidak benar.";
  valid = false;
}

  if (film === "") {
    document.getElementById("filmError").textContent = "Pilih salah satu film.";
    valid = false;
  }

  if (isNaN(tickets) || tickets < 1 || tickets > 10) {
    document.getElementById("ticketsError").textContent =
      "Jumlah tiket minimal 1 dan maksimal 10.";
    valid = false;
  }

  if (valid) {
    alert("Successfully booked !");
    document.getElementById("ticketForm").reset();
    previewPrice.textContent = "Total harga: Rp 0";
  }
}

// Show default total immediately
updateTotal();
