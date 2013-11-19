// ~ Execution stuff

function execute() {
	var ctx = {};

  ctx.headers = {};
  ctx.headers['X-Kii-AppID'] = APP_ID
  ctx.headers['X-Kii-AppKey'] = APP_KEY

  ctx.getAppID = function() { return APP_ID }
  ctx.getAppKey = function() { return APP_KEY }
  ctx.getAccessToken = function() { return ACCESS_TOKEN }

  console.log('>>> Execution STARTED')

  ENDPOINT(PARAMS, ctx, done);
  setTimeout(function() { 
    console.log('>>> Execution FINISHED')
    }, EXECUTION_TIMEOUT);
}

function done(response) {
	console.log("Response got from server:\n" + JSON.stringify(response));
}