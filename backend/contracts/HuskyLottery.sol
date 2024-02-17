// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

/* 

    )           (          )       )                    (         )  
 ( /(           )\ )    ( /(    ( /(       (            )\ )   ( /(  
 )\())     (   (()/(    )\())   )\())    ( )\      (   (()/(   )\()) 
((_)\      )\   /(_)) |((_)\   ((_)\     )((_)     )\   /(_)) ((_)\  
 _((_)  _ ((_) (_))   |_ ((_) __ ((_)   ((_)_   _ ((_) (_))    _((_) 
| || | | | | | / __|  | |/ /  \ \ / /    | _ ) | | | | | _ \  | \| | 
| __ | | |_| | \__ \    ' <    \ V /     | _ \ | |_| | |   /  | .` | 
|_||_|  \___/  |___/   _|\_\    |_|      |___/  \___/  |_|_\  |_|\_| 
                                                                     

*/                  

interface IERC20 {
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address to, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
}

contract Lottery {
    address public owner;
    address public burnAddress= 0x000000000000000000000000000000000000dEaD;  
    address payable[] public players;
    address[] public winners;
    uint public lotteryId;
    uint public burnTaxPercentage = 5; 
    uint public maxPlayers = 20; 
    IERC20 public token;

    uint256 public ENTRY_FEE = 5000 * 10**18; // Entry amount * 18 decimals

    constructor(address _tokenAddress) {
        owner = msg.sender;
        lotteryId = 0;
        token = IERC20(_tokenAddress);
    }

    function getWinners() public view returns (address[] memory){
        return winners;
    }

    function getBalance() public view returns (uint) {
        return token.balanceOf(address(this));
    }

    function getPlayers() public view returns (address payable[] memory) {
        return players;
    }

    function enter() public {
        require(players.length < maxPlayers, "Max players limit reached");
        uint256 allowance = token.allowance(msg.sender, address(this));
        require(allowance >= ENTRY_FEE, "Check the token allowance");

        token.transferFrom(msg.sender, address(this), ENTRY_FEE);
        players.push(payable(msg.sender));
    }

    function getRandomNumber() public view returns (uint) {
        return uint(keccak256(abi.encodePacked(owner, block.timestamp)));
    }

    function getLotteryId() public view returns(uint) {
        return lotteryId;
    }

    function pickWinner() public onlyOwner {
        require(players.length > 0, "No players in the lottery");
        uint randomIndex = getRandomNumber() % players.length;
        
        uint burnTax = (getBalance() * burnTaxPercentage) / 100;
        token.transfer(burnAddress, burnTax);

        uint winnerAmount = getBalance();
        token.transfer(players[randomIndex], winnerAmount);
        
        winners.push(players[randomIndex]);
        lotteryId++;

        players = new address payable[](0);
    }

    modifier onlyOwner() {
      require(msg.sender == owner);
      _;
    }
}