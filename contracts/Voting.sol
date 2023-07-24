// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    //  candidate oda structure
    struct Candidate {
        string name;
        uint256 voteCount;
    }

    //  candidates array la store pandra
    Candidate[] public candidates; 

    // 
    mapping(address => bool) public hasVoted;

    // user 1 time tha vote panna mudium
    modifier notVotedAlready() {
        require(!hasVoted[msg.sender], "You have already voted.");
        _;
    }

    // Constructor - initialize the candidate   
    function initializeCandidates(string[] memory _candidateNames) private {
        for (uint256 i = 0; i < _candidateNames.length; i++) {
            candidates.push(Candidate(_candidateNames[i], 0));
        }
       
    
    }
    constructor(string[] memory _candidateNames) {
        initializeCandidates(_candidateNames);
    }
    // user candidate ku vote poda
    function vote(uint256 _candidateIndex) public notVotedAlready() {
        require(_candidateIndex < candidates.length, "Invalid candidate index.");
        
        //  vote count ( candidate)ku increment panna 
        candidates[_candidateIndex].voteCount++;
        
        // user as voted
        hasVoted[msg.sender] = true;
    }

    //   candidates oda count pakka 
    function getCandidateCount() public view returns (uint256) {
        return candidates.length;
    }

    // candidate oda details pakka 
    function getCandidate(uint256 _candidateIndex) public view returns (string memory, uint256) {
        require(_candidateIndex < candidates.length, "Invalid candidate index.");
        Candidate memory candidate = candidates[_candidateIndex];
        return (candidate.name, candidate.voteCount);
    }

    // final result function
    function result() public view returns (string memory, uint256) {
        uint256 highestVotes = 0;
        string memory winnerName;

        for (uint256 i = 0; i < candidates.length; i++) {
            if (candidates[i].voteCount > highestVotes) {
                highestVotes = candidates[i].voteCount;
                winnerName = candidates[i].name;
            }
        }

        return (winnerName, highestVotes);
    }
     }



