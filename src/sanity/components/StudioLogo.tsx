export default function StudioLogo() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.png"
      alt="Capuzzo & Berroa"
      width={32}
      height={32}
      style={{ height: '24px', width: 'auto', objectFit: 'contain', filter: 'brightness(0.75) contrast(1.25)' }}
    />
  )
}
