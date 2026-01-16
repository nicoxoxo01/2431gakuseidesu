const caText = document.getElementById("caText");
const copyBtn = document.getElementById("copyBtn");

copyBtn?.addEventListener("click", async () => {
  const text = caText?.textContent?.trim() || "";
  if (!text) return;

  try {
    await navigator.clipboard.writeText(text);
    copyBtn.innerHTML = '✅ Copied';
    setTimeout(() => {
      copyBtn.innerHTML = '<img src="images/icon_copyca.png" alt=""> Copy';
    }, 1200);
  } catch (e) {
    alert("コピーできませんでした。ブラウザ権限を確認してください。");
  }
});
