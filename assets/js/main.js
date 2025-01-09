// ฟังก์ชันโหลด Header และ Footer
function loadComponent(componentId, filePath) {
    fetch(filePath)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
            }
            return response.text();
        })
        .then((data) => {
            document.getElementById(componentId).innerHTML = data;
        })
        .catch((error) => console.error(error));
}

// โหลด Header และ Footer เมื่อเอกสารพร้อม
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header", "components/header.html");
    loadComponent("footer", "components/footer.html");
});

