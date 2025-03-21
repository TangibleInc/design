import Link from '@docusaurus/Link'
import { AspectRatio } from '@site/components'

const demoImageProps = {
  src: '/demo/paris-street-rainy-day-caillebotte-1.jpg',
  alt: 'A house in a forest',
  style: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    borderRadius: 'var(--radius-2)',
  },
}

export default function AspectRatioExample() {
  return (
    <div>
      <h4>16 / 9</h4>
      <p style={{ maxWidth: '720px' }}>
        <AspectRatio ratio={16 / 9}>
          <img {...demoImageProps} src='/demo/vogh-3.jpg' />
        </AspectRatio>
      </p>
      <h4>4 / 3</h4>
      <p style={{ maxWidth: '620px' }}>
        <AspectRatio ratio={4 / 3}>
          <img {...demoImageProps} src='/demo/vogh-4.jpg' />
        </AspectRatio>
      </p>
      <h4>1 / 1</h4>
      <p style={{ maxWidth: '520px' }}>
        <AspectRatio ratio={1}>
          <img {...demoImageProps} src='/demo/vogh-2.jpg' />
        </AspectRatio>
      </p>
    </div>
  )
}
