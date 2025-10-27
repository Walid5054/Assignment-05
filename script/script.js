function doButton(id, id1, id2) {
  const taskAssign = document.getElementById(id);
  let convert = parseInt(taskAssign.innerText);
  const button = document.getElementById(id1);
  const taskComplete = document.getElementById(id2);
  let convertTask = parseInt(taskComplete.innerText);
  const taskName = document.getElementById("task1").innerText;

  if (convert > 0 && convertTask > 0) {
    convert = convert - 1;
    taskAssign.innerText = convert;
    convertTask = convertTask + 1;
    taskComplete.innerText = convertTask;
    button.disabled = true;
    button.style.backgroundColor = "gray";

    const logContainer = document.querySelector(".log-container");
    const msg = document.createElement("p");
    const time = new Date().toLocaleTimeString();
    msg.innerText = ` You have completed the task "${taskName}" at ${time}.`;
    msg.classList.add(
      "text-sm",
      "text-gray-700",
      "mb-1",
      "text-center",
      "font-bold"
    );
    logContainer.appendChild(msg);
  }
}
const buttonIds = ["com", "five", "four", "three", "two", "one"];
for (const ids of buttonIds) {
  document.getElementById(ids).addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board updated successfully");
    doButton("six", ids, "Twenty-three");
  });
}
document.getElementById("clearhistory").addEventListener("click", function () {
  document.querySelector(".log-container").innerText = "";
});
const discoverBtn = document.getElementById("discover");
if (discoverBtn) {
  discoverBtn.addEventListener("click", function () {
    window.location.href = "blog.html";
  });
}
const backBtn = document.getElementById("back");
if (backBtn) {
  backBtn.addEventListener("click", function () {
    window.location.href = "index.html";
  });
}
document.getElementById("click").addEventListener("click", function () {
  document.getElementById("bod").style.backgroundColor = "pink";
});
