# DRCT Decentralized Application

![Wormhole](./src/imgs/readme.png)

Code for dapp.ddacoop.org

    Requirements:
        Node.js
        Metamask

To clone on local machine and use contracts on Ethereum network:

    git clone https://www.github.com/DecentralizedDerivatives/drct_standard_dapp

    cd drct_standard_dapp

    npm install

    npm run dev

Full documentation of the contracts at: [https://www.github.com/DecentralizedDerivatives/DRCT_standard](https://www.github.com/DecentralizedDerivatives/DRCT_standard)

This webpage builds the DApp at dapp.ddacoop.org

#Production in Heroku

The Heroku instance automatically installs node_modules, then kicks off the postinstall script.  Once the app is built, Heroku automatically calls npm start.
