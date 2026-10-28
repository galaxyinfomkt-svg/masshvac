/**
 * Install photos shown in the project gallery. Every file lives in /public/geo with GPS EXIF
 * (see scripts/geotag). `alt` only describes what is visible in the photo.
 */
export type PhotoCategory = "heat-pumps" | "mini-splits" | "cooling" | "heating" | "install";

export interface Photo {
  /** File id: /geo/<id>-828.jpg and /geo/<id>-1200.jpg */
  id: string;
  category: PhotoCategory;
  alt: string;
  /** Pixel size of the 1200 px version, used to reserve space and avoid layout shift. */
  width: number;
  height: number;
}

export const photoCategories: { key: PhotoCategory; label: string }[] = [
  { key: "heat-pumps", label: "Heat Pumps" },
  { key: "mini-splits", label: "Mini-Splits" },
  { key: "cooling", label: "Air Conditioning" },
  { key: "heating", label: "Heating & Air Handlers" },
  { key: "install", label: "Install Details" },
];

const P = (id: string, category: PhotoCategory, alt: string, width: number, height: number): Photo => ({ id, category, alt, width, height });

export const photos: Photo[] = [
  P("d055", "cooling", "Two outdoor condensers on a wall bracket with gauges and ladders below", 1200, 900),
  P("d029", "heat-pumps", "Three outdoor heat pump units side by side on a concrete pad", 1200, 900),
  P("d052", "heat-pumps", "Large Mitsubishi outdoor heat pump unit on a stand", 1200, 1600),
  P("d003", "mini-splits", "Ductless wall unit above a window with white curtains", 1200, 801),
  P("69988531df9bdf143b5e9eeb", "heat-pumps", "Mitsubishi outdoor heat pump on a stand beside a brick foundation", 1200, 1600),
  P("d038", "heating", "Air handler with insulated ductwork in an attic", 1200, 900),
  P("d027", "heat-pumps", "Mitsubishi outdoor heat pump beside a stone foundation", 1200, 1600),
  P("d012", "mini-splits", "Ductless wall unit above curtains in a living room", 1200, 900),
  P("6998853163ae752c1728d099", "cooling", "Two outdoor air conditioning condensers beside a house", 1200, 795),
  P("d022", "heat-pumps", "LG outdoor heat pump unit on a stand beside a white house", 1200, 1600),
  P("6998853120c0359b195a0dd9", "heating", "Ducted air handler with insulated duct and copper line sets in a basement", 1200, 1600),
  P("d008", "mini-splits", "Ductless wall unit on a gray wall", 1200, 900),
  P("d009", "heat-pumps", "Fujitsu outdoor heat pump on a stand against a fieldstone foundation", 1200, 1600),
  P("69988531e92bc11a12e97972", "heat-pumps", "Outdoor heat pump on a stand beside a grey house", 1200, 1600),
  P("d017", "heating", "Bosch gas furnace in a basement with a flue vent", 1200, 1600),
  P("d039", "heating", "Air handler and ductwork in an attic with a drain line", 1200, 900),
  P("d037", "heat-pumps", "Mitsubishi outdoor heat pump on a stand beside a white house", 1200, 1600),
  P("69988531df9bdffb5f5e9f09", "cooling", "Bosch outdoor air conditioning condenser beside a house", 1200, 900),
  P("d010", "mini-splits", "Ductless wall unit in a room with a window", 1200, 900),
  P("d064", "heat-pumps", "LG outdoor heat pump with two fans on a stand", 1200, 1600),
  P("6998853163ae75c64728d09a", "heating", "Bosch gas furnace installed in a basement", 1200, 1600),
  P("6998853108245e5cde03d06c", "heat-pumps", "Fujitsu outdoor heat pump on a stand with a person beside it", 1200, 1600),
  P("d060", "mini-splits", "Ductless wall unit on a sloped wall", 1200, 900),
  P("d036", "heating", "Air handler with a drain line in a basement", 1200, 1600),
  P("d063", "heat-pumps", "Mitsubishi outdoor heat pump beside a stone foundation", 1200, 1600),
  P("69988531e92bc121bee97966", "heating", "Wall-hung Bosch tankless water heaters with flue exhaust piping", 1200, 1600),
  P("d032", "install", "Refrigerant lines and branch boxes along a basement ceiling", 1200, 1600),
  P("69988531df9bdf89fa5e9ee1", "heat-pumps", "Fujitsu outdoor heat pump on a pad in a back yard", 1200, 1600),
  P("d035", "install", "Multi-zone branch box with refrigerant lines in a basement", 1200, 1600),
  P("d023", "mini-splits", "Wall-mounted ductless unit in an empty room with built-in shelves", 1200, 900),
  P("6998853120c03544725a0db8", "mini-splits", "Ductless wall unit against patterned wallpaper", 1170, 632),
  P("d065", "heat-pumps", "LG outdoor heat pump seen from the side", 1200, 1600),
  P("699885315ba498e66200370c", "heating", "Air handler on a drain pan in a crawl space with insulated ductwork", 1200, 900),
  P("d071", "heat-pumps", "Fujitsu outdoor unit beside a basement window", 1200, 900),
  P("699885313a2afd32ac59c785", "cooling", "Outdoor condenser beside a grey clapboard house", 1200, 1600),
  P("69988531e92bc19c80e9796b", "mini-splits", "Ductless wall unit above a window with a roller shade", 1200, 1600),
  P("d031", "mini-splits", "Ductless wall unit mounted high on a wall", 1200, 1600),
  P("69988531df9bdf801d5e9ee3", "heating", "Air handler with insulated plenum in a finished basement", 1200, 1600),
  P("699885313a2afd623359c780", "heating", "Furnace installed in a utility closet", 1200, 1600),
  P("69988531e92bc1302fe9796c", "mini-splits", "Ductless wall unit above a window", 1200, 900),
  P("699885315ba498f886003707", "heating", "Ducted air handler with silver insulated duct and copper lines", 1200, 1600),
  P("6998853163ae753dac28d098", "mini-splits", "Ceiling-mounted ductless cassette in a living room", 739, 1600),
];

export const photoSrc = (id: string, size: 828 | 1200 = 1200) => `/geo/${id}-${size}.jpg`;
