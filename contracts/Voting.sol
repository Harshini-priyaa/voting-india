// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    // Candidate structure
    struct Candidate {
        string name;
        uint256 voteCount;
    }

    // Candidates array to store candidates
    Candidate[] public candidates;

    // Mapping to keep track of whether a user has voted or not
    mapping(address => bool) public hasVoted;

    // User structure to store user data
    struct User {
        string Id;
        string uname;
        string password;
        string imgaddr;
    }

    // Users array to store user data
    User[] public users;

    // Modifier to check if the user has not voted already
    modifier notVotedAlready() {
        require(!hasVoted[msg.sender], "You have already voted.");
        _;
    }

    // Constructor - initialize the candidates
    constructor(string[] memory _candidateNames) {
        initializeCandidates(_candidateNames);
    }

    // Initialize the candidates
    function initializeCandidates(string[] memory _candidateNames) private {
        for (uint256 i = 0; i < _candidateNames.length; i++) {
            candidates.push(Candidate(_candidateNames[i], 0));
        }
    }

    // User votes for a candidate
    function vote(uint256 _candidateIndex) public notVotedAlready() {
        require(_candidateIndex < candidates.length, "Invalid candidate index.");

        // Increment the vote count for the candidate
        candidates[_candidateIndex].voteCount++;

        // Mark the user as voted
        hasVoted[msg.sender] = true;
    }

    // Get candidate details by index
    function getCandidate(uint256 _candidateIndex) public view returns (string memory, uint256) {
        require(_candidateIndex < candidates.length, "Invalid candidate index.");
        Candidate memory candidate = candidates[_candidateIndex];
        return (candidate.name, candidate.voteCount);
    }

    // Add user information
    function addUser(
        string memory _Id,
        string memory _uname,
        string memory _password,
        string memory _imgaddr
    ) public {
        User memory newUser = User({
            Id: _Id,
            uname: _uname,
            password: _password,
            imgaddr: _imgaddr
        });

        users.push(newUser);
    }

    // Get the total number of users
    function getUserCount() public view returns (uint256) {
        return users.length;
    }

    // Get user details by index
    function getUser(uint256 _userIndex) public view returns (string memory, string memory, string memory, string memory) {
        require(_userIndex < users.length, "Invalid user index.");
        User memory user = users[_userIndex];
        return (user.Id, user.uname, user.password, user.imgaddr);
    }


    // Function to get the candidate with the highest number of votes
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
