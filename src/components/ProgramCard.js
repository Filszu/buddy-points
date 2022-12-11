import {useState} from 'react'
import RectButton from './Buttons';
import './card.css'

function ProgramCard({program,playerId}) {
const { offer_id, offer_name, subid, subid1, currency, order_id, reward,imgUrl,description, terms, link} = program


const subid2 = playerId?playerId:"FilszuRef"
const refLink =`${link}?subid=${subid}&subid1=${subid1}&subid2=${subid2}`;

console.log(refLink)

const rewardUserProfitRate =  0.5; // 50% percent for user

const [showDesc, setShowDesc] = useState(false)
  return (
    
<div className="card">
    <div className="card-header">
      <h3>{offer_name}</h3>
    </div>
    <div className="card-body">
      <img className="card-image" src={imgUrl} alt={offer_name} />
      <p>Offer ID: {offer_id}</p>
      {/* <p>Sub ID: {subid}</p>
      <p>Sub ID1: {subid1}</p> */}
      {/* <p>Currency: {currency}</p> */}
      {/* <p>Order ID: {order_id}</p> */}
      <p>Poland: <span className="card__reward">{reward.pl*rewardUserProfitRate}{currency}</span></p>
      <p>the US: <span className="card__reward">{reward.us*rewardUserProfitRate}{currency}</span></p>
      <div className="card__readMore" onClick={()=>{setShowDesc(!showDesc)}}>
        {
            !showDesc?"read more":"hide"
        }
        
        </div>
      {showDesc&&
        <>
            <div>{description}</div>
            <div className="card__terms">
                {terms}
            </div>
        </>
      }
      <RectButton text="open & play" link={`${refLink}`}/>
    </div>
  </div>

  )
}

export default ProgramCard