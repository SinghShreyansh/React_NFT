
import './App.css';
import Header from './Header.js'
import CollectionCard from './CollectionCard'
import { useEffect, useState} from 'react'
import axios from 'axios'
import PunkList from './PunkList';
import Main from './Main';

function App() {

  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(()=> {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x00e2C62eC232b53b52d03051B3B80E05eB58Dbc2')
      
      setPunkListData(openseaData.data.assets)

      console.log(openseaData.data.assets)
    }

    return getMyNfts();
  },[])
  return (
    <div className='Header'>
      <Header/>
      { punkListData.length > 0 &&(
        <>
      <Main selectedPunk={selectedPunk} punkListData={punkListData}/>
      <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk}/>
        </>
      )}
    </div>
  );
}

export default App;
