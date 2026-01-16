const caTextEl = document.getElementById("caText");
const copyBtn = document.getElementById("copyBtn");
const hint = document.getElementById("copyHint");

function showHint(msg) {
  hint.textContent = msg;
  clearTimeout(showHint._t);
  showHint._t = setTimeout(() => (hint.textContent = ""), 1800);
}

copyBtn?.addEventListener("click", async () => {
  const text = caTextEl?.textContent?.trim() || "";
  if (!text) return;

  try {
    await navigator.clipboard.writeText(text);
    showHint("Copied ✅");
  } catch (e) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    showHint(ok ? "Copied ✅" : "Copy failed ❌");
  }
});
