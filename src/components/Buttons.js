import './button.css';
function RectButton({text,link}) {
  return (
    <a href={link}>
        <button className="rectButton">
        {text}
        </button>
    </a>
  )
}

export default RectButton