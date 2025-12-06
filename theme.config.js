const YEAR = new Date().getFullYear()

const SOCIAL_LINKS = [
  {
    href: 'https://www.linkedin.com/in/pharzam/',
    label: 'LinkedIn',
    icon: '/icons/linkedin.svg'
  },
  {
    href: 'https://x.com/pharzam',
    label: 'X',
    icon: '/icons/x.svg'
  },
  {
    href: 'https://www.facebook.com/farzam',
    label: 'Facebook',
    icon: '/icons/facebook.svg'
  }
]

export default {
  footer: (
    <footer
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        marginTop: '6rem'
      }}
    >
      <medium>
        <time>{YEAR}</time> via &#9650;
      </medium>
      <div style={{ display: 'flex', gap: '0.75rem' }}>
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            style={{ display: 'inline-flex' }}
          >
            <img
              src={link.icon}
              alt={link.label}
              width="20"
              height="20"
              style={{ display: 'block' }}
            />
          </a>
        ))}
      </div>
    </footer>
  )
}
