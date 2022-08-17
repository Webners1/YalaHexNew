import {useEffect}  from "react";
import './yalahex.scss'
import { useState } from 'react';
import Web3 from "web3";

import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import {
          VerticalSocial,
          HowItWorksInfo,
          timelineInfo,
          ServiceBlock,
          FQAInfo,
          DocElementTitle,
          TokenText,
          TeamMember,
          PartnersData
       } from '../../data/data-containers/data-HomeDemo3.js';

import {
          HomeDemo3About1,
          HomeDemo3Solution,
          HomeDemo3VideoBg4,
          HomeDemo3ImgPhone,
          HomeDemo3RingsBg,
          HomeDemo3Allocation,
          HomeDemo3BgRoadmap
        } from '../../utils/allImgs'

import {handelTitle} from '../../utils'
import Header from "../../layouts/Header"
import Footer from '../../layouts/FooterPages'

import SecVerticalSocial from '../HomeDemo3/SecVerticalSocial'
import SecHowItWorks from '../HomeDemo3/SecHowItWorks'
import SecAboutUsClient from '../HomeDemo3/SecAboutUsClient'
import SecAboutUs from '../HomeDemo3/SecAboutUs'
import SecDemoVideo from '../HomeDemo3/SecDemoVideo'
import SecOurRoadmap from '../HomeDemo3/SecOurRoadmap'
import SecOurFeatures from '../HomeDemo3/SecOurFeatures'
import SecFAQTimeline from '../HomeDemo3/SecFAQ_Timeline'
import SecDistribution from '../HomeDemo3/SecDistribution'
import SecTeam from '../HomeDemo3/SecTeam'
import SecPartners from '../HomeDemo3/SecPartners'
import SecWelcomeArea from "../HomeDemo3/SecWelcomeArea";

let YalaHexTemplate = () => {
  const contractAddress = '0x3f13dd36206e3afb692049c8d7efa43f85f52f3a';
  const TokencontractAddress = '0x2b591e99afe9f32eaa6214f7b7629768c40eeb39';
  let [ChainId, setChainId] = useState();
  let [web3, setWeb3] = useState();
  let[totalTokenStaked,setTotalTokenStaked] = useState('')
  let[tokenStaked,setTokenStaked] = useState('')
  let [account, setAccount] = useState(0x0);
  const [provider, setProvider] = useState();
  let [contract, setContract] = useState();
  let [tokencontract, sett] = useState();
  let [TokenBalance, setTokenBalance] = useState(0);
  let [web3Modal,setweb3Modal] = useState('');
  let[approve,setApprove] = useState(1)

  const loadweb3 = async () => {
    let  preProvider=null;
      try {
        const providerOptions = {
          /* See Provider Options Section */
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              rpc: {
                56: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
                1: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
              },
              // chainId: 4
              chainId: [56, 1]
            }
          }
        };
  
        setweb3Modal (web3Modal= new Web3Modal({
          cacheProvider: false,
          providerOptions, // required
          disableInjectedProvider: false,
        }))
         preProvider = await web3Modal.connect();
        
  
        
        // Subscribe to chainId change
        await web3Modal.toggleModal();
        if(preProvider){
          setWeb3(web3 = new Web3(preProvider))
          setContract()
      getApprove()
        }
      } catch (e) {
        console.log(e)
      }
    }
    const stake=async(value)=>{
     
      await contract?.methods?.pledgeHex(value,).on("confirmation",async(confirmationNumber, receipt)=>{
        setTotalTokenStaked(totalTokenStaked = await contract?.methods?.totalStaked()?.call())
      })
      }
      const getApprove=async()=>{
        let accountIs = await web3.eth.net.isListening()
       console.log(accountIs)
        if(accountIs){
          let account = await web3.eth.getAccounts();
  
          // THIS HAS TO BE GLOBAL (account)
          setAccount(account = account[0]);
          console.log(account)
          if(account){
  // setTokenStaked=(tokenStaked = await contract?.methods?.balanceStaked(account)?.call()/10**18)
            setApprove(approve = await tokencontract?.methods.allowance(account,contractAddress).call())
          }
        }
      }
  
      const approval =async()=>{
        await tokencontract?.methods.approve(contractAddress,"10000000000000000000000000000000000000").send({from:account})
        .on("confirmation",(confirmationNumber, receipt)=>{
          getApprove()
        })
     console.log(account)
      }
      
    
    
  
    
    const disconnect=async()=>{
  
    
        // If the cached provider is not cleared,
        // WalletConnect will default to the existing session
        // and does not allow to re-scan the QR code with a new wallet.
        // Depending on your use case you may want or want not his behavior.
     setAccount(account = null);
     
        // setWeb3(web3 = null)
  
    }
  useEffect(() => {
    
    // window.ethereum.on("AccountChnages",())
    if(window.ethereum){
      setWeb3(web3 = new Web3(window.ethereum))
      setContract()
      getApprove()
    }
    
  
      window?.ethereum?.on("chainChanged",function (chain) {
        console.log("Account disconnected");
        console.log("account")
        window.location.reload(false)
  
  
      });
     
      window?.ethereum?.on("accountsChanged",function (account) {
        
        window.location.reload(false)
      
      });
    handelTitle('Home Template3')
  },[])

  useEffect(() => {
    if(window.ethereum){
      setContract()
      getApprove()
    }
    if (document.title === 'Home Template3') {
      document.getElementsByTagName("body")[0].style.backgroundImage = 'linear-gradient(180deg,#240044 0,#0f0240 25%,#400959 40%,#0f0240 65%,#0f0240)'
    }else{
      document.getElementsByTagName("body")[0].style.backgroundImage = 'linear-gradient(to right, #4834d4, #341f97)'
    }
  },[])

  return (
    <>
      <Header account={account} loadweb3={loadweb3} disconnect={disconnect}/>
      <div className="HomeDemo3">
        <SecWelcomeArea />
        <SecVerticalSocial data={VerticalSocial} />
        <SecHowItWorks data={HowItWorksInfo} imgPhone={HomeDemo3ImgPhone} />
        {/* <SecTrust data={SingleCoolFact} /> */}
        <SecAboutUsClient img={HomeDemo3About1} />
        <SecAboutUs img={HomeDemo3Solution} />
        <SecDemoVideo img={HomeDemo3VideoBg4} />
        <div className="clearfix" />
        {/* <SecOurServices data={service_single_content} /> */}
        <SecOurRoadmap data={timelineInfo} img={HomeDemo3BgRoadmap} />
        <SecOurFeatures data={ServiceBlock} imgPhone={HomeDemo3Allocation} Rings={HomeDemo3RingsBg} />
        {/* <SecSubscribe data={SocialListIco} /> */}
        <SecFAQTimeline stake={stake} approve={approve} account={account} approval={approval} loadweb3={loadweb3} FQAInfo={FQAInfo} DocElementTitle={DocElementTitle} />
        <SecDistribution img={HomeDemo3Allocation} data={TokenText} />
        <SecTeam data={TeamMember} />
        <SecPartners data={PartnersData} />
      </div>
      <Footer />
    </>
  );
};

export default YalaHexTemplate