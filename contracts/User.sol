// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract userdata{
    struct user{
        string uname;
        string password;
        string imgaddr;
    }
    user[] public users;

    function userinfo(
        string memory _uname,
        string memory _password,
        string memory _imgadd
    ) public{
        user memory newuser = user({
            uname: _uname,
            password: _password,
            imgaddr: _imgadd
        });

        users.push(newuser);
    }  

    function getusercount()public view returns (uint256){
        return users.length;
    }
}