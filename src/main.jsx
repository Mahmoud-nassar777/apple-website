import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import * as Sentry from "@sentry/react";

// التهيئة المحدثة للإصدار 8
Sentry.init({
  dsn: "https://d674932a77e6d9b9ced1190d70fd4691@o4506876178464768.ingest.us.sentry.io/4506876181151744",
  integrations: [
    Sentry.browserTracingIntegration(), // تغيير من browserTracingIntegration()
    Sentry.replayIntegration({ // تغيير من replayIntegration()
      maskAllText: false,
      blockAllMedia: false,
    }),
    // تم دمج metrics تلقائيًا ولا يحتاج لتهيئة منفصلة
  ],
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  
  // إعدادات العينات
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)