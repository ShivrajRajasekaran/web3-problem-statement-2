const hre = require("hardhat");

async function main() {
    const Payment = await hre.ethers.getContractFactory("Payment");
    const payment = await Payment.deploy(); // Include constructor args if needed
    await payment.deployed();
    console.log("Payment contract deployed at:", payment.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
