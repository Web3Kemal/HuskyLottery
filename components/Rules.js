import React from 'react';
import style from '../styles/Rules.module.css';

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
        How To Play
      </div>
      <div className={style.rule}>
        Get an entry for 0.1 BNB, you can enter multiple times. One winner per game and he gets 1.9 BNB, because 5% is burned each game!
      </div>
      <div className={style.rule}>
        The daily winner will be chosen randomly by the smart contract. Since each entry is added to a fixed 20-spots array, each entry from the same person - even with different addresses - statistically increases the chances to win. 
      </div>
      <div className={style.rule}>
        To play the game on mobile, you need to open the website from the internal browser of MetaMask, then you will be able to connect the wallet. Remember to be on BSC chain before connecting!
      </div>
      <div className={style.rule}>
        For reference, you can chek the public contract code at this address: <button onClick={copyToClipboard}>0x8bc237fdade26044af12ab9d2685994048a639c3</button>
      </div>
    </div>
  );
}

export default Rules;
