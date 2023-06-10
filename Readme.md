# CollabX - A Collaborative Trustless Platform for Hustlers

[![Demo Video](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/503/043/datas/gallery.jpg)](https://www.youtube.com/watch?v=MAziaOBHkJs&t=988s)

## Inspiration
We got inspiration to build CollabX from empowering hustlers to collaborate on projects. Decentralized decision-making, trust-building reputation system, and token incentives. Connect, showcase, and innovate in a transparent, inclusive, and motivating community. 
As a builder we struggle to find teammates for our hobby projects, so that's why we build CollabX, we found team members and we don't even need to trust each other, everything is DAO powered.

## What it does
CollabX is a decentralized community platform that enables hustlers to collaborate on projects. It facilitates transparent decision-making through decentralized voting and builds trust with a reputation system. The platform also offers token incentives, connects individuals, showcases projects, and fosters innovation within a motivating community.

## How we built it
The team for building CollabX will have various roles and responsibilities. Tasks are divided based on expertise, such as frontend and smart-contract development, blockchain integration, and UI/UX design. GitHub is used for collaborative development, where team members can share code, track changes, and manage tasks using features like issues and pull requests. Research on smart contracts, NFTs, and ERC-1155 tokens involves studying documentation, exploring existing projects, attending webinars, and engaging with the blockchain development community to gain insights and knowledge for implementing these features in CollabX.

## What we learned
While building CollabX, we got to learn about how NFTs work, understand the use case of NFT as a ticket to enter CollabX. We learnt about ERC-20, ERC-1155 tokens as well. We learnt about integrating Chainlink Automation to our platform.

## What's next for CollabX
There are some features we will add in future, like Custom ERC-20 tokens, instead of MATIC coins users will use custom CX tokens to interact with our platform which will allow us to add much more flexibility in terms of actions and performance.
We will also integrate Custom Logic Chainlink Keepers to automatically perform action on proposals once the voting stops.
And We are planning to launch alpha version which will be for the professionals, which will have healthy tech community from every domain.

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

