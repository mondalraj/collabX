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
        // participants
        // comments/chat
        // proposals
        // tasks
    }

    mapping(uint256 => ProjectRoom) public rooms;

    uint256 public numberOfRooms = 0;

    // function createRoom
    // function getProjectRoom
    // function completeProjectRoom

    // function addParticipant
    // function leaveOrKickParticipant
    // function getProjectRoomParticipants

    // function addComment
    // function getProjectRoomComments

    // function addProposal
    // function getProjectRoomProposals
    // function voteOnProposal
    // function performActionOnProposalAfterVoting

    // function getProjectRoomTasks
    // function changeTaskStatus
    // function voteOnTask

}