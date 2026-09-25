export type Product = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  applications: string[];
  colours: string[];
  dimensions: string;
  compliance: string;
  supplyOnly: boolean;
  image: string;
  alt: string;
  hero?: boolean;
};

export const styles = [
  {
    slug: "black-flat-top",
    name: "Black Flat Top",
    kicker: "Flagship",
    summary: "Modern vertical-bar aluminium with a flat top rail. The style most Sydney pools ask for first.",
    body: "Black flat top pool fencing is a vertical aluminium barrier with a level top rail, powder coated for Australian sun and coastal air. It keeps sightlines open, suits contemporary homes, and is the product we specify most often for new pools and full replacements across Sydney.",
    image: "/images/gallery/poolfencingflattopfencing-jpg.jpg",
    alt: "Black flat top pool fence around a pool under construction",
    points: ["Open view of the pool", "Powder-coated aluminium", "Supply only or Sydney installation", "Designed around the pool layout"],
  },
  {
    slug: "white-flat-top",
    name: "White Flat Top",
    kicker: "Aluminium",
    summary: "The same flat-top geometry in white and light coastal colours.",
    body: "White and light flat-top panels suit rendered homes, coastal blocks and pools where a darker fence would dominate the garden. The construction follows the same vertical-bar approach as black flat top, with colour chosen to sit with the house rather than against it.",
    image: "/images/gallery/pearl-white-flat-top-fencing-result-jpg.jpg",
    alt: "White flat top pool fence and gate beside a brick home",
    points: ["Coastal and light facades", "Same flat-top profile", "Custom powder coat available", "Gate matched to the run"],
  },
  {
    slug: "aluminium",
    name: "Aluminium",
    kicker: "Range",
    summary: "Rust-resistant pool fencing in standard and custom powder-coat colours.",
    body: "Aluminium pool fencing is the practical default for most Sydney residential pools. Panels, posts, brackets, hinges and latches can be supplied as a kit or installed as a complete barrier. Stock colours include black, white, primrose and mill finish, with custom powder coat available.",
    image: "/images/gallery/flat-top-fencing-1-jpg.jpg",
    alt: "Flat top aluminium pool fence",
    points: ["Black, white, primrose, mill", "Custom colours", "Panels, posts and hardware", "DIY kits or installation"],
  },
  {
    slug: "steel",
    name: "Steel",
    kicker: "Strength",
    summary: "Black steel flat top and custom steel pool fencing where a heavier section is needed.",
    body: "Steel pool fencing is used where the run needs a heavier frame, a custom fabrication, or a finish that matches other steelwork on the property. It is finished for exterior use and still has to meet the barrier rules that apply to the pool — material strength does not replace height, gaps or gate operation.",
    image: "/images/gallery/poolfencing-2-jpg.jpg",
    alt: "Black pool fence panels installed in a backyard",
    points: ["Black steel flat top", "Custom fabrication", "Gates built to the opening", "Sydney installation"],
  },
  {
    slug: "glass",
    name: "Glass",
    kicker: "Open view",
    summary: "Frameless and semi-frameless glass pool fencing and glass gates.",
    body: "Glass pool fencing keeps the pool visible and is often chosen on tight or view-focused Sydney sites. Frameless systems use spigots; semi-frameless systems use a lighter frame. Glass still needs compliant height, gaps, gates and a clear non-climbable zone. We install glass across Sydney and can supply components for suitable projects.",
    image: "/images/gallery/poolfencing-1-jpg.jpg",
    alt: "Frameless glass pool fence around a Sydney backyard pool",
    points: ["Frameless and semi-frameless", "Glass gates", "Spigots, hinges and latches", "Site measure before install"],
  },
  {
    slug: "decorative",
    name: "Decorative",
    kicker: "Architectural",
    summary: "Decorative and architectural panels where the design still works as a pool barrier.",
    body: "Decorative pool fencing is for properties that need a more architectural look. The pattern has to remain child-resistant: climbable ledges, wide gaps and horizontal footholds are design problems, not styling details. We look at the panel with the pool rules in mind before recommending it.",
    image: "/images/gallery/colorbond-fence-height-extension-5-result-jpg.jpg",
    alt: "Colorbond fence height extension",
    points: ["Custom panel designs", "Privacy only where compliant", "Checked against climb points", "Quote from photos or a measure"],
  },
  {
    slug: "colorbond",
    name: "Colorbond solutions",
    kicker: "Boundary",
    summary: "Boundary fencing and pool-related Colorbond extensions, designed for the barrier they form.",
    body: "A standard Colorbond boundary fence is not automatically a pool barrier. Where a boundary forms part of the pool enclosure, height, climbability and the side the pool sits on all matter. Extensions — sheet, louvre, slat or lattice — are one way to raise an existing fence, and they have to be designed for that job.",
    image: "/images/gallery/colorbond-louvre-pool-fencing-jpg.jpg",
    alt: "Grey Colorbond fence with a louvre extension beside a pool",
    points: ["Boundary fence options", "Sheet, louvre, slat, lattice", "Not automatically compliant", "Photo check available"],
  },
] as const;

export const supplyProducts: Product[] = [
  {
    slug: "flat-top-panels",
    name: "Flat top pool panels",
    category: "Aluminium",
    summary: "Aluminium flat top panels for DIY kits and replacement runs.",
    applications: ["New pool enclosures", "Panel replacement", "DIY installation"],
    colours: ["Black", "White", "Primrose", "Mill finish", "Custom powder coat"],
    dimensions: "Typically 2.4 m long × 1.2 m high. Other lengths made to the run.",
    compliance: "A 1.2 m panel is a common starting height. The finished barrier is measured on site from finished ground level.",
    supplyOnly: true,
    image: "/images/gallery/poolfencingflattopfencing-jpg.jpg",
    alt: "Black flat top aluminium fence panel with vertical bars",
    hero: true,
  },
  {
    slug: "pool-gates",
    name: "Pool gates",
    category: "Gates",
    summary: "Single pool gates built to suit flat top and other pool fence systems.",
    applications: ["New barriers", "Gate replacement", "Self-closing upgrades"],
    colours: ["Matched to the fence", "Black", "White", "Custom"],
    dimensions: "A common single gate is about 970 mm wide × 1.2 m high. Width is kept practical so the gate can keep closing.",
    compliance: "Pool gates generally need to self-close, self-latch and swing away from the pool. We do not treat a gate as compliant until it is hung and tested.",
    supplyOnly: true,
    image: "/images/gallery/poolfencingflattopfencing-jpg.jpg",
    alt: "Flat top fence line showing the rail a pool gate would match",
  },
  {
    slug: "posts",
    name: "Pool fence posts",
    category: "Components",
    summary: "Square aluminium posts, caps and fixings for flat top systems.",
    applications: ["DIY kits", "Extra corners", "Replacement posts"],
    colours: ["Black", "Matched to panels"],
    dimensions: "Common post section 50 mm × 50 mm, supplied long enough to set into the footing.",
    compliance: "Post spacing follows the panel and the ground. Slopes and corners change the count.",
    supplyOnly: true,
    image: "/images/gallery/poolfencingflattopfencing-jpg.jpg",
    alt: "Vertical fence members between posts on a black flat top fence",
  },
  {
    slug: "brackets",
    name: "Panel brackets",
    category: "Components",
    summary: "Brackets that fix flat top panels to posts.",
    applications: ["Kit assembly", "Panel replacement"],
    colours: ["Matched hardware"],
    dimensions: "Supplied to suit the panel and post system in the kit.",
    compliance: "Fixings need to stay tight. Loose brackets are a common maintenance fault.",
    supplyOnly: true,
    image: "/images/gallery/poolfencingflattopfencing-jpg.jpg",
    alt: "Close view of a flat top rail and vertical balusters",
  },
  {
    slug: "hinges-latches",
    name: "Hinges and latches",
    category: "Hardware",
    summary: "Self-closing hinges and self-latching hardware for pool gates.",
    applications: ["New gates", "Latch replacement", "Gate repairs"],
    colours: ["Black and matched finishes"],
    dimensions: "Selected to the gate weight and the latch height the barrier requires.",
    compliance: "Latch position and shielding depend on the standard that applies. Hardware alone does not prove the gate complies.",
    supplyOnly: true,
    image: "/images/gallery/poolfencingflattopfencing-jpg.jpg",
    alt: "Pool fence rail detail where gate hardware is fitted",
  },
  {
    slug: "glass-components",
    name: "Glass components",
    category: "Glass",
    summary: "Spigots, hinges, latches and glass gate hardware.",
    applications: ["Frameless glass", "Glass gate repairs", "Hardware replacement"],
    colours: ["Stainless and powder-coated options"],
    dimensions: "Specified to glass thickness and the gate.",
    compliance: "Glass panels and hardware are assessed with the barrier, not as isolated parts.",
    supplyOnly: true,
    image: "/images/gallery/poolfencing-1-jpg.jpg",
    alt: "Backyard boundary that may sit beside a glass pool fence",
  },
  {
    slug: "steel-components",
    name: "Steel pool components",
    category: "Steel",
    summary: "Steel panels, gates and fabricated sections for steel pool fencing.",
    applications: ["Custom steel runs", "Gate replacements"],
    colours: ["Black and specified finishes"],
    dimensions: "Made to the measured opening and height.",
    compliance: "Fabrication follows the barrier measurements required for the pool.",
    supplyOnly: true,
    image: "/images/gallery/colorbond-fence-48-jpg.jpg",
    alt: "Dark metal fence above a retaining wall",
  },
  {
    slug: "extension-panels",
    name: "Colorbond extension panels",
    category: "Extensions",
    summary: "Sheet, louvre, slat and lattice sections used to raise an existing fence.",
    applications: ["Boundary height", "Pool-side fence upgrades"],
    colours: ["Colorbond colours to match the existing fence where available"],
    dimensions: "Height and length set from the existing fence and the target barrier.",
    compliance: "An extension does not automatically make a fence a compliant pool barrier. The whole barrier still has to be checked.",
    supplyOnly: true,
    image: "/images/gallery/poolsafefenceextensions-jpg.jpg",
    alt: "Colorbond fence with a lattice extension panel",
  },
  {
    slug: "diy-kits",
    name: "DIY pool fence kits",
    category: "Kits",
    summary: "Panel counts from shorter runs up to longer complete kits, plus fixings.",
    applications: ["Owner installation", "Straight runs", "Simple rectangular pools"],
    colours: ["Black", "White", "Primrose", "Mill finish", "Custom"],
    dimensions: "Kits are commonly built from 2.4 m panels. A 3-panel kit covers about 7 m; larger kits step up by panel.",
    compliance: "The kit supplies the parts. The finished fence still has to suit the pool, the ground and the rules that apply.",
    supplyOnly: true,
    image: "/images/gallery/poolfencingflattopfencing-jpg.jpg",
    alt: "Black flat top fence panels of the type supplied in DIY kits",
    hero: true,
  },
];

export function getStyle(slug: string) {
  return styles.find((s) => s.slug === slug);
}

export function getSupplyProduct(slug: string) {
  return supplyProducts.find((p) => p.slug === slug);
}
