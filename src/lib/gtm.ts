declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const pushToDataLayer = (data: object) => {
  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push(data);
};

export type DeliveryAddress = {
  name: string;
  phone: string;
  house: string;
  area: string;
  city: string;
  pincode: string;
};

// Google Ads Enhanced Conversions format (GTM hashes it before sending).
// Do NOT map these fields as GA4 event parameters - GA4 does not allow PII.
export const buildUserData = (address: DeliveryAddress | null) => {
  if (!address) return undefined;

  const [firstName, ...rest] = address.name.trim().split(/\s+/);

  return {
    phone_number: `+91${address.phone}`,
    address: {
      first_name: firstName,
      last_name: rest.join(" "),
      street: `${address.house}, ${address.area}`,
      city: address.city,
      postal_code: address.pincode,
      country: "IN",
    },
  };
};
