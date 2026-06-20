document.addEventListener("DOMContentLoaded", () => {
    const faqHeaders = document.querySelectorAll(".accordion-header");

    faqHeaders.forEach(header => {
        header.addEventListener("click", function() {
            const item = this.parentElement;
            const content = item.querySelector(".accordion-content");
            const icon = this.querySelector("i");

            // Toggle logic for active items
            if (content.style.maxHeight && content.style.maxHeight !== "0px") {
                content.style.maxHeight = "0px";
                content.style.paddingBottom = "0px";
                icon.style.transform = "rotate(0deg)";
            } else {
                content.style.maxHeight = content.scrollHeight + 40 + "px";
                content.style.paddingBottom = "20px";
                icon.style.transform = "rotate(180deg)";
            }
        });
    });
});