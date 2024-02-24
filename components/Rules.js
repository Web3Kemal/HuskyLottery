import React from 'react';
import style from '../styles/Rules.module.css';
import button from '../styles/PotCard.module.css';

const Rules = () => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText('0xb01d852Ad6F84a7E2065aFEC5D0e801DE0bFa0B9').then(function() {
      alert('Copied the text: 0xb01d852Ad6F84a7E2065aFEC5D0e801DE0bFa0B9');
    }, function(err) {
      console.error('Could not copy text: ', err);
    });
  }

  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        HOW TO PLAY
      </div>
      <div className={style.rule}>
        <b>If you&apos;re on mobile, please use your wallet browser (e.g. MetaMask) and make sure to be on Binance Smart Chain network to play. You can easily add the network in MetaMask.</b>
      </div>
      <div className={style.rule}>
        Get an entry for XXXX $HUSKY, the prize is almost 20x times the entry amount. There are maximum 20 entries and the winner gets 95% of the entries. 5% will be burned automatically each game!
      </div>
      <div className={style.rule}>
        This is a very brief technical explanation of the lottery: <i>the daily winner will be chosen randomly by the smart contract by a random index number mod 20, keep in mind that Solidity arrays save each entry differently, this means that the contract won&apos;t 
        save your address as a lottery participant ID, the actual ID will be the position (index) when you entered the lottery, therefore suppose you bet 10 times of 20 available entries, you will have statistically 50% chances to win the final prize. If the array was going to save your address as entry ID,  
        if you bet 19 times with the same address and another guy bets 1 time only, you would statistically have 50% chances to win, not 95%.</i>
      </div>
      <div className={style.ruleca}>
        Here is the public and verified lottery smart contract: TBA {/* <button className={button.btnca} onClick={copyToClipboard}>Copy CA</button> */}
      </div>
      <button className={button.btndevs} onClick={() => window.location = 'mailto:devs@huskycoin.vip'}>Contact devs</button>
      
    </div>
    
    
  );
}

export default Rules;
