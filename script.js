const caTextEl = document.getElementById("caText");
const copyBtn = document.getElementById("copyBtn");
const hint = document.getElementById("copyHint");

function flashHint(msg) {
  hint.textContent = msg;

  // アニメを毎回発火させるために付け直す
  hint.classList.remove("show");
  // reflow
  void hint.offsetWidth;
  hint.classList.add("show");
}

copyBtn?.addEventListener("click", async () => {
  const text = caTextEl?.textContent?.trim() || "";
  if (!text) return;

  try {
    await navigator.clipboard.writeText(text);
    flashHint("Copied ✅");
  } catch (e) {
    // iOS/Safari等フォールバック
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    flashHint(ok ? "Copied ✅" : "Copy failed ❌");
  }
});
