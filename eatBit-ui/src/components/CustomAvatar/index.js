import generateRandomColor from "../generateRandomColor";

const nameGenerator = (name) => {
    return (name).split(" ").map((data) => data[0]).join("");
}
const AvatarCustom = ({ name, style }) => {
    return <span style={{ "borderRadius": "100%", "color": "white", "backgroundColor": generateRandomColor(), "height": "40px", "width": "40px", "textAlign": "center", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontWeight": "600", "fontSize": "0.875rem", ...style }}>{nameGenerator(name)}</span>;
}

export default AvatarCustom;