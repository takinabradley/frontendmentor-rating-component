export default function FrontendMentorAttributionFooter({name = '', socialMediaLink = "#"}) {
  return (
    <footer className="attribution" style={{color: "var(--primary-text)"}}>
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" style={{color: "var(--primary-accent)"}}>Frontend Mentor</a>. 
      Coded by <a href={socialMediaLink}  style={{color: "var(--primary-accent)"}}>{name}</a>.
    </footer>
  )
}