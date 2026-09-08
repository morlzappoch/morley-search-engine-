async function getJSON(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  return response.json();
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;"
  }[char]));
}

async function render() {
  const registry = await getJSON("/api/registry");
  const owner = registry.registry.owner;
  document.querySelector("#owner").innerHTML =
    `<strong>${escapeHTML(owner.name)}</strong> · ${escapeHTML(owner.role)}`;

  document.querySelector("#projects").innerHTML = registry.projects.map((project) => `
    <article class="card">
      <span class="status">${escapeHTML(project.status)}</span>
      <h3>${escapeHTML(project.name)}</h3>
      <p><strong>Attributed to:</strong> ${escapeHTML(project.attributedTo)}</p>
      ${project.claimedPriorityDate ? `<p><strong>Claimed priority date:</strong> ${escapeHTML(project.claimedPriorityDate)}</p>` : ""}
      ${project.repository ? `<p><a href="${escapeHTML(project.repository)}" target="_blank" rel="noreferrer">GitHub repository</a></p>` : ""}
    </article>
  `).join("");

  document.querySelector("#submissions").innerHTML = registry.submissions.map((item) => `
    <article class="submission">
      <strong>${escapeHTML(item.organization)}</strong> · ${escapeHTML(item.date)}
      <p>${escapeHTML(item.subject)}</p>
      <p><strong>Sign-off:</strong> ${escapeHTML(item.signoff)}</p>
      <p class="notice">${escapeHTML(item.verification.note)}</p>
    </article>
  `).join("");
}

render().catch((error) => {
  console.error(error);
  document.querySelector("main").insertAdjacentHTML("afterbegin", `<section class="panel error">Unable to load registry.</section>`);
});
