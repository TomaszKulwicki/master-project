// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ClickerTest {
    uint256 public counter;
    string public message;

    function click() public {
        counter += 1;
    }

    function setMessage(string calldata _msg) public {
        message = _msg;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }

    function getCounter() public view returns (uint256) {
        return counter;
    }
}