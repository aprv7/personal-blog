const modules = import.meta.glob("./blogs/*.mdx", { eager: true });

export const blogPosts = Object.entries(modules)
  .map(([path, module]) => ({
    ...module.metadata,
    slug: path.split("/").at(-1).replace(/\.mdx$/, ""),
    Content: module.default,
  }))
  .sort((a, b) => b.date.localeCompare(a.date));
