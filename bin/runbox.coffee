fs = require 'fs'
open = require 'open'
express = require 'express'
program = require 'commander'

port = 1337

exports.execCommand = () ->
  execCommand()

execCommand = () ->
  program
    .option('--script <script>', 'Full path to server code script.')
    .option('--config <config>', 'Execution context config.')

  program.parse process.argv
  # if !program.args.length
  #   program.help()

  if not fs.existsSync program.script
    console.log "Not found script file " + program.script
    process.exit 1

  if not fs.existsSync program.config
    console.log "Not found config file " + program.config
    process.exit 1

  runServer program.script, program.config

runServer = (scriptPath, configPath) ->
  app = express()
  app.use express.static(__dirname + "/..")

  app.get '/developer.code.js', (req, res) ->
    res.setHeader 'Content-Type', 'application/javascript'
    res.end loadFile(scriptPath)

  app.get '/runbox.stub.config.js', (req, res) ->
    res.setHeader 'Content-Type', 'application/javascript'
    res.end loadFile(configPath)
  
  app.listen port
 
  url = "http://127.0.0.1:#{port}/runbox.html"
  
  console.log "Server running at #{url}"
  open url

loadFile = (path) ->
  fs.readFileSync path , 'utf8'
