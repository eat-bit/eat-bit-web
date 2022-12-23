export default function generateRandomColor() {
    let maxVal = 0xFFFFFF; // 16777215
    let randColor = String(Math.floor(Math.random() * maxVal).toString(16));
    return `#${randColor.toUpperCase()}`
}