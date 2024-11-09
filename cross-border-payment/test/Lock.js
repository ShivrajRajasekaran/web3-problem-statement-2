const { expect } = require("chai");

describe("Payment Contract", function () {
    let Payment, payment, owner, addr1, addr2;

    beforeEach(async function () {
        Payment = await ethers.getContractFactory("Payment");
        [owner, addr1, addr2] = await ethers.getSigners();
        payment = await Payment.deploy();
        await payment.deployed();
    });

    it("Should send payment", async function () {
        const amount = ethers.utils.parseEther('1.0'); // 1 Ether
        
        // Sending payment
        await expect(payment.sendPayment(addr1.address, amount, "Test Payment", { value: amount }))
            .to.emit(payment, "PaymentSent")
            .withArgs(owner.address, addr1.address, amount, "Test Payment");
        
        const addr1Balance = await addr1.getBalance();
        expect(addr1Balance).to.equal(amount);
    });
});
