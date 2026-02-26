document.getElementById("lotForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const raw = document.getElementById("lotInput").value || "";
  const code = raw.trim().toUpperCase();

  if (code === "AZU") window.location.href = "lot-azu.html";
  else if (code === "REL") window.location.href = "lot-rel.html";
  else alert("Lot not found. Please enter AZU or REL.");
});
