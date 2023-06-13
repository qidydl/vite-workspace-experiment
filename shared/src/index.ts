export * from "./client/";
export * from "./components/";
// NOTE: Because the tsconfig path requires a prefix with a trailing slash, you have to import
// "@qidydl/shared/<something>" which means using this file requires importing "@qidydl/shared/index" instead of just
// "@qidydl/shared". Maybe there's a way to fix that (I'll try it), but this is pretty trivial.
// Upon further investigation, removing the last slash in the alias name means you can import "@qidydl/shared/" with the
// trailing slash required, which is a bit wonky. Personal preference is to leave it and never use this file (but I'm
// leaving the file here for these comments).
