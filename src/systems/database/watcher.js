import { Database } from './database.js';
import { notification } from 'antd';

var APP_NAME = "Moves";

var init = {
    signInCheck: 0,
    newUserCheck: 0
}

class Watcher_C {

    constructor() {
        this._watchDatabaseChange();
    }

    _watchDatabaseChange() {
        Database.ref('serverStats/totalDailyLogins').on('value', data => {
            if (init.signInCheck > 0)
                openNotification('User signed in', `Somebody just signed into ${APP_NAME}`);
            else
                init.signInCheck++;
        })

        Database.ref('userData').orderByChild('info/dateJoined').limitToLast(1).on('child_added', data => {
            let user = data.val();
            let name = user.name;

            if (init.newUserCheck > 0)
                openNotification('Welcome new user', `${name} just joined ${APP_NAME}!`);
            else
                init.newUserCheck++;
        })
    }

}

const openNotification = (message, description) => {
    notification.open({
        message: message,
        description: description
    });
}

export const Watcher = new Watcher_C();