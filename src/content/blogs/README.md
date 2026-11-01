# Writing posts

Add a `.mdx` file to this directory. The filename becomes the post URL slug, so use lowercase words separated by hyphens.

Each post should export a `metadata` object with `title`, `date` (`YYYY-MM-DD`), `description`, `coverImage`, and `coverImageAlt`, followed by the post's MDX content.

Keep photo files in `public/blogs/` and reference them from MDX with root-relative paths, for example:

```md
![A short description of the photo](/blogs/my-photo.jpg)
```

The existing profile photo at `/photo.JPG` can also be used. Posts appear automatically on `/blogs` and at `/blogs/<filename>`.
