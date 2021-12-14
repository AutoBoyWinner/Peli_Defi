# DONOR ($DNR) Smart contracts

Yield farming optimizer for Binance Smart Chain.


### Governance Pools

The governance pools are using the same contracts as the first YearnRewards governance pool. We are strong believers in using battle tested code whenever possible, while our community needs to innovate on building new yield maximizing strategies. We don’t need to innovate on things that already work. We also wanted to make it as easy as possible to check that the source code is correct.


### Team Timelock Contracts

To handle the team time-locks we are using the audited and battle tested OpenZeppelin TokenTimelock contract. All the contracts have their source code verified.

### Deploying the token smart contract and Other contracts

To deploy we may use different Tools
* HardHat : When we want to deploy many contracts at once
* Remix IDE: For deploying many and single contracts

For Example
-----------
To deploy DONOR Token you will need to 
* go to remixide and 
* create a file called DONOR.sol or anyname and 
* then paste `Donor_Token.sol` codes to the new file created
* Then change the compiler version 
* Compile the contract
* Then make sure metamask is on and also make sure it has the network you want to deploy your smart contract on either BSC/MATIC/HECO/ETHerium or whatever
* Then click deploy 
......
