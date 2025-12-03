import slugify from "slugify";

export const slugifyTitle = (title: string) => slugify(title, {
  lower: true,
  strict: false,
  remove: /[*+~()'"!:@?#=><{}[\]|\\\/]/g
});