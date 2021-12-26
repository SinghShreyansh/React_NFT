import React, {useState,useEffect} from 'react'
import './Main.css'
import instagramLogo from './assets/owner/instagram.png'
import twitterLogo from './assets/owner/twitter.png'
import moreIcon from './assets/owner/more.png'

const Main = ({selectedPunk , punkListData}) => {
 const [activePunk, setActivePunk] = useState(punkListData[0])

 useEffect(()=> {
     setActivePunk(punkListData[selectedPunk])
 },[punkListData,selectedPunk])
    return (
        <div className='main'>
            <div className="mainContent">

                <div   className="punkHighlight">
                    <div className="punkContainer">
                        <img className='selectedPunk' src={activePunk.image_original_url} alt="" />
                    </div>
                </div>

                <div className="punkAndOwnerDetail">

             
                <div className="punkDetails" >
                     <div className="title">
                         {activePunk.name}
                     </div>
                     <span className="itemNumber">
                         .#{activePunk.token_id}
                     </span>
                </div>
                <div className="owner">
                    <div className="ownerImageContainer">
                        <img src='https://avatars.githubusercontent.com/u/91277635?s=400&u=233fa0d27a84e891077eb6f171482c89aa264a73&v=4' alt="" />
                    </div>
                    <div className="ownerDetails">
                        <div className="ownerNameAndHandle">
                            <div className="ownerName">{activePunk.owner.address}</div>
                            <div className="ownerHandle">@SinghShreyansh</div>
                        </div>

                        <div className="link">

                        <a className="ownerLink" href='https://www.instagram.com/shreyansh0322/' >
                            <img  src={instagramLogo} alt="" /></a>
                        <a className="ownerLink" href='https://twitter.com/Shreyansh0322' ><img src={twitterLogo} alt="" /></a>
                        <a className="ownerLink" href='https://github.com/SinghShreyansh' ><img src={moreIcon} alt="" /></a>
                        </div>
                    </div>
                </div>
                </div>
            </div> 
        </div>
    )
}

export default Main
