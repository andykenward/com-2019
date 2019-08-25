/* eslint-disable @typescript-eslint/camelcase */
export const GA_TRACKING_ID = "UA-143382211-1"

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  //@ts-ignore
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label: string
  value: string
}) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  //@ts-ignore
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
