import React,{useState,useEffect} from 'react';
import Web3Modal from 'web3modal';
import {ethers} from "ethers";
import {create as ipfsHttpClient} from "ipfs-http-client";
import axios from 'axios';
import {useRouter} from "next/router";

import {VotingAddress,VotingAddressABI} from './Constants'
const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')
const fetchContract = (signerOrProvider) => new ethers.Contract(VotingAddress,VotingAddressABI,signerOrProvider);
 
  export const VotingContext = React.createContext();
  export const VotingProvider = ({children}) =>{

      const votingTitle = "my first contract"
     return(
        <VotingContext.Provider value={{votingTitle}}>
            {children}
        </VotingContext.Provider>
     );
  }

