declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const pushToDataLayer = (data: object) => {
  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push(data);
};
