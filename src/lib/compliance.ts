export type Article = {
  slug: string;
  title: string;
  question: string;
  answer: string;
  explanation: string[];
  mistakes: string[];
};

export const articles: Article[] = [
  {
    slug: "pool-fence-height",
    title: "Pool fence height in NSW",
    question: "How high does a pool fence need to be in NSW?",
    answer: "NSW Government guidance states that a pool fence must be at least 1.2 m high, measured from finished ground level. If a boundary fence forms part of the pool barrier, that barrier must be 1.8 m high.",
    explanation: [
      "The 1.2 m figure is the height commonly quoted for a pool fence inside the property. It is measured on the outside of the barrier from the finished ground, not from the top of a garden bed that can be moved.",
      "A boundary fence used as part of the pool barrier is treated differently. NSW Government guidance says that barrier must be 1.8 m high. Which side is measured, and how a slope or retaining wall is treated, depends on the standard that applies to the pool.",
      "Pools built at different times can sit under different versions of AS 1926. The NSW Government notes 1986, 2007 and 2012 versions, tied to construction dates, and says a substantial change to the barrier can bring the current requirements into play.",
    ],
    mistakes: [
      "Measuring from the pool side only and missing a low spot outside the fence.",
      "Assuming a 1.5 m Colorbond boundary is tall enough because it feels high.",
      "Adding soil or a planter that reduces the effective height.",
    ],
  },
  {
    slug: "pool-fence-gaps",
    title: "Gaps under and in a pool fence",
    question: "What is the minimum gap under a pool fence in NSW?",
    answer: "NSW Government guidance says the gap under a pool fence must not be bigger than 10 cm from finished ground level, and gaps between vertical bars must not be more than 10 cm.",
    explanation: [
      "The bottom gap is measured to finished ground. Soft garden soil, mulch and eroding edges are a problem because a child can scrape them away. The ground under the barrier should be a surface that stays put.",
      "Vertical openings are also limited to 10 cm. A gate that drops, a panel that flexes, or a bar that bends can open that gap after installation.",
      "Mesh and perforated barriers have their own hole-size limits in the NSW Government summary: holes no greater than 13 mm at 1.2 m fence height, with a different limit where a 1.8 m barrier uses larger holes.",
    ],
    mistakes: [
      "Leaving a drain, step or scooped-out garden under the bottom rail.",
      "Setting panels before paving, then finding the finished level opens the gap.",
      "Ignoring a gate that scrapes and is later lifted, increasing the clearance.",
    ],
  },
  {
    slug: "non-climbable-zones",
    title: "Non-climbable zones",
    question: "What is a non-climbable zone around a pool fence?",
    answer: "NSW Government guidance says objects such as trees, shrubs, barbecues, pots, toys, ladders and chairs must stay out of a 90 cm non-climbable zone, measured in an arc from the top of the fence, with a further 30 cm inside the pool area kept clear of footholds.",
    explanation: [
      "Horizontal climbable members, where they exist, are described as needing to be at least 90 cm apart.",
      "The zone is about the fence as a climbing frame. A compliant panel can be made climbable by a wheelie bin, a retaining wall, a tap, or a horizontal rail on the wrong side.",
      "Council diagrams often show several zones (inside and outside the barrier). The exact arc depends on the standard that applies. This page is a summary, not a substitute for that standard or a certifier.",
    ],
    mistakes: [
      "Placing a pot or bench against the fence after the inspection.",
      "Training a climber or small tree into the arc.",
      "Using a decorative panel with built-in footholds.",
    ],
  },
  {
    slug: "pool-gate-requirements",
    title: "Pool gate requirements",
    question: "What are the rules for pool gates in NSW?",
    answer: "NSW Government guidance says a pool gate should swing away from the pool, shut by itself from any open position, and latch itself when it closes. It should not be propped open.",
    explanation: [
      "Self-closing means the gate returns and shuts without someone pushing it the last few centimetres. Self-latching means the latch engages when it shuts.",
      "If a gate currently swings into the pool area, the published guidance is to re-hang it so it swings outwards.",
      "Latch height and shielding are set out in the Australian Standard and in council barrier notes. A common published figure is a latch release at least 1.5 m above ground, or a shielded latch on the pool side. Confirm the detail for the standard that applies to the pool.",
      "Wider and double gates are harder to keep self-closing. Many council notes discourage double gates for pool barriers for that reason.",
    ],
    mistakes: [
      "A hinge that has dropped so the gate only closes when lifted.",
      "A latch that people can reach through the bars.",
      "Pavers or a mat that hold the gate short of the latch.",
    ],
  },
  {
    slug: "boundary-fences",
    title: "Boundary fences and pools",
    question: "Can a Colorbond boundary fence be used as a pool barrier?",
    answer: "It can form part of a pool barrier only if that fence meets the barrier rules that apply, including the 1.8 m height noted by the NSW Government when a boundary fence is part of the pool fence. A standard dividing fence is not automatically suitable.",
    explanation: [
      "Colorbond sheet can be a useful solid barrier, but climbable rails, low height, gates in the boundary, and objects against the fence are common reasons it fails.",
      "An extension can raise height. It still has to be fixed so it does not create footholds, and the rest of the enclosure — including the pool gate back to the house — still has to work.",
      "Neighbours, retaining walls and sloping yards change how the height is measured. That is a site question, not a brochure question.",
    ],
    mistakes: [
      "Assuming any 1.8 m Colorbond fence is a pool fence.",
      "Putting the pool gate in the boundary fence because it is convenient.",
      "Leaving the neighbour’s side rails, shelves or bins in the climb zone.",
    ],
  },
  {
    slug: "fence-extensions",
    title: "Pool fence extensions",
    question: "Can I extend a Colorbond fence for a pool?",
    answer: "Yes, an extension is a common way to add height to an existing fence, using sheet infill, louvre, slat or lattice. The extension has to be designed for the pool barrier. It does not, by itself, make the fence compliant.",
    explanation: [
      "Sheet infill continues the solid face. Louvre and slat change airflow and privacy. Lattice is often used above sheet. Each one can introduce a climb point if the rails or openings are in the wrong place.",
      "We can look at photos of the existing fence and then confirm height, fixing and the rest of the barrier on site.",
    ],
    mistakes: [
      "Screwing a light lattice on in a way that a child can use as a ladder.",
      "Raising one side and leaving the return fence short.",
      "Ignoring the gate and the house wall because the boundary looks tall.",
    ],
  },
  {
    slug: "cpr-signage",
    title: "CPR signs",
    question: "Does a NSW pool need a CPR sign?",
    answer: "Yes. The NSW Government requires a CPR sign near the pool, readable from 3 m and kept in good condition. Updated signage applies to new pools from 1 September 2019, and to existing pools when the barrier is substantially altered or rebuilt.",
    explanation: [
      "The sign is part of the owner’s obligations, separate from the fence height. A new fence project is a sensible time to check the sign is current and readable.",
    ],
    mistakes: ["A faded sign behind a plant.", "No sign because the pool is portable or a spa."],
  },
  {
    slug: "registration-and-inspections",
    title: "Registration and inspections",
    question: "Does registering a pool mean the fence complies?",
    answer: "No. The NSW Government states that registering a pool does not mean it meets compliance requirements. Compliance is assessed by inspection. Councils and registered certifiers carry out that role.",
    explanation: [
      "Owners must register pools and spas on the NSW Swimming Pool Register. Registration is against the property address.",
      "Councils inspect in set programs, including pools at tourist and visitor accommodation on a three-year cycle, and they inspect when an owner asks before a sale or lease.",
      "A certificate of compliance is not the same document as a certificate of registration.",
    ],
    mistakes: [
      "Buying a house and assuming the old compliance certificate still describes the fence.",
      "Altering the barrier and not realising exemptions from an older standard can end.",
    ],
  },
  {
    slug: "older-pools",
    title: "Older pools and different standards",
    question: "Do older NSW pools use the same fence rules?",
    answer: "Not always. The NSW Government says the applicable version of AS 1926 can depend on when the pool was built: 1986 for many pools before 30 August 2008, the 2007 standard for pools from 1 September 2008 to 30 April 2013, and AS 1926.1-2012 for pools constructed after 1 May 2013.",
    explanation: [
      "If the barrier is modified or altered — which can include some house and yard renovations — the current Act, the Swimming Pools Regulation 2018 and AS 1926.1-2012 can apply, and earlier exemptions can cease.",
      "Windows and doors that once formed part of a barrier are called out specifically: the NSW Government says child-resistant doors and windows as part of the pool barrier are no longer allowed for older pools that used that approach.",
    ],
    mistakes: [
      "Copying a neighbour’s older fence detail onto a new pool.",
      "Rebuilding one side and assuming the rest can stay on the old exemption.",
    ],
  },
  {
    slug: "slopes-walls-windows",
    title: "Slopes, retaining walls and windows",
    question: "Do slopes, retaining walls and windows change pool fence rules?",
    answer: "They can. Height is measured from finished ground, so a slope changes the number. Retaining walls, steps and objects are commonly required to stay clear of the barrier. Windows and doors are no longer an acceptable substitute for a pool fence on the current NSW Government guidance for that older practice.",
    explanation: [
      "A retaining wall can act as a step up to the fence or as part of the barrier itself. Those are different problems and they are solved differently.",
      "On a slope, a fence that is 1.2 m at one post can be short at the next if the ground rises outside the pool.",
      "We look at these on site before recommending a panel layout. Photos help us prepare; they do not replace the measure where the ground is uneven.",
    ],
    mistakes: [
      "Stepping panels without checking the bottom gap on the low side.",
      "Building the fence on top of a wall a child can walk up.",
      "Leaving a low window opening into the pool area.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
