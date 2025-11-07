document.getElementById("notifyBtn").addEventListener("click", () => {
  if (Notification.permission === "granted") {
    showNotification();
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        showNotification();
      }
    });
  }
});

function showNotification() {
  new Notification("♻️ Напоминание", {
    body: "Выключи свет и сохрани энергию!",
    icon: "eco.png"
  });
}
