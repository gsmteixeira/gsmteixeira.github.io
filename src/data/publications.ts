// src/data/publications.ts

export type Publication = {
  type: "First author" | "Collaboration" | "Other";
  title: string;
  authors: string;
  venue: string;
  year: string;
  doi?: string;
};

export const publications: Publication[] = [
  {
    type: "First author",
    title:
      "Photometric redshifts probability density estimation from recurrent neural networks in the DECam local volume exploration survey data release 2",
    authors: "Teixeira et al.",
    venue: "Astronomy and Computing, 100886",
    year: "2024",
    doi: "https://doi.org/10.1016/j.ascom.2024.100886",
  },
  {
    type: "Collaboration",
    title:
      "A dark standard siren measurement of the Hubble constant following LIGO/Virgo/KAGRA O4a and previous runs",
    authors: "Bom et al.",
    venue: "Monthly Notices of the Royal Astronomical Society, 535(1), 961–975",
    year: "2024",
    doi: "https://doi.org/10.1093/mnras/stae2390",
  },
  {
    type: "Collaboration",
    title:
      "A dark siren measurement of the Hubble constant using gravitational wave events from the first three LIGO/Virgo observing runs and DELVE",
    authors: "Alfradique et al.",
    venue:
      "Monthly Notices of the Royal Astronomical Society, 528(2), 3249–3259",
    year: "2024",
    doi: "https://doi.org/10.1093/mnras/stae086",
  },
  {
    type: "Collaboration",
    title:
      "CHANCES, The Chilean Cluster Galaxy Evolution Survey: selection and initial characterization of clusters and superclusters",
    authors: "Sifón et al.",
    venue: "Astronomy & Astrophysics (arXiv:2411.13655)",
    year: "2024",
    doi: "https://doi.org/10.1051/0004-6361/202452710",
  },
  {
    type: "Collaboration",
    title:
      "Photometric redshifts for the S-PLUS Survey: Is machine learning up to the task?",
    authors: "Lima et al.",
    venue: "Astronomy and Computing, 38, 100510",
    year: "2022",
    doi: "https://doi.org/10.1016/j.ascom.2021.100510",
  },
  {
    type: "Collaboration",
    title: "The LSST-DESC 3x2pt Tomography Optimization Challenge",
    authors: "Zuntz et al.",
    venue: "The Open Journal of Astrophysics, 4",
    year: "2021",
    doi: "https://doi.org/10.21105/astro.2108.13418",
  },
  {
    type: "Collaboration",
    title:
      "Data Release 2 of S-PLUS: Accurate template-fitting based photometry covering ~1000 deg² in 12 optical filters",
    authors: "Almeida-Fernandes et al.",
    venue:
      "Monthly Notices of the Royal Astronomical Society, 511(3), 4590–4618",
    year: "2022",
    doi: "https://doi.org/10.1093/mnras/stac284",
  },
  {
    type: "Other",
    title:
      "Complete identification of complex salt geometries from inaccurate migrated subsurface offset gathers using deep learning",
    authors: "Muller et al.",
    venue: "Geophysics, 87(6), R453–R463",
    year: "2022",
    doi: "https://doi.org/10.1190/geo2021-0586.1",
  },
  {
    type: "Collaboration",
    title: "The Role of Supercluster Filaments in Shaping Galaxy Clusters",
    authors: "Baier-Soto et al.",
    venue: "Astronomy & Astrophysics, accepted (05 October 2025)",
    year: "2025 (accepted)",
    doi: "https://doi.org/10.1051/0004-6361/202556957",
  },
];
