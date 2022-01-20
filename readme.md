# TypeScript workshops setup test

If you're reading this, you're probably preparing for TypeScript workshops with me.

I am more than happy about it 😊

⚠️ Please do below setup check to make sure you have environment ready for workshops. In will save us time on firefighting with environment setup on the beginning of our workshops.

## Prepare your machine

You'll gonna need one of currently supported LTS versions of

- node.js
- npm

If not specified otherwise in preparation docs you should receive before workshops.

### Install node.js & npm if needed

I recommend you to use `nvm` for this, but below you have all options:

- Node.js
  - (❇️ recommended) [nvm - Node Version Manager for UNIX sytems](https://github.com/nvm-sh/nvm)
  - [nvm-windows - Node Version Manager for Windows](https://github.com/coreybutler/nvm-windows)
  - [Install globally build from Node.js](https://nodejs.org/en/)
- npm
  - Should be already installed with Node.js (no matter how you installed Node.js)

## Check your environment

Steps

1. Clone the repo on your local machine `git clone https://github.com/michalczukm/typescript-workshops-setup-test.git`
2. Navigate to `typescript-workshops-setup-test` with `cd typescript-workshops-setup-test` in your terminal
3. Install dependencies with `npm ci`
4. Run `npm start`

You should see output similar to the one below

```shell
➜  typescript-workshops-setup-test git:(main) npm start

> typescript-workshops-setup-test@1.0.0 start
> ts-node node-test.ts && parcel index.html --open

✅ Node.js setup looks legit
Server running at http://localhost:1234
✨ Built in 49ms
```

And your default browser should display page with checks results.
If everything is fine, you should see page as below

![passed setup test results](./data/passed-setup-test.png)
