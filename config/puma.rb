#!/usr/bin/env puma

environment "production"
basedir = "/opt/project/chinawhere"
daemonize true
threads 2,16

bind  "unix:///tmp/puma.sock"
pidfile  "#{basedir}/tmp/puma.pid"
state_path "#{basedir}/tmp/puma.state"
activate_control_app
