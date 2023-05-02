// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.9;

contract ProjectIdeaContract {
    struct Idea {
        address creator;
        string name;
        string description;
        uint256 dateCreated;
        string[] tags;
        Proposal[] proposals;
        Comment[] comments;
        bool isCompleted;
        bool isFeatured;
    }

    struct Proposal {
        address proposer;
        string description;
        uint256 dateSubmitted;
        bool isAccepted;
    }

    struct Comment {
        address commenter;
        string commentText;
        uint256 dateCommented;
    }

    mapping(uint256 => Idea) public ideas;

    uint256 public numberOfIdeas = 0;

    function createIdea(
        string memory _name,
        string memory _description,
        string[] memory _tags
    ) public returns (uint256) {
        require(bytes(_name).length > 0, "Idea name cannot be empty");
        require(
            bytes(_description).length > 0,
            "Idea description cannot be empty"
        );

        Idea storage newIdea = ideas[numberOfIdeas];

        newIdea.creator = msg.sender;
        newIdea.name = _name;
        newIdea.description = _description;
        newIdea.tags = _tags;
        newIdea.dateCreated = block.timestamp;
        newIdea.isCompleted = false;
        newIdea.isFeatured = false;

        numberOfIdeas++;

        return numberOfIdeas - 1;
    }

    function getAllIdeas() public view returns (Idea[] memory) {
        Idea[] memory allIdeas = new Idea[](numberOfIdeas);

        for (uint256 i = 0; i < numberOfIdeas; i++) {
            allIdeas[i] = ideas[i];
        }

        return allIdeas;
    }

    function getIdeasByCreatorAddress(address _creatorAddress)
        public
        view
        returns (Idea[] memory)
    {
        Idea[] memory allIdeas = new Idea[](numberOfIdeas);
        uint256 numberOfIdeasByCreator = 0;

        for (uint256 i = 0; i < numberOfIdeas; i++) {
            if (ideas[i].creator == _creatorAddress) {
                allIdeas[numberOfIdeasByCreator] = ideas[i];
                numberOfIdeasByCreator++;
            }else{
                // if the idea has a proposal from the user and the proposal is accepted
                for(uint256 j = 0; j < ideas[i].proposals.length; j++){
                    if(ideas[i].proposals[j].proposer == _creatorAddress && ideas[i].proposals[j].isAccepted){
                        allIdeas[numberOfIdeasByCreator] = ideas[i];
                        numberOfIdeasByCreator++;
                    }
                }
            }
        }

        Idea[] memory ideasByCreator = new Idea[](numberOfIdeasByCreator);

        for (uint256 i = 0; i < numberOfIdeasByCreator; i++) {
            ideasByCreator[i] = allIdeas[i];
        }

        return ideasByCreator;
    }

    function submitProposal(
        uint256 _ideaIndex,
        string memory _description
    ) public {
        require(_ideaIndex < numberOfIdeas, "Idea does not exist");
        require(
            bytes(_description).length > 0,
            "Proposal description cannot be empty"
        );

        Proposal memory newProposal = Proposal(
            msg.sender,
            _description,
            block.timestamp,
            false
        );
        ideas[_ideaIndex].proposals.push(newProposal);
    }

    function getProposals(
        uint256 _ideaIndex
    ) public view returns (Proposal[] memory) {
        require(_ideaIndex < numberOfIdeas, "Idea does not exist");

        return ideas[_ideaIndex].proposals;
    }

    function acceptProposal(uint256 _ideaIndex, uint256 _proposalIndex) public {
        require(_ideaIndex < numberOfIdeas, "Idea does not exist");
        require(
            _proposalIndex < ideas[_ideaIndex].proposals.length,
            "Proposal does not exist"
        );
        require(
            msg.sender == ideas[_ideaIndex].creator,
            "Only idea creator can accept proposals"
        );

        ideas[_ideaIndex].proposals[_proposalIndex].isAccepted = true;

        // Transfer ERC20 tokens to the user who submitted the proposal and add him to the internal DAO
    }

    function commentOnIdea(
        uint256 _ideaIndex,
        string memory _commentText
    ) public {
        require(_ideaIndex < numberOfIdeas, "Idea does not exist");
        require(bytes(_commentText).length > 0, "Comment text cannot be empty");

        Comment memory newComment = Comment(
            msg.sender,
            _commentText,
            block.timestamp
        );
        ideas[_ideaIndex].comments.push(newComment);
    }

    function getComments(
        uint256 _ideaIndex
    ) public view returns (Comment[] memory) {
        require(_ideaIndex < numberOfIdeas, "Idea does not exist");

        return ideas[_ideaIndex].comments;
    }

    function ideaCompleted(uint256 _ideaIndex) public {
        require(_ideaIndex < numberOfIdeas, "Idea does not exist");
        require(
            msg.sender == ideas[_ideaIndex].creator,
            "Only idea creator can mark idea as completed"
        );
        ideas[_ideaIndex].isCompleted = true;
    }

    function setRandomFeaturedIdea() external {
        uint min = 0;
        uint max = numberOfIdeas - 1;

        for(uint256 i = 0; i < numberOfIdeas; i++){
            ideas[i].isFeatured = false;
        }

        require(min <= max, "Invalid range");
        uint256 random = uint256(keccak256(abi.encodePacked(block.timestamp, numberOfIdeas))) % (max - min + 1);
        uint randomNumber = random + min;
    
        ideas[randomNumber].isFeatured = true;
    }

}