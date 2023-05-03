# CollabX - A Collaborative Trustless Platform for Hustlers

## Front-End Setup

- Next.JS
- Tailwind CSS
- Daisy UI

- Interacting with Smart Contracts
  - Thirdweb
  - Ethers.js
  - Web3.js

## Blockchain Setup

#### Smart Contracts

- UserProfileContract - This contract is used to store the user profile information.
- ProjectIdeaContract - This contract is used to store the project idea information.
- ProjectRoomDAO - This contract is used to store the project room information including participants, chats, proposals, voting results, tasks etc.

#### Custom Tokens

- CX Coins - This is the custom ERC20 token used in the platform which is a currency to interact within out application.
- CollabX Entry Pass - This is the custom ERC1151 token (NFT) used in the platform which is a entry pass to enter the platform.

#### Chainlink Service Used

- Chainlink Keepers - Automation of tasks like voting, proposal closing, task closing etc.
  - Time Based Automation - Daily Featuring of random Project Idea.
  - Custom logic Automation - Automatically perform action after voting (24 hours) - For Proposal Voting, Task Status Update etc.
