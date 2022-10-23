const fs = require('fs');
const path = require('path');

// Import Sisyphus Contract - Artifact + Address
fs.copyFileSync(
  path.join(__dirname, "../../chain/artifacts/contracts/Sisyphus.sol/Sisyphus.json"),
  path.join(__dirname, "../src/assets/contracts/Sisyphus.json"),
);
fs.copyFileSync(
  path.join(__dirname, "../../chain/address.json"),
  path.join(__dirname, "../src/assets/contracts/Sisyphus.address.json"),
);
