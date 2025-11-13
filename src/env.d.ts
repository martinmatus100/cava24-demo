/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="svelte" />

declare module "*.svelte" {
  export { SvelteComponent as default } from "svelte";
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}