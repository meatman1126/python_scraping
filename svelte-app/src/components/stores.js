import { writable } from "svelte/store";

export const registered = writable(false);
// リファクタリングにより現状不要
// export const isOpen = writable(false);
export const isLoading = writable(false);
export let generatedText = writable("");
