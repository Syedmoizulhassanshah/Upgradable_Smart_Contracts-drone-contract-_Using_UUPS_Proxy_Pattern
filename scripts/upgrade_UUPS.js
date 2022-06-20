// scripts/prepare_upgrade.js
async function main() {
    const proxyAddress = '0x1397cbC428E0Bfc599eFB31640F909C12144CDB5';
   
    const DroneContractV2 = await ethers.getContractFactory("DroneContractV2");
    console.log("Preparing upgrade...");
    const DroneContractV2Proxy = await upgrades.upgradeProxy(proxyAddress, DroneContractV2);
    console.log("DroneContractV2Proxy deployed to:", DroneContractV2Proxy.address);
  }
   
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });