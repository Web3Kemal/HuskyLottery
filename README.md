Hello, this project source code has been taken from a youtube video draft project about 1 year ago. Since then, I've adapted it to the needs of 3 different memecoin projects. The current repo is the 3rd and latest adaptation. In the first project, the smart contract was rewarding 95% of the memecoin's tokens (not native crypto) to the winner, while the remaining 5% was going to the marketing wallet. In the 2nd project, that actually never launched, for client's reasons, had native crypto (BNB) as a entry bet and reward. This latest project's lottery utility was the 5% burn at the end of the game, while the remaining 95% was going directly to the winner. All 3 times the maximum number of player each game was 20, while the winner was picked randomly, by calling a function manually, each day by me. The pickWinner() function is simply pseudo-randomly picking a winner. Randomness doesn't exist, as far as I know, in Soldiity. Very briefly and simply put, since blockchain is a deterministic technology, the randomness is determined by the majority of nodes, if one or some of the nodes are trying to manipulate the contract by generating their own values. There is a way to bring randomness is by Usine Chainlink VRF. Given the small scale of these 3 projects that I've built, I've omitted the use of VRF. 


This is a Next.js project with Solidity and other libraries to use crypo functionalities such as wallet connection.

To run on local use:

npm run dev
