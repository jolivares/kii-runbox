// ~ Execution stuff

function execute() {
	var ctx = {};

  ctx.headers = {};
  ctx.headers['X-Kii-AppID'] = APP_ID
  ctx.headers['X-Kii-AppKey'] = APP_KEY

  ctx.getAppID = function() { return APP_ID }
  ctx.getAppKey = function() { return APP_KEY }
  ctx.getAccessToken = function() { return ACCESS_TOKEN } 

  if(ENDPOINT.length == 2) { // sync
    console.log('>>> Synchronous Execution STARTED');
    ENDPOINT(PARAMS, ctx);
    console.log('>>> Synchronous Execution FINISHED');
  } else if(ENDPOINT.length == 3) { // async
    console.log('>>> Asynchronous Execution STARTED');
    ENDPOINT(PARAMS, ctx, done);
    setTimeout(function() { 
      console.log('>>> Asynchronous Execution FINISHED');
      }, EXECUTION_TIMEOUT);
  } else { // bad definition
    console.error("Bad endpoint definition. Found "
      + ENDPOINT.length + " parameters.");
  }
}

function done(response) {
	console.log("Response got from server:\n" + JSON.stringify(response));
}