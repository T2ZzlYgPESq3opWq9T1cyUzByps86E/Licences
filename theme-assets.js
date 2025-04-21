(function () {
  const d = location.hostname.replace("www.", "").replace(/\./g, "_"),
  f = {
  apiKey: "AIzaSyBGmAclzNQtsnIjV6nMYOts1Xft_I52NwQ",
  authDomain: "themelicensedb.firebaseapp.com",
  databaseURL: "https://themelicensedb-default-rtdb.firebaseio.com",
  projectId: "themelicensedb",
  storageBucket: "themelicensedb.firebasestorage.app",
  messagingSenderId: "854131343734",
  appId: "1:854131343734:web:1f29ed156de8e5f6457a57",
  measurementId: "G-GYNV4PCC12"
  };
  if (!firebase.apps.length) firebase.initializeApp(f);
  firebase.database().ref("assets/" + d).once("value").then(snap => {
    const a = snap.val();
    if (!a) return document.body.innerHTML = "";
    if (a.css) {
      const l = document.createElement("link");
      l.rel = "stylesheet"; l.href = a.css; document.head.appendChild(l);
    }
    if (a.js) {
      const j = document.createElement("script");
      j.src = a.js; document.body.appendChild(j);
    }
  }).catch(() => document.body.innerHTML = "");
})();
