// npm i @sentry/react
// npm i @sentry/tracing
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

function init() {
  Sentry.init({
    dsn:
      "https://8586988d34874a26a881309144592b4c@o561192.ingest.sentry.io/5697774",
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}

function log(error) {
  Sentry.captureException(error);
  console.log(error);
}

const logger = {
  init,
  log,
};

export default logger;
