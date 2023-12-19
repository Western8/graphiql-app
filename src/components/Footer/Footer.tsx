import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="links-github">
        <a href="https://github.com/western8" className="link-github"><img src={`${window.location.origin}/github.svg`} width="36" height="36" alt="github" /></a>
        <div>{`\u00A0\u00A0\u00A0 © \u00A0 2024`}</div>
      </div>
      <div className="links-rss"><a href="https://rs.school/js/"><img src={`${window.location.origin}/rs_school_js.svg`} height="32" alt="RSS" /></a></div>
    </footer>
  );
}

export default Footer;
