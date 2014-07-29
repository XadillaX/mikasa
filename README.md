# Ex[frame]ss

A framework for Express.js!

## Controller

You can create your controller under `controller` folder. The filename should be `controllernameController`. You can use
`helper.common.getController("controllername")` to get the controller.

And you can define your own router under `router` folder. You can name the filename any name. And in the router file, you
have to write down a get object and a post object like:

```javascript
exports.get = {
    "routerName"    : someController.oneFunction
};
```
