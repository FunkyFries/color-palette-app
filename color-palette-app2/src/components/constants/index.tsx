export const DRAWER_WIDTH = 400;

export const sizes = {
  // up() {

  // },
  down(size: string) {
    const sizes: { [index: string]: string } = {
      xs: "575.98px",
      sm: "767.98px",
      md: "991.98px",
      lg: "1199.98px"
    };
    return `@media (max-width: ${sizes[size]})`;
  }
};
