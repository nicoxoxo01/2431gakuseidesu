const ca = document.getElementById("ca");
const copyBtn = document.getElementById("copyBtn");

copyBtn?.addEventListener("click", async () => {
  const text = ca?.textContent?.trim() || "";
  try{
    await navigator.clipboard.writeText(text);
    copyBtn.querySelector("span").textContent = "Copied!";
    setTimeout(()=> copyBtn.querySelector("span").textContent = "Copy", 1200);
  }catch(e){
    alert("コピーできませんでした。手動でコピーしてください。");
  }
});
