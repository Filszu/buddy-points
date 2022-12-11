import './button.css';
function RectButton({text,link}) {

    const openLink = () =>{
        // alert(link)
        // Location.href=link;
        // window.open(link, "_blank");
        window.location = link;
    }
  return (
    
        <button className="rectButton" onClick={()=>openLink()}>
        {text}
        </button>
    
  )
}

export default RectButton