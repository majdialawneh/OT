const materials = [
  { id: 1, title: "Pediatric OT", desc: "العلاج الوظيفي للأطفال" },
  { id: 2, title: "Neurological OT", desc: "العلاج العصبي" },
  { id: 3, title: "Geriatric OT", desc: "العلاج لكبار السن" }
];

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("materialsList");
  if (list) {
    materials.forEach(m => {
      list.innerHTML += `
        <div class="card">
          <h3>${m.title}</h3>
          <p>${m.desc}</p>
          <a class="btn" href="material.html?id=${m.id}">فتح المادة</a>
        </div>
      `;
    });
  }

  const title = document.getElementById("materialTitle");
  if (title) {
    const params = new URLSearchParams(window.location.search);
    const mat = materials.find(m => m.id == params.get("id"));
    if (mat) title.innerText = mat.title;
  }
});