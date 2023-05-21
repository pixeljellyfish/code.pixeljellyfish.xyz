/// <reference types="astro/client" />

declare module '@utils/dayjs'{
    export const dayjs: Astro.Component;

}
declare module 'astro-seo' {
  export const SEO: Astro.Component;
}

declare module 'astro-icon' {
  export const Icon: Astro.Component;
}