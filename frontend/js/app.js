const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const analyzeBtn = document.getElementById("analyzeBtn");
const statusText = document.getElementById("status");
const resultBox = document.getElementById("resultBox");

imageInput.addEventListener("change", () => {
  const file = imageInput.files[0];
  if (!file) return;

  preview.src = URL.createObjectURL(file);
  preview.style.display = "block";
  analyzeBtn.disabled = false;

  statusText.textContent = "Image ready for analysis";
  resultBox.classList.add("hidden");
});

function analyze() {
  const file = imageInput.files[0];
  if (!file) return;

  statusText.textContent = "Analyzing handwriting…";
  analyzeBtn.disabled = true;

  const formData = new FormData();
  formData.append("image", file);

  fetch("http://127.0.0.1:5000/predict", {
    method: "POST",
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("name").textContent = data.name;

    const percent = (data.accuracy * 100).toFixed(2);
    document.getElementById("accuracy").textContent = percent + "%";
    document.getElementById("accuracyFill").style.width = percent + "%";

    statusText.textContent = "Analysis complete";
    resultBox.classList.remove("hidden");
    analyzeBtn.disabled = false;
  })
  .catch(() => {
    statusText.textContent = "Server error. Try again.";
    analyzeBtn.disabled = false;
  });
}
