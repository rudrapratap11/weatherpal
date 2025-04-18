/** @format */

import { atom } from "jotai";

// Atom to store the name of the place
export const placeAtom = atom("Republic of India");

// Atom to store the loading state for a city
export const loadingCityAtom = atom(false);
