const sendPayment = async (receiver, amount) => {
    const paymentContract = new ethers.Contract(PAYMENT_CONTRACT_ADDRESS, PaymentContract.abi, provider.getSigner());
    const transaction = await paymentContract.sendPayment(receiver, ethers.utils.parseEther(amount), "Payment description", { value: ethers.utils.parseEther(amount) });
    await transaction.wait();
    console.log("Payment sent!");
};
