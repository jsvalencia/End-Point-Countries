// Generated by https://quicktype.io

export interface Country {
  name:         Name;
  tld?:         string[];
  cca2:         string;
  ccn3?:        string;
  cca3:         string;
  independent?: boolean;
  status:       Status;
  unMember:     boolean;
  currencies:   Currencies;
  idd:          Idd;
  capital:      string[];
  altSpellings: string[];
  region:       Region;
  subregion?:   string;
  languages:    { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  area:         number;
  demonyms:     Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  car:          Car;
  timezones:    string[];
  continents:   Continent[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  cioc?:        string;
  borders?:     string[];
  gini?:        { [key: string]: number };
  fifa?:        string;
  postalCode?:  PostalCode;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs?: string[];
  side:   Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Continent {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}

export interface Currencies {
  USD?: TartuGecko;
  XOF?: TartuGecko;
  NOK?: TartuGecko;
  ANG?: TartuGecko;
  EUR?: TartuGecko;
  BOB?: TartuGecko;
  GBP?: TartuGecko;
  JEP?: TartuGecko;
  ARS?: TartuGecko;
  BND?: TartuGecko;
  SGD?: TartuGecko;
  AUD?: TartuGecko;
  DZD?: TartuGecko;
  MUR?: TartuGecko;
  BYN?: TartuGecko;
  CRC?: TartuGecko;
  MKD?: TartuGecko;
  SHP?: TartuGecko;
  EGP?: TartuGecko;
  ILS?: TartuGecko;
  JOD?: TartuGecko;
  ETB?: TartuGecko;
  HUF?: TartuGecko;
  VES?: TartuGecko;
  BSD?: TartuGecko;
  TTD?: TartuGecko;
  AWG?: TartuGecko;
  BGN?: TartuGecko;
  STN?: TartuGecko;
  SEK?: TartuGecko;
  RUB?: TartuGecko;
  FKP?: TartuGecko;
  DKK?: TartuGecko;
  FOK?: TartuGecko;
  JMD?: TartuGecko;
  PKR?: TartuGecko;
  GEL?: TartuGecko;
  TND?: TartuGecko;
  CDF?: TartuGecko;
  NZD?: TartuGecko;
  RON?: TartuGecko;
  KZT?: TartuGecko;
  LSL?: TartuGecko;
  ZAR?: TartuGecko;
  FJD?: TartuGecko;
  PGK?: TartuGecko;
  KGS?: TartuGecko;
  SYP?: TartuGecko;
  YER?: TartuGecko;
  KID?: TartuGecko;
  KRW?: TartuGecko;
  CLP?: TartuGecko;
  OMR?: TartuGecko;
  XCD?: TartuGecko;
  ERN?: TartuGecko;
  SOS?: TartuGecko;
  LKR?: TartuGecko;
  UZS?: TartuGecko;
  PYG?: TartuGecko;
  DOP?: TartuGecko;
  GGP?: TartuGecko;
  ZMW?: TartuGecko;
  PLN?: TartuGecko;
  TMT?: TartuGecko;
  BAM?: BAM;
  BRL?: TartuGecko;
  IMP?: TartuGecko;
  MDL?: TartuGecko;
  TJS?: TartuGecko;
}

export interface TartuGecko {
  name:   string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng:  Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png:  string;
  svg:  string;
  alt?: string;
}

export interface Idd {
  root:     string;
  suffixes: string[];
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export enum StartOfWeek {
  Monday = "monday",
  Sunday = "sunday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}
