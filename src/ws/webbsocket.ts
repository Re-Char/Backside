import { OnWSConnection, OnWSMessage, WSController } from "@midwayjs/core";
import { Context } from "@midwayjs/ws";
import * as http from 'http';

@WSController()
export class WebSocket {

    @OnWSConnection()
    async connect(socket: Context, request: http.IncomingMessage) {
        return JSON.stringify({
            code: 0,
            message: 'Connect successfully!!!'
        })
    }

    @OnWSMessage('message') 
    async receive(msg: Buffer) {
        return JSON.stringify({
            code: 0,
            message: 'Receive successfully!!!',
            data: msg.toString()
        })
    }
}