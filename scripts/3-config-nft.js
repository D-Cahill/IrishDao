import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x669b5252D3Cc5b0d64F3aA98d3BbE09F9cCe0581");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Irish DAO",
        description: "This NFT will give you access to IrishDAO!",
        image: readFileSync("scripts/assets/ire.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();