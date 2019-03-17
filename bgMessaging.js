// @flow
import firebase from "react-native-firebase";

export default async message => {
  // handle your message
  console.log("On background Message : ");
  console.log(JSON.stringify(message));

  const DataNotification = new firebase.notifications.Notification({
    sound: "default",
    show_in_foreground: true,
    show_in_background: true
  })
    .setTitle(message.data.title)
    // .setSubtitle(notification.subtitle)
    .setBody(message.data.body)
    // .setData(notification.data)
    .android.setChannelId(message.data.channelId)
    // .android.setBadgeIconType()
    .android.setLargeIcon("ic_notification")
    // .android.setSmallIcon("ic_notification")
    .android.setColor(message.data.color)
    .android.setBigPicture(message.data.big_picture)
    .android.setPriority(firebase.notifications.Android.Priority.High);

  firebase
    .notifications()
    .displayNotification(DataNotification)
    .catch(err => console.error(err));

  return Promise.resolve();
};
