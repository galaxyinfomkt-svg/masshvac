import type { LocalCityContent } from "./types";
import acton from "./acton.json";
import ashland from "./ashland.json";
import ayer from "./ayer.json";
import berlin from "./berlin.json";
import bolton from "./bolton.json";
import boxborough from "./boxborough.json";
import boylston from "./boylston.json";
import carlisle from "./carlisle.json";
import chelmsford from "./chelmsford.json";
import clinton from "./clinton.json";
import concord from "./concord.json";
import dover from "./dover.json";
import framingham from "./framingham.json";
import grafton from "./grafton.json";
import groton from "./groton.json";
import harvard from "./harvard.json";
import holden from "./holden.json";
import holliston from "./holliston.json";
import hopedale from "./hopedale.json";
import hopkinton from "./hopkinton.json";
import hudson from "./hudson.json";
import lancaster from "./lancaster.json";
import lincoln from "./lincoln.json";
import littleton from "./littleton.json";
import lunenburg from "./lunenburg.json";
import marlborough from "./marlborough.json";
import maynard from "./maynard.json";
import medfield from "./medfield.json";
import medway from "./medway.json";
import mendon from "./mendon.json";
import milford from "./milford.json";
import millis from "./millis.json";
import natick from "./natick.json";
import needham from "./needham.json";
import norfolk from "./norfolk.json";
import northborough from "./northborough.json";
import sherborn from "./sherborn.json";
import shirley from "./shirley.json";
import shrewsbury from "./shrewsbury.json";
import southborough from "./southborough.json";
import sterling from "./sterling.json";
import stow from "./stow.json";
import sudbury from "./sudbury.json";
import upton from "./upton.json";
import wayland from "./wayland.json";
import wellesley from "./wellesley.json";
import west_boylston from "./west-boylston.json";
import westborough from "./westborough.json";
import westford from "./westford.json";
import weston from "./weston.json";

/**
 * Cities that have sourced, unique local content. A city listed here is indexable
 * (see cityHasLocalContent in ../cities.ts) and its pages render this content
 * instead of the generic templates. Add a city only after it passed validate.py and
 * measure.py (scripts/local-content).
 */
const localContent: Record<string, LocalCityContent> = {
  "acton": acton as LocalCityContent,
  "ashland": ashland as LocalCityContent,
  "ayer": ayer as LocalCityContent,
  "berlin": berlin as LocalCityContent,
  "bolton": bolton as LocalCityContent,
  "boxborough": boxborough as LocalCityContent,
  "boylston": boylston as LocalCityContent,
  "carlisle": carlisle as LocalCityContent,
  "chelmsford": chelmsford as LocalCityContent,
  "clinton": clinton as LocalCityContent,
  "concord": concord as LocalCityContent,
  "dover": dover as LocalCityContent,
  "framingham": framingham as LocalCityContent,
  "grafton": grafton as LocalCityContent,
  "groton": groton as LocalCityContent,
  "harvard": harvard as LocalCityContent,
  "holden": holden as LocalCityContent,
  "holliston": holliston as LocalCityContent,
  "hopedale": hopedale as LocalCityContent,
  "hopkinton": hopkinton as LocalCityContent,
  "hudson": hudson as LocalCityContent,
  "lancaster": lancaster as LocalCityContent,
  "lincoln": lincoln as LocalCityContent,
  "littleton": littleton as LocalCityContent,
  "lunenburg": lunenburg as LocalCityContent,
  "marlborough": marlborough as LocalCityContent,
  "maynard": maynard as LocalCityContent,
  "medfield": medfield as LocalCityContent,
  "medway": medway as LocalCityContent,
  "mendon": mendon as LocalCityContent,
  "milford": milford as LocalCityContent,
  "millis": millis as LocalCityContent,
  "natick": natick as LocalCityContent,
  "needham": needham as LocalCityContent,
  "norfolk": norfolk as LocalCityContent,
  "northborough": northborough as LocalCityContent,
  "sherborn": sherborn as LocalCityContent,
  "shirley": shirley as LocalCityContent,
  "shrewsbury": shrewsbury as LocalCityContent,
  "southborough": southborough as LocalCityContent,
  "sterling": sterling as LocalCityContent,
  "stow": stow as LocalCityContent,
  "sudbury": sudbury as LocalCityContent,
  "upton": upton as LocalCityContent,
  "wayland": wayland as LocalCityContent,
  "wellesley": wellesley as LocalCityContent,
  "west-boylston": west_boylston as LocalCityContent,
  "westborough": westborough as LocalCityContent,
  "westford": westford as LocalCityContent,
  "weston": weston as LocalCityContent,
};

export function getLocalContent(slug: string): LocalCityContent | undefined {
  return localContent[slug];
}
