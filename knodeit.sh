#!/bin/bash

start() {
    pm2 start ./ecosystem.json
}

stop() {
    pm2 stop ./ecosystem.json
}

restart() {
    stop
    start
}

status() {
    pm2 status ./ecosystem.json
}


case "$1" in
    start)
        start
    ;;
    stop)
        stop
    ;;
    restart)
        restart
    ;;
    status)
        status
    ;;
    *)
        echo "Usage:  {start|stop|restart|status}"
        exit 1
    ;;
esac