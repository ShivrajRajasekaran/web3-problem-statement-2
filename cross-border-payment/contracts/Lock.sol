// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Payment {
    event PaymentSent(address indexed sender, address indexed receiver, uint amount, string message);
    event PaymentReceived(address indexed receiver, uint amount);

    function sendPayment(address payable receiver, uint amount, string memory message) public payable {
        require(msg.value == amount, "Amount must match the sent value.");
        
        receiver.transfer(amount);
        emit PaymentSent(msg.sender, receiver, amount, message);
        emit PaymentReceived(receiver, amount);
    }
}
