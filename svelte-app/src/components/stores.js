import { writable } from "svelte/store";

export const registered = writable(false);
export const isOpen = writable(false);