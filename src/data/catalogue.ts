export type Product = {
  name: string;
  slug: string;
};

export type Category = {
  number: string;
  name: string;
  slug: string;
  shortDescription: string;
  audience: 'home' | 'business' | 'both';
  products: Product[];
};

export const categories: Category[] = [
  {
    number: '01',
    name: 'Household Storage & Organization',
    slug: 'household-storage-organization',
    shortDescription: 'Practical storage pieces for orderly everyday living.',
    audience: 'home',
    products: [
      ['Modular drawer units', 'modular-drawer-units'],
      ['Plastic storage boxes with lids', 'storage-boxes-with-lids'],
      ['Multipurpose utility baskets', 'multipurpose-utility-baskets'],
      ['Under-bed storage containers', 'under-bed-storage-containers'],
      ['Plastic shoe racks', 'plastic-shoe-racks'],
      ['Laundry baskets and hampers', 'laundry-baskets-and-hampers'],
    ].map(([name, slug]) => ({ name, slug })),
  },
  {
    number: '02',
    name: 'Kitchen & Dining Essentials',
    slug: 'kitchen-dining-essentials',
    shortDescription: 'Useful kitchen and table essentials for everyday routines.',
    audience: 'home',
    products: [
      ['Airtight grocery containers', 'airtight-grocery-containers'],
      ['Spice racks and masala boxes', 'spice-racks-and-masala-boxes'],
      ['Dish drainer racks', 'dish-drainer-racks'],
      ['Water jugs and bottles', 'water-jugs-and-bottles'],
      ['Serving trays', 'serving-trays'],
      ['Plastic bowls and colanders', 'plastic-bowls-and-colanders'],
    ].map(([name, slug]) => ({ name, slug })),
  },
  {
    number: '03',
    name: 'Bathroom Utilities',
    slug: 'bathroom-utilities',
    shortDescription: 'Essential bathroom utilities for homes and shared spaces.',
    audience: 'home',
    products: [
      ['Plastic buckets', 'plastic-buckets'],
      ['Water mugs', 'water-mugs'],
      ['Wash basins and tubs', 'wash-basins-and-tubs'],
      ['Bathroom stools', 'bathroom-stools'],
      ['Soap cases', 'soap-cases'],
      ['Corner wall shelves', 'corner-wall-shelves'],
    ].map(([name, slug]) => ({ name, slug })),
  },
  {
    number: '04',
    name: 'Home Cleaning & Waste Management',
    slug: 'home-cleaning-waste-management',
    shortDescription: 'Cleaning and waste-management essentials for daily care.',
    audience: 'both',
    products: [
      ['Pedal dustbins', 'pedal-dustbins'],
      ['Swing-lid wastebaskets', 'swing-lid-wastebaskets'],
      ['Plastic floor brooms', 'plastic-floor-brooms'],
      ['Dustpans and cleaning brushes', 'dustpans-and-cleaning-brushes'],
      ['Spin mop buckets', 'spin-mop-buckets'],
      ['Clothes hangers and drying clips', 'clothes-hangers-and-drying-clips'],
    ].map(([name, slug]) => ({ name, slug })),
  },
  {
    number: '05',
    name: 'Food Packaging & Takeaway Containers',
    slug: 'food-packaging-takeaway-containers',
    shortDescription: 'Packaging essentials for food service and takeaway needs.',
    audience: 'business',
    products: [
      ['Round plastic food containers', 'round-plastic-food-containers'],
      ['Compartmental meal boxes', 'compartmental-meal-boxes'],
      ['Aluminum foil containers', 'aluminum-foil-containers'],
      ['Cling film rolls', 'cling-film-rolls'],
      ['Aluminum foil rolls', 'aluminum-foil-rolls'],
      ['Paper parcel boxes', 'paper-parcel-boxes'],
    ].map(([name, slug]) => ({ name, slug })),
  },
  {
    number: '06',
    name: 'Disposable Cups, Plates & Cutlery',
    slug: 'disposable-cups-plates-cutlery',
    shortDescription: 'Convenient disposables for service, catering and events.',
    audience: 'both',
    products: [
      ['Paper tea and coffee cups', 'paper-tea-and-coffee-cups'],
      ['Clear plastic juice glasses', 'clear-plastic-juice-glasses'],
      ['Disposable paper and plastic plates', 'disposable-paper-and-plastic-plates'],
      ['Plastic spoons and forks', 'plastic-spoons-and-forks'],
      ['Wooden cutlery sets', 'wooden-cutlery-sets'],
      ['Drinking straws', 'drinking-straws'],
    ].map(([name, slug]) => ({ name, slug })),
  },
  {
    number: '07',
    name: 'Carry Bags & Garbage Liners',
    slug: 'carry-bags-garbage-liners',
    shortDescription: 'Bags and liners for shopping, packing and waste handling.',
    audience: 'both',
    products: [
      ['Plastic carry bags', 'plastic-carry-bags'],
      ['Non-woven shopping bags', 'non-woven-shopping-bags'],
      ['Courier bags', 'courier-bags'],
      ['Garbage bags and bin liners', 'garbage-bags-and-bin-liners'],
      ['Clear zip-lock pouches', 'clear-zip-lock-pouches'],
      ['Transparent garment bags', 'transparent-garment-bags'],
    ].map(([name, slug]) => ({ name, slug })),
  },
  {
    number: '08',
    name: 'Packing Tapes, Wraps & Ropes',
    slug: 'packing-tapes-wraps-ropes',
    shortDescription: 'Practical packing materials for commercial and everyday use.',
    audience: 'business',
    products: [
      ['Transparent packing tapes', 'transparent-packing-tapes'],
      ['Brown carton tapes', 'brown-carton-tapes'],
      ['Stretch film rolls', 'stretch-film-rolls'],
      ['Bubble wrap rolls', 'bubble-wrap-rolls'],
      ['Nylon ropes and plastic twines', 'nylon-ropes-and-plastic-twines'],
      ['Box strapping rolls', 'box-strapping-rolls'],
    ].map(([name, slug]) => ({ name, slug })),
  },
  {
    number: '09',
    name: 'Industrial Crates, Drums & Commercial Bins',
    slug: 'industrial-crates-drums-commercial-bins',
    shortDescription: 'Hard-working containers and bins for commercial operations.',
    audience: 'business',
    products: [
      ['Perforated vegetable and fruit crates', 'perforated-vegetable-fruit-crates'],
      ['Solid industrial crates', 'solid-industrial-crates'],
      ['Bakery and milk crates', 'bakery-and-milk-crates'],
      ['Plastic water drums and barrels', 'plastic-water-drums-and-barrels'],
      ['Heavy-duty commercial round tubs', 'heavy-duty-commercial-round-tubs'],
      ['Large wheeled outdoor dustbins', 'large-wheeled-outdoor-dustbins'],
    ].map(([name, slug]) => ({ name, slug })),
  },
  {
    number: '10',
    name: 'Tarpaulins, Agriculture & Construction Sheets',
    slug: 'tarpaulins-agriculture-construction-sheets',
    shortDescription: 'Protective sheets and practical supplies for outdoor work.',
    audience: 'business',
    products: [
      ['Waterproof HDPE tarpaulin sheets', 'waterproof-hdpe-tarpaulin-sheets'],
      ['Silpaulin sheets', 'silpaulin-sheets'],
      ['UV nursery grow bags', 'uv-nursery-grow-bags'],
      ['Plastic flower pots', 'plastic-flower-pots'],
      ['Garden watering cans and sprayers', 'garden-watering-cans-and-sprayers'],
      ['Green agro shade nets', 'green-agro-shade-nets'],
      ['Black LDPE construction plastic rolls', 'black-ldpe-construction-plastic-rolls'],
    ].map(([name, slug]) => ({ name, slug })),
  },
];

export const categoryBySlug = new Map(categories.map((category) => [category.slug, category]));

export function categoryImage(category: Category) {
  return `/images/categories/${category.slug}.webp`;
}
