window.checkLicense = true;
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
const s = document.createElement("script");
s.src = "https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js";
s.onload = () => {
  const db = document.createElement("script");
  db.src = "https://www.gstatic.com/firebasejs/9.22.2/firebase-database-compat.js";
  db.onload = () => {
    firebase.initializeApp(f);
    firebase.database().ref("licenses/" + d).once("value").then(snap => {
      const v = snap.val();
      if (v?.status === "active") {
        const p2 = document.createElement("script");
        p2.src = "https://licences.pages.dev/theme-assets.js";
        document.body.appendChild(p2);
      } else document.body.innerHTML = "";
    }).catch(() => document.body.innerHTML = "");
  };
  document.head.appendChild(db);
};
document.head.appendChild(s);

<!-- Backup fallback other script tag  -->
setTimeout(() => { if (typeof checkLicense === "undefined") document.body.innerHTML = ""; }, 300);
