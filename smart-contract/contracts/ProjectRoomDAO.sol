// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.9;

contract ProjectRoomDAOContract {
    struct ProjectRoom {
        address creator;
        string name;
        string description;
        string link;
        uint256 dateCreated;
        bool isCompleted;
        Participant[] participants;
        Comment[] comments;
        Proposal[] proposals;
        Task[] tasks;
        uint256 id;
        uint256 noOfProposals;
        uint256 noOfTasks;
    }

    struct Participant {
        address participant;
        string name;
        uint256 dateJoined;
    }

    struct Comment {
        address commenter;
        string name;
        string commentText;
        uint256 dateCommented;
    }

    struct Proposal {
        uint256 id;
        address proposer;
        string name;
        string description;
        uint256 dateSubmitted;
        uint256 endProposalVotingDate;
        uint256 yesVoted;
        uint256 noVoted;
    }

    struct Task {
        uint256 id;
        address assignedTo;
        string name;
        string description;
        uint256 dateCreated;
        uint256 votingStartedAt;
        string status;
        bool isCompletedRequested;
        bool isAbandonedRequested;
        uint256 yesVoted;
        uint256 noVoted;
        bool autoTrigger;
    }

    mapping(uint256 => ProjectRoom) public rooms;

    uint256 public numberOfRooms = 0;

    function createRoom(
        uint256 _id,
        string memory _name,
        string memory _description,
        string memory _link
    ) public returns (uint256) {
        require(bytes(_name).length > 0, "Room name cannot be empty");
        require(
            bytes(_description).length > 0,
            "Room description cannot be empty"
        );

        ProjectRoom storage newRoom = rooms[_id];

        newRoom.creator = msg.sender;
        newRoom.name = _name;
        newRoom.description = _description;
        newRoom.link = _link;
        newRoom.dateCreated = block.timestamp;
        newRoom.isCompleted = false;
        newRoom.id = _id;
        newRoom.noOfProposals = 0;
        newRoom.noOfTasks = 0;

        numberOfRooms++;

        return _id;
    }

    function getProjectRoom(
        uint256 _roomId
    ) public view returns (ProjectRoom memory) {
        return rooms[_roomId];
    }

    function completeProjectRoom(uint256 _roomId) public {
        require(
            rooms[_roomId].creator == msg.sender,
            "Only creator can complete the room"
        );

        rooms[_roomId].isCompleted = true;
    }

    function addParticipant(
        uint256 _roomId,
        string memory _name,
        address _address
    ) public {
        require(bytes(_name).length > 0, "Participant name cannot be empty");

        Participant memory newParticipant;
        newParticipant.participant = _address;
        newParticipant.name = _name;
        newParticipant.dateJoined = block.timestamp;

        rooms[_roomId].participants.push(newParticipant);
    }

    function leaveOrKickParticipant(
        uint256 _roomId,
        address _participant
    ) public {
        for (uint256 i = 0; i < rooms[_roomId].participants.length; i++) {
            if (rooms[_roomId].participants[i].participant == _participant) {
                delete rooms[_roomId].participants[i];
                break;
            }
        }
    }

    function getProjectRoomParticipants(
        uint256 _roomId
    ) public view returns (Participant[] memory) {
        return rooms[_roomId].participants;
    }

    function addComment(
        uint256 _roomId,
        string memory _name,
        string memory _commentText,
        address _commenter
    ) public {
        require(bytes(_name).length > 0, "Comment name cannot be empty");
        require(bytes(_commentText).length > 0, "Comment text cannot be empty");

        Comment memory newComment;
        newComment.commenter = _commenter;
        newComment.name = _name;
        newComment.commentText = _commentText;
        newComment.dateCommented = block.timestamp;

        rooms[_roomId].comments.push(newComment);
    }

    function getProjectRoomComments(
        uint256 _roomId
    ) public view returns (Comment[] memory) {
        return rooms[_roomId].comments;
    }

    function addProposal(
        uint256 _roomId,
        string memory _name,
        string memory _description,
        address _proposer
    ) public {
        require(bytes(_name).length > 0, "Proposal name cannot be empty");
        require(
            bytes(_description).length > 0,
            "Proposal description cannot be empty"
        );

        Proposal memory newProposal;
        newProposal.id = rooms[_roomId].noOfProposals;
        newProposal.proposer = _proposer;
        newProposal.name = _name;
        newProposal.description = _description;
        newProposal.dateSubmitted = block.timestamp;
        newProposal.endProposalVotingDate = block.timestamp + 1 days;
        newProposal.yesVoted = 0;
        newProposal.noVoted = 0;

        rooms[_roomId].proposals.push(newProposal);
        rooms[_roomId].noOfProposals++;
    }

    function getProjectRoomProposals(
        uint256 _roomId
    ) public view returns (Proposal[] memory) {
        return rooms[_roomId].proposals;
    }

    function voteOnProposal(
        uint256 _roomId,
        uint256 _proposalId,
        uint256 _vote
    ) public {
        require(_vote >= 1 && _vote <= 2, "Vote must be between 1 and 2");

        for (uint256 i = 0; i < rooms[_roomId].proposals.length; i++) {
            if (rooms[_roomId].proposals[i].id == _proposalId) {
                if (_vote == 1) {
                    rooms[_roomId].proposals[i].yesVoted++;
                } else if (_vote == 2) {
                    rooms[_roomId].proposals[i].noVoted++;
                }
                break;
            }
        }
    }

    // Automation
    function performActionOnProposalAfterVoting(
        uint256 _roomId,
        uint256 _proposalId
    ) public {
        // find the proposal with the id
        for (uint256 i = 0; i < rooms[_roomId].proposals.length; i++) {
            if (rooms[_roomId].proposals[i].id == _proposalId) {
                if (
                    rooms[_roomId].proposals[i].yesVoted >
                    rooms[_roomId].proposals[i].noVoted
                ) {
                    // create task and add to room
                    Task memory newTask;
                    newTask.id = rooms[_roomId].noOfTasks;
                    newTask.name = rooms[_roomId].proposals[i].name;
                    newTask.description = rooms[_roomId]
                        .proposals[i]
                        .description;
                    newTask.dateCreated = block.timestamp;
                    newTask.votingStartedAt = 0;
                    newTask.status = "todo";
                    newTask.isCompletedRequested = false;
                    newTask.isAbandonedRequested = false;
                    newTask.yesVoted = 0;
                    newTask.noVoted = 0;
                    newTask.autoTrigger = false;

                    rooms[_roomId].tasks.push(newTask);
                    rooms[_roomId].noOfTasks++;

                    delete rooms[_roomId].proposals[i];
                } else {
                    // delete proposal
                    delete rooms[_roomId].proposals[i];
                }
                break;
            }
        }
    }

    function getProjectRoomTasks(
        uint256 _roomId
    ) public view returns (Task[] memory) {
        return rooms[_roomId].tasks;
    }

    function assignTaskToParticipant(uint256 _roomId, uint256 _taskId) public {
        // find the task by id
        for (uint256 i = 0; i < rooms[_roomId].tasks.length; i++) {
            if (rooms[_roomId].tasks[i].id == _taskId) {
                rooms[_roomId].tasks[i].assignedTo = msg.sender;
                rooms[_roomId].tasks[i].status = "in_progress";
                break;
            }
        }
    }

    function changeTaskStatus(
        uint256 _roomId,
        uint256 _taskId,
        uint256 _status
    ) public {
        require(
            _status >= 0 && _status <= 1,
            "Status must be between 0 (Completed) and 1 (Abandoned)"
        );

        // Find Task by ID
        for (uint256 i = 0; i < rooms[_roomId].tasks.length; i++) {
            if (rooms[_roomId].tasks[i].id == _taskId) {
                if (_status == 0) {
                    rooms[_roomId].tasks[i].votingStartedAt = block.timestamp;
                    rooms[_roomId].tasks[i].isCompletedRequested = true;
                    rooms[_roomId].tasks[i].autoTrigger = true;
                } else {
                    rooms[_roomId].tasks[i].votingStartedAt = block.timestamp;
                    rooms[_roomId].tasks[i].isCompletedRequested = true;
                    rooms[_roomId].tasks[i].autoTrigger = true;
                }
                break;
            }
        }
    }

    function voteOnTask(
        uint256 _roomId,
        uint256 _taskId,
        uint256 _vote
    ) public {
        require(_vote >= 0 && _vote <= 1, "Vote must be between 0 and 1");

        for (uint256 i = 0; i < rooms[_roomId].tasks.length; i++) {
            if (rooms[_roomId].tasks[i].id == _taskId) {
                if (_vote == 0) {
                    rooms[_roomId].tasks[i].yesVoted++;
                } else {
                    rooms[_roomId].tasks[i].noVoted++;
                }
                break;
            }
        }
    }

    // Automation
    function performActionOnTaskAfterVoting(
        uint256 _roomId,
        uint256 _taskId
    ) public {
        // find the task by id and then perform action
        for (uint256 i = 0; i < rooms[_roomId].tasks.length; i++) {
            if (rooms[_roomId].tasks[i].id == _taskId) {
                if (
                    rooms[_roomId].tasks[i].yesVoted >
                    rooms[_roomId].tasks[i].noVoted
                ) {
                    if (rooms[_roomId].tasks[i].isCompletedRequested) {
                        rooms[_roomId].tasks[i].status = "completed";
                    } else {
                        rooms[_roomId].tasks[i].status = "abandoned";
                    }
                } else {
                    if (rooms[_roomId].tasks[i].isCompletedRequested) {
                        rooms[_roomId].tasks[i].isCompletedRequested = false;
                    } else {
                        rooms[_roomId].tasks[i].isAbandonedRequested = false;
                    }
                }
                break;
            }
            rooms[_roomId].tasks[i].isCompletedRequested = false;
            rooms[_roomId].tasks[i].isAbandonedRequested = false;
            rooms[_roomId].tasks[i].yesVoted = 0;
            rooms[_roomId].tasks[i].noVoted = 0;
            rooms[_roomId].tasks[i].autoTrigger = false;
            rooms[_roomId].tasks[i].votingStartedAt = 0;
        }
    }
}
