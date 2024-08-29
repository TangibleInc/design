export default {
  build: [
    {
      src: './index.scss',
      dest: './build/design.min.css',
    },
    {
      src: './index.html',
      dest: './build',
    },
  ],
  serve: {
    dir: 'build',
    port: 3535
  }
}
