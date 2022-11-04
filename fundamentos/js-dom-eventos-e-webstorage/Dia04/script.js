window.onload = () => {
    const setBackgroundColor = (color) => {
        let content = document.querySelector(".content");
        content.style.backgroundColor = color;
        localStorage.setItem("backgroundColor", color)
    }
}