import { StompConfig } from "@stomp/ng2-stompjs";

export const stompConfig: StompConfig = {
    url: 'ws://localhost:9090/websocket',
    headers: {
        login: '',
        passcode: ''
    },
    heartbeat_in: 0,
    heartbeat_out: 20000,
    reconnect_delay: 1000,
    debug: false
};