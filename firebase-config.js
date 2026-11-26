import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDhqemsM3Lt6JmQDsp80pzMgLmp9hMWCTE",
  authDomain: "tproject-5f51d.firebaseapp.com",
  projectId: "tproject-5f51d",
  storageBucket: "tproject-5f51d.firebasestorage.app",
  messagingSenderId: "562686794215",
  appId: "1:562686794215:web:ae7fe61edee3941834c542",
  measurementId: "G-6Y3Y0ZY2SP"
};

export const ADMIN_EMAIL = "tanmoy@bca.bala";

export const app = initializeApp(firebaseConfig);
try { getAnalytics(app); } catch (e) { /* Ignore local analytics errors */ }

export const auth = getAuth(app);
export const db = getFirestore(app);

export function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}