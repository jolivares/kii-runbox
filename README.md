# kii-runbox

Command line tool which allows you to run your server extension code into your default browser.
That way, you can leverage the built-in developer console of your choice to debug your server extension code.

## Installation

    npm install
    sudo npm link

## Usage

    kii-runbox --script=/absolute/path/to/your/script --config=/absolute/path/to/config

## Config. File

It has to contain the following params:
    
    // your App ID
    APP_ID  = '1234'
    // your App Key
    APP_KEY = '123456789'
	// name of the function to be inovked
    ENDPOINT = doStuff
    // Milliseconds it will wait for your code to finish
    EXECUTION_TIMEOUT = 10000
    // args that will be passed to your function
    PARAMS = {
      'param-1': '0672cd2c-8773-44e0-9854-94d0249fd2b8',
      'paramd-2': ['54e087bc-c37f-42e7-a89f-972ad932d9f4','e983ce76-cdc4-4de7-a2ac-109bb8ce96d6']
    }
