// import * as Sentry from "@sentry/react";
// import { Integrations } from "@sentry/tracing";
// import config from "../config.json";

function init() {
  // Sentry.init({
  //   dsn: config.logger_dsn,
  //   integrations: [new Integrations.BrowserTracing()],
  //   // We recommend adjusting this value in production, or using tracesSampler
  //   // for finer control
  //   tracesSampleRate: 1.0,
  // });
}

function log(error) {
  // Sentry.captureException(error);
  console.error(error);
}

export default {
  init,
  log,
};
