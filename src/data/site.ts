export const site = {
  name: 'Cannanore Plastic House',
  shortName: 'CPH',
  tagline: 'Everyday essentials and business solutions.',
  description:
    'Cannanore Plastic House in Kannur offers household essentials, kitchenware, packaging materials, commercial supplies, industrial plastics and agricultural solutions.',
  founded: 1968,
  location: 'Kannur, Kerala',
  address: {
    lines: ['PPS Tower, First Floor', 'M.A. Road, Kannur, Kerala 670001'],
    landmark: 'Near Kannur Railway Station and Camp Bazar Juma Masjid',
  },
  openingHours: 'Monday–Saturday, 9:30 am–9:00 pm',
  phone: '+91 89211 55255',
  phoneHref: 'tel:+918921155255',
  email: 'cannanoreplastics@gmail.com',
  emailHref: 'mailto:cannanoreplastics@gmail.com',
  whatsappNumber: '918921155255',
  mapUrl: 'https://maps.app.goo.gl/B5MuJfxpH3rLXMD3A',
  instagramUrl: 'https://www.instagram.com/cannanoreplastics/',
  consent:
    'By submitting this form, I agree that Cannanore Plastic House may use my contact details to respond to my enquiry and communicate with me regarding the products or services requested. My information will be handled responsibly and will not be sold to third parties.',
} as const;

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products/' },
  { label: 'Business Solutions', href: '/business-solutions/' },
  { label: 'About Us', href: '/about/' },
  { label: 'Visit Us', href: '/visit-us/' },
] as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
